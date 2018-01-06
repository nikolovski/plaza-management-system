import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  user: Observable<User>;

  private googleProvider: GoogleAuthProvider;

  constructor(private angularFire: AngularFireAuth) {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.user = this.angularFire.authState;
  }

  signIn(email: string, password: string): Observable<User> {
    return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(email, password))
      .map(response => response as User);
  }

  googleSignIn(): Observable<UserCredential> {
    return Observable.fromPromise(firebase.auth().signInWithPopup(this.googleProvider))
      .map(response => response as UserCredential);
  }

  get token(): any{
    return Observable.fromPromise(firebase.auth().currentUser.getIdToken(true));
  }

  get localAccessToken(): string {
    const key = localStorage.key(0);
    return JSON.parse(localStorage.getItem(key)).stsTokenManager.accessToken;
  }

  signOut() {
    return Observable.fromPromise(firebase.auth().signOut());
  }

}
