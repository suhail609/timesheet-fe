export const COMPLETE = '/complete';
export const VERIFICATION = '/verification';
export const VERIFICATION_BLOCKED = '/verification?auth=blocked';
export const VERIFY = '/verify';
export const VERIFY_2FA_PAGE = '/verify?auth=2FA';
export const MEMBERSHIP = '/membership';
export const MEMBERSHIP_PURCHASE = '/membership/purchase';
export const REFERRAL = '/referral';
export const SIGNIN = '/signin';
export const SIGNIN_GOOGLE = '/signin/google';
export const SIGNUP = '/signup';
export const PROFILE = '/profile';
export const PERSONALITYTEST = '/personality-test';
export const FORGOT_PASSWORD = '/forgot-password';
export const FORGOT_PASSWORD_SUCCESS = '/forgot-password/success';
export const RESET_PASSWORD = '/reset-password';
export const RESET_PASSWORD_SUCCESS = '/reset-password/success';
export const PLANS = '/plans';
export const PLANS_CHECKOUT = '/plans/checkout';
export const PURCHASE_SUCCESS = '/purchase-success';
export const DASHBORD = '/';
export const CLASSES = '/classes';
export const NOTIFICATIONS = '/notifications';
export const LIBRARY = '/library';
export const SHOP = '/shop';
export const INFLUENCER = '/influencer';
export const PROFILE_PARENTAL_CONTROL = '/profile/parental-control';
export const SHOP_DOWNLOADS = '/shop/downloads';

/* If authenticated, prevent access to these pages */
export let authenticated_restricted_pages: string[] = [
  '/signin',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/verify',
  '/complete',
  '/personality-test',
  '/verify',
];
/* If not authenticated, prevent access to these pages */
export let not_authenticated_restricted_pages: string[] = [
  '/finance',
  '/library',
  '/notifications',
  '/profile',
  '/purchase-success',
  '/referral',
  '/shop',
  '/complete',
  '/verify',
  '/verification',
  '/marketing',
];
/* If authenticated / not authenticated, always access to these pages */
export let common_no_restricted_pages: string[] = [
  '/',
  '/terms-and-conditions',
  '/cookies-policy',
  '/search',
  '/personality-test',
  '/membership',
  '/membership/purchase',
  '/plans',
  '/plans/checkout',
  '/plans/checkout/:path*',
  '/influencer',
  '/influencer/:path*',
  '/influencer/:path*/:path*',
  '/share/:path*/:path*',
];
