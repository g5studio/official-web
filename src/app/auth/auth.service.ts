import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $navigation: NavigationService,
    private $firebaseAuth: AngularFireAuth
  ) { }

  get isLogin() {
    return !!JSON.parse(sessionStorage.getItem('login'));
  }

  public login() {
    const provider = new fb.auth.GoogleAuthProvider();
    this.$firebaseAuth.signInWithPopup(provider).then(
      res => {
        console.log(res);
        sessionStorage.setItem('login', JSON.stringify(true));
        this.$navigation.navigate('home');
      }
    );
  }

  public logout() {
    sessionStorage.setItem('login', JSON.stringify(false));
    this.$navigation.navigate('landing');
  }
}
