import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase/app';
import { FirebaseService } from '@services//firebase.service';
import { UserService } from '@services//user.service';
import { map } from 'rxjs/operators';

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
      this.checkUserIsExist$().subscribe(
        isExist => {
          if (!isExist) {
            this.logout();
          }
        }
      );
    }
  }

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
    this.$navigation.navigate('landing');
  }

  private checkUserIsExist$(): Observable<boolean> {
    return this.$firebase.document('users', JSON.parse(sessionStorage.getItem('user'))).get().pipe(map(res => res.exists));
  }

  private loginCallback(profile: any) {
    const Document = this.$firebase.document('users', profile.id);
    Document.get().subscribe(
      res => {
        if (res.exists) {
          this.$user.inital(res.data());
        } else {
          this.$firebase.document('users', profile.id).set({ ...profile, ...{ firstLogin: false } });
          this.$user.inital(profile);
        }
        sessionStorage.setItem('user', JSON.stringify(profile.id));
        this.$navigation.navigate('home');
      }
    );
  }
}
