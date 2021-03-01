import { User } from '@user/models/user.model';
import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase/app';
import { FirebaseService } from '@services//firebase.service';
import { UserService } from '@user//services/user.service';
import { take } from 'rxjs/operators';
import { EUserProvider } from '@utilities/enums/user.enum';
import { UserIdleService } from 'angular-user-idle';
import { IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';
import { OverlayService } from '@services/overlay.service';
import { MessagePopup } from '@overlay/overlay.model';
import { EMessage } from '@utilities/enums/overlay.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $navigation: NavigationService,
    private $firebaseAuth: AngularFireAuth,
    private $firebase: FirebaseService,
    private $fbAuth: AngularFireAuth,
    private $user: UserService,
    private $idle: UserIdleService,
    private $overlay: OverlayService
  ) {
    this.$fbAuth.authState.subscribe(
      user => {
        if (!!user && (user?.providerData[0].providerId !== 'password' || user?.emailVerified)) {
          this.loginCallback(user).then(
            userProfile => {
              sessionStorage.setItem('uid', userProfile.id);
              this.$navigation.navigate(this.redirectUrl);
            }
          );
        } else {
          // this.logout();
        }
      }
    );
  }

  get isLogin() {
    return !!sessionStorage.getItem('uid');
  }

  set redirectUrl(url: string) {
    sessionStorage.setItem('redirectUrl', url);
  }

  get redirectUrl() {
    return sessionStorage.getItem('redirectUrl');
  }

  get rememberMe(): boolean {
    return localStorage.getItem('rememberMe') ? JSON.parse(localStorage.getItem('rememberMe')) : false;
  }

  public login({ email, password }): Promise<void> {
    this.$overlay.startLoading();
    this.$firebaseAuth.setPersistence(this.rememberMe ? fb.auth.Auth.Persistence.LOCAL : fb.auth.Auth.Persistence.SESSION);
    return this.$firebaseAuth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.$overlay.finishLoading();
        if (!res.user.emailVerified) {
          const MESSAGE_OPTIONS: IMessagePopupOptions = {
            alert: true,
            message: EMessage.EmailUnverified
          };
          this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
        }
      }
    ).catch(
      error => {
        console.log(error);
        this.$overlay.finishLoading();
        const MESSAGE_OPTIONS: IMessagePopupOptions = {
          alert: true,
          message: this.getErrorMsg(error.code)
        };
        this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
      }
    );
  }

  public loginWithProvider(provider = EUserProvider.Google): Promise<void> {
    this.$overlay.startLoading();
    const Provider = this.getSingInProvider(provider);
    this.$firebaseAuth.setPersistence(this.rememberMe ? fb.auth.Auth.Persistence.LOCAL : fb.auth.Auth.Persistence.SESSION);
    return this.$firebaseAuth.signInWithPopup(Provider).then(
      res => {
        this.$overlay.finishLoading();
        if (res.additionalUserInfo.isNewUser) {
          this.initialUserProfile(res.user, res.additionalUserInfo.profile, provider);
        }
      }
    ).catch(
      error => {
        this.$overlay.finishLoading();
        const MESSAGE_OPTIONS: IMessagePopupOptions = {
          alert: true,
          message: this.getErrorMsg(error.code)
        };
        this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
      }
    );
  }

  public signUpWithEmailAndPassword({ email, password }): Promise<void> {
    this.$overlay.startLoading();
    return this.$firebaseAuth.createUserWithEmailAndPassword(email, password).then(
      res => {
        this.$overlay.finishLoading();
        if (res.additionalUserInfo.isNewUser) {
          res.user.sendEmailVerification().then(
            _ => this.initialUserProfile(res.user, res.additionalUserInfo.profile)
          );
        }
      }
    );
  }

  public logout() {
    this.$fbAuth.signOut();
    sessionStorage.clear();
    this.$navigation.navigate('landing');
  }

  public firstLogin() {
    this.$user.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        this.$firebase.collection('users').update(user.profile.uid, { firstLogin: false });
      }
    );
  }

  private getErrorMsg(code: string) {
    if (code.includes('user-not-found')) {
      return EMessage.UserNotFund;
    } else if (code.includes('wrong-password')) {
      return EMessage.InvalidPassword;
    } else {
      return EMessage.UnknowError;
    }
  }

  private loginCallback(user: fb.User): Promise<fb.firestore.DocumentSnapshot<fb.firestore.DocumentData>> {
    this.$overlay.startLoading();
    return new Promise((resolve, reject) => {
      this.$firebase.document('users', user.uid).get().subscribe(
        userProfile => {
          this.$overlay.finishLoading();
          this.setIdle();
          this.$user.inital(new User(userProfile.data(), user));
          resolve(userProfile);
        }
      ), error => reject(error);
    })
  }

  private initialUserProfile(user: fb.User, profile: any, provider?: EUserProvider) {
    console.log(profile);
    const USER_PROFILE = !!provider ? new User(profile, user, provider) : new User(profile, user);
    this.$firebase.document('users', user.uid).set({ ...USER_PROFILE.profile }).then(
      _ => this.$navigation.navigate('home')
    );
  }

  private setIdle() {
    this.$idle.startWatching();
    this.$idle.onTimerStart().subscribe(
      _ => {
        this.logout();
        this.$idle.stopWatching();
      }
    );
  }

  private getSingInProvider(way: EUserProvider) {
    switch (way) {
      case EUserProvider.Google: return new fb.auth.GoogleAuthProvider();
    }
  }

}
