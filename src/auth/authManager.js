import { AUTH_MECHANISM } from '../config/constants';
import googleAuth from './googleAuth';
import firebaseAuth from './firebaseAuth';

const authProviders = {
  google: googleAuth,
  firebase: firebaseAuth,
};

const getAuthProvider = () => {
  if (!authProviders[AUTH_MECHANISM]) {
    throw new Error(`Auth mechanism "${AUTH_MECHANISM}" is not supported.`);
  }
  return authProviders[AUTH_MECHANISM];
};

export default getAuthProvider;
