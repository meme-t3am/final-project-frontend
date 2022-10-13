import { get, post } from './request';

const BASE_URL = '/api/v1/users';
// do fetches to backend users table here
export async function signUpUser(credentials) {
  const res = await post(`${BASE_URL}/sessions`, credentials);
  res.user = res.data;
  return res;
}

export async function verifyUser() {
  const res = await get(`${BASE_URL}/me`);
  res.user = res.data;
  return res;
}
