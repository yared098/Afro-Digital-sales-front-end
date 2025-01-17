class BaseAuth {
    async signIn() {
      throw new Error('signIn() must be implemented in a derived class.');
    }
  
    async signOut() {
      throw new Error('signOut() must be implemented in a derived class.');
    }
  }
  
  export default BaseAuth;
  