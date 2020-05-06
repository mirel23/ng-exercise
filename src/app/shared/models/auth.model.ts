export interface AuthModel {
  isLoggedIn: boolean;
  user: {
    firstName: string;
    lastName: string;
  }
}
