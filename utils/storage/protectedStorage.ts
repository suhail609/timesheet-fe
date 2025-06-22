import UniversalCookie from 'universal-cookie';
const cookie = new UniversalCookie();
const COOKIE_EXPIRATION_DAYS = 7;

export const setAccessTokenCookie = (accessToken: string) => {
  cookie.set('access_token', JSON.stringify(accessToken), {
    path: '/',
    expires: new Date(
      new Date().getTime() + COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === 'production', // Enable secure flag in production
    httpOnly: false,
  });
};

export const setUserCookie = (user: any) => {
  cookie.set('user', JSON.stringify(user), {
    path: '/',
    expires: new Date(
      new Date().getTime() + COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === 'production', // Enable secure flag in production
    httpOnly: false,
  });
};

export const getAccessTokenFromCookie = () => {
  return cookie.get('access_token');
};

export const removeAccessTokenCookie = () => {
  cookie.remove('access_token', { path: '/' });
};

export const setRefreshTokenCookie = (refreshToken: string) => {
  cookie.set('refresh_token', refreshToken, {
    path: '/',
    expires: new Date(
      new Date().getTime() + COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === 'production',
  });
};

export const getRefreshTokenFromCookie = () => {
  return cookie.get('refresh_token');
};

export const getUserFromCookie = () => {
  return cookie.get('user');
};

export const getRememberMe = () => {
  return cookie.get('rememberMe');
};
export const removeRememberMe = () => {
  cookie.remove('rememberMe', { path: '/' });
};

export const removeRefreshTokenCookie = () => {
  cookie.remove('refresh_token', { path: '/' });
};

export const removeUserCookie = () => {
  cookie.remove('user', { path: '/' });
};
export const remove2FACookie = () => {
  cookie.remove('is2FAVerified', { path: '/' });
};
export const savePersonalityScore = (score: number) => {
  localStorage.setItem('personalityScore', score.toString());
};
