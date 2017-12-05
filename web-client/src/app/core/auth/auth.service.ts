import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import 'rxjs/add/operator/map';
import {User} from 'firebase';


@Injectable()
export class AuthService {

  user: Observable<User>;

  private googleProvider: GoogleAuthProvider;

  constructor(private angularFire: AngularFireAuth) {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.user = this.angularFire.authState;
  }

  signIn(email: string, password: string): Observable<any> {
    return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(email, password))
      .map(response => response as User);
  }

  googleSignIn() {
    return Observable.fromPromise(firebase.auth().signInWithPopup(this.googleProvider))
      .map(response => response as User);
  }

  signOut() {
    return Observable.fromPromise(firebase.auth().signOut());
  }

}
