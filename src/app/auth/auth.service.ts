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
          sessionStorage.setItem('uid', user.uid);
          this.$firebase.document('users', user.uid).get().subscribe(
            userProfile => {
              this.initalUser(userProfile.data());
              this.$navigation.navigate(this.redirectUrl);
            }
          );
        } else {
          this.logout();
        }
      }
    );
  }

  private userDBListener: Subscription;

  get isLogin() {
    return !!sessionStorage.getItem('uid');
  }

  set redirectUrl(url: string) {
    sessionStorage.setItem('redirectUrl', url);
  }

  get redirectUrl() {
    return sessionStorage.getItem('redirectUrl');
  }

  public login(way = EUserProvider.Google) {
    this.$firebaseAuth.createUserWithEmailAndPassword('test@gmail.com', '123456').then(
      res => {
        console.log(res);
      }
    ).catch(
      error => console.log(error)
    );
  }

  public signIn(org = EUserProvider.Google) {
    const provider = this.getSingInProvider(org);
    this.$firebaseAuth.signInWithPopup(provider).then(
      res => {
        if (res.additionalUserInfo.isNewUser) {
          this.signUp(res.user.uid, res.additionalUserInfo.profile, org);
        }
        this.redirectUrl = '/home';
      }
    );
  }

  public logout() {
    this.$fbAuth.signOut();
    sessionStorage.clear();
    if (this.userDBListener) {
      this.$firebase.removeCollectionListener(this.userDBListener);
    }
    this.$navigation.navigate('landing');
  }

  public firstLogin() {
    this.$user.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        this.$firebase.collection('users').update(user.uid, { firstLogin: false });
      }
    );
  }

  private signUp(uid: string, profile: any, org: EUserProvider) {
    const USER_PROFILE = new User(profile, uid, org);
    this.$firebase.document('users', uid).set({ ...USER_PROFILE });
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

  private onUsersDBChanges(users: any[]) {
    this.$user.user$.pipe(
      take(1),
      filter(profile => users.findIndex(user => user.id === profile.id) === -1 || users.length === 0)
    ).subscribe(
      _ => this.logout()
    );
  }

}
