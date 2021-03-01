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
        console.log(user)
        if (!!user) {
          if (user?.providerData[0].providerId !== 'password' || user?.emailVerified) {
            this.loginCallback(user);
          }
        } else {
          this.logout();
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
        } else {
          this.loginCallback(res.user);
        }
      }
    ).catch(error => this.errorProcess(error));
  }

  public loginWithProvider(provider = EUserProvider.Google): Promise<void> {
    this.$overlay.startLoading();
    const Provider = this.getSingInProvider(provider);
    this.$firebaseAuth.setPersistence(this.rememberMe ? fb.auth.Auth.Persistence.LOCAL : fb.auth.Auth.Persistence.SESSION);
    return this.$firebaseAuth.signInWithPopup(Provider).then(
      res => {
        this.$overlay.finishLoading();
        if (res.additionalUserInfo.isNewUser) {
          const UserInfo = new User(res.additionalUserInfo.profile, res.user, provider);
          this.setUserProfile(UserInfo);
        }
      }
    ).catch(error => this.errorProcess(error));
  }

  public signUpWithEmailAndPassword({ email, password, nickName }): Promise<void> {
    this.$overlay.startLoading();
    return this.$firebaseAuth.createUserWithEmailAndPassword(email, password).then(
      res => {
        const UserInfo = new User(null, res.user);
        UserInfo.profile.nickName = nickName;
        this.setUserProfile(UserInfo).then(
          _ => {
            res.user.sendEmailVerification().then(
              _ => {
                this.$overlay.finishLoading();
                const MESSAGE_OPTIONS: IMessagePopupOptions = {
                  alert: false,
                  message: EMessage.VerificationLetterSent
                };
                this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
              }
            ).catch(error => this.errorProcess(error))
          }
        ).catch(error => this.errorProcess(error));
      }
    ).catch(error => this.errorProcess(error));
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

  private errorProcess(error: any) {
    this.$overlay.finishLoading();
    const MESSAGE_OPTIONS: IMessagePopupOptions = {
      alert: true,
      message: this.getErrorMsg(error.code)
    };
    this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
    throw error;
  }

  private getErrorMsg(code: string) {
    if (code.includes('user-not-found')) { return EMessage.UserNotFund; }
    else if (code.includes('wrong-password')) { return EMessage.InvalidPassword; }
    else if (code.includes('email-already-in-use')) { return EMessage.EmailAlreadyInUse }
    else {
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
          sessionStorage.setItem('uid', userProfile.id);
          this.$navigation.navigate(this.redirectUrl);
          resolve(userProfile);
        }
      ), error => reject(error);
    })
  }

  private setUserProfile(user: User): Promise<void> {
    return this.$firebase.document('users', user.profile.uid).set({ ...user.profile })
      .catch(
        error => {
          this.$overlay.finishLoading();
          console.log(error)
        }
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
