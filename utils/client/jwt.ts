import Cookies from 'universal-cookie';
import { JWT_MAX_AGE, JWT_TOKEN } from 'constants/domainLogic';

const cookies = new Cookies();

export function setJwtToken(token: string) {
  cookies.set(JWT_TOKEN, token, {
    path: '/',
    domain: window.location.hostname,
    maxAge: JWT_MAX_AGE,
  });
}

export function removeJwtToken() {
  cookies.remove(JWT_TOKEN, {
    path: '/',
    domain: window.location.hostname,
  });
}

export function getJwtToken() {
  const jwt = cookies.get(JWT_TOKEN);
  return jwt;
}

export default {
  setJwtToken,
  removeJwtToken,
  getJwtToken,
};
