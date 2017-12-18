import Storage from './storage';
import history from './history';

export default class Auth {
  static isAuthorized() {
    return !!Storage.get('jwt');
  }

  static setAuthorized(token, redirectPath) {
    if (!token) return;

    Storage.set('jwt', token);

    if (redirectPath) history.push(redirectPath);
  }

  static unAuthorize(redirectPath) {
    Storage.remove('jwt');

    return redirectPath && history.push(redirectPath);
  }
}
