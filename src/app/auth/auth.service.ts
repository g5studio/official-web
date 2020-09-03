import { IUser } from '@utilities/interfaces/user.interface';
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
    private $user: UserService,
    private $idle: UserIdleService
  ) {
    if (this.isLogin) {
      this.getUserByCatch();
    }
  }

  private userDBListener: Subscription;

  get isLogin() {
    return !!JSON.parse(sessionStorage.getItem('user'));
  }

  set redirectUrl(url: string) {
    sessionStorage.setItem('redirectUrl', url);
  }

  public login(way = EUserProvider.Google) {
    const provider = this.getSingInProvider(way);
    this.$firebaseAuth.signInWithPopup(provider).then(
      res => {
        this.thirdpartSignup(res.additionalUserInfo.profile, way);
      }
    );
  }

  public logout() {
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
        this.$firebase.collection('users').update(user.id, { firstLogin: false });
      }
    );
  }

  private thirdpartSignup(profile: any, way: EUserProvider) {
    const Document = this.$firebase.document('users', profile.id);
    Document.get().subscribe(
      res => {
        if (res.exists) {
          const USER = new User(res.data());
          this.initalUser(USER);
        } else {
          const USER = new User(profile, way);
          this.$firebase.document('users', USER.id).set({ ...{}, ...USER }).then(_ => this.initalUser(USER));
        }
      }
    );
  }

  private initalUser(user: IUser, login = true) {
    this.$user.inital(user);
    this.userDBListener = this.$firebase.addCollectionListener('users', this.onUsersDBChanges.bind(this));
    this.setIdle();
    this.$navigation.navigate(login ? '/home' : sessionStorage.getItem('redirectUrl'));
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

  private getUserByCatch() {
    this.$firebase
      .document('users', JSON.parse(sessionStorage.getItem('user')))
      .get()
      .subscribe(
        res => {
          if (!res.exists) {
            this.logout();
          } else {
            const USER = new User(res.data());
            this.initalUser(USER, false);
          }
        }
      );
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
