import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import BaseAuth from './baseAuth';

class FirebaseAuth extends BaseAuth {
  async signIn(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }

  async signOut() {
    await signOut(auth);
    return true;
  }
}

export default new FirebaseAuth();
