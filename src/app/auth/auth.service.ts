import { User } from '@user/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase/app';
import { FirebaseService } from '@services//firebase.service';
import { UserService } from '@user//services/user.service';
import { map, take, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $navigation: NavigationService,
    private $firebaseAuth: AngularFireAuth,
    private $firebase: FirebaseService,
    private $user: UserService
  ) {
    if (this.isLogin) {
      this.getUserByCatch();
    }
  }

  private userDBListener: Subscription;

  get isLogin() {
    return !!JSON.parse(sessionStorage.getItem('user'));
  }

  public login() {
    const provider = new fb.auth.GoogleAuthProvider();
    this.$firebaseAuth.signInWithPopup(provider).then(
      res => {
        this.loginCallback(res.additionalUserInfo.profile);
      }
    );
  }

  public logout() {
    sessionStorage.removeItem('user');
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

  private loginCallback(profile: any) {
    const Document = this.$firebase.document('users', profile.id);
    Document.get().subscribe(
      res => {
        if (res.exists) {
          this.$user.inital(res.data());
        } else {
          const PROFILE = new User(profile);
          this.$firebase.document('users', profile.id).set({ ...{}, ...PROFILE });
          this.$user.inital(PROFILE);
        }
        sessionStorage.setItem('user', JSON.stringify(profile.id));
        this.userDBListener = this.$firebase.addCollectionListener('users', this.onUsersDBChanges.bind(this));
        this.$navigation.navigate('home');
      }
    );
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
            this.$user.inital(res.data());
            this.userDBListener = this.$firebase.addCollectionListener('users', this.onUsersDBChanges.bind(this));
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
