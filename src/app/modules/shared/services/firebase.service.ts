import { Subject, ReplaySubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private $firebaseStore: AngularFirestore
  ) {
    this.getUserName();
  }

  private user = new ReplaySubject();
  public user$ = this.user.asObservable();

  private getUserName() {
    this.$firebaseStore.collection('name').valueChanges().subscribe(
      name => console.log(name)
    );
  }
}
