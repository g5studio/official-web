import { User } from '@user/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase/app';
import { FirebaseService } from '@services//firebase.service';
import { UserService } from '@user//services/user.service';
import { map, take, filter, tap } from 'rxjs/operators';
import { EUserProvider } from '@utilities/enums/user.enum';
import { UserIdleService } from 'angular-user-idle';
import * as  moment from 'moment';

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
    private $idle: UserIdleService
  ) {
    this.$fbAuth.authState.subscribe(
      user => {
        if (user) {
          if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
            this.logout();
          } else {
            sessionStorage.setItem('uid', user.uid);
            this.$firebase.document('users', user.uid).get().subscribe(
              userProfile => {
                this.initalUser(new User(userProfile.data(), user));
                if (this.redirectUrl) {
                  this.$navigation.navigate(this.redirectUrl);
                }
              }
            );
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

  public login({ email, password }): Promise<void> {
    return this.$firebaseAuth.signInWithEmailAndPassword(email, password).then(
      res => {
        if (!res.user.emailVerified) {
          window.alert('信箱尚未完成驗證');
        } else {
          this.redirectUrl = '/home';
        }
      }
    ).catch(
      error => console.log(error)
    );
  }

  public signUpWithProvider(org = EUserProvider.Google): Promise<void> {
    const provider = this.getSingInProvider(org);
    return this.$firebaseAuth.signInWithPopup(provider).then(
      res => {
        if (res.additionalUserInfo.isNewUser) {
          this.signUp(res.user, res.additionalUserInfo.profile, org);
        } else {
          this.redirectUrl = '/home';
        }
      }
    );
  }

  public signUpWithEmailAndPassword({ email, password }): Promise<void> {
    return this.$firebaseAuth.createUserWithEmailAndPassword(email, password).then(
      res => {
        if (res.additionalUserInfo.isNewUser) {
          res.user.sendEmailVerification().then(
            _ => this.signUp(res.user, res.additionalUserInfo.profile)
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

  private signUp(user: fb.User, profile: any, org?: EUserProvider) {
    const USER_PROFILE = !!org ? new User(profile, user, org) : new User(profile, user);
    this.$firebase.document('users', user.uid).set({ ...USER_PROFILE.profile }).then(
      _ => this.$navigation.navigate('home')
    );
  }

  private initalUser(profile: any) {
    this.setIdle();
    this.$user.inital(profile);
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
    let provider;
    switch (way) {
      case EUserProvider.Google:
        provider = new fb.auth.GoogleAuthProvider();
        break;
    }
    return provider;
  }

}
