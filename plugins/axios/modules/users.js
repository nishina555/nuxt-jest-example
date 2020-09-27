import { axios } from '../index.js';

class Users {
  static all() {
    return axios.$get('users');
  }
}
export default Users;