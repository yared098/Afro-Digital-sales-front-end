import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import BaseAuth from './baseAuth';

class GoogleAuth extends BaseAuth {
  async signIn() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  }

  async signOut() {
    await auth.signOut();
    return true;
  }
}

export default new GoogleAuth();
