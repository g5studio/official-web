import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase/app';
import { FirebaseService } from '@services//firebase.service';
import { UserService } from '@services//user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $navigation: NavigationService,
    private $firebaseAuth: AngularFireAuth,
    private $firebase: FirebaseService,
    private $user: UserService
  ) { }

  get isLogin() {
    return !!JSON.parse(sessionStorage.getItem('login'));
  }

  public login() {
    const provider = new fb.auth.GoogleAuthProvider();
    this.$firebaseAuth.signInWithPopup(provider).then(
      res => {
        this.loginCallback(res.additionalUserInfo.profile);
        sessionStorage.setItem('login', JSON.stringify(true));
        this.$navigation.navigate('home');
      }
    );
  }

  public logout() {
    sessionStorage.setItem('login', JSON.stringify(false));
    this.$navigation.navigate('landing');
  }

  private loginCallback(profile: any) {
    const Document = this.$firebase.document('users', profile.id);
    Document.get.subscribe(
      res => {
        if (res.exists) {
          this.$user.inital(res.data());
        } else {
          this.$firebase.document('users', profile.id).set(profile);
          this.$user.inital(profile);
        }
      }
    );
  }
}
