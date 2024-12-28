export const APP_META_TITLE = 'Minionz Store';
export const APP_META_DESCRIPTION =
  'Integrating Machine Customers with E-Commerce';
export const DEMO_API_URL = 'https://readonlydemo.vendure.io/shop-api';
export let API_URL =
  typeof process !== 'undefined'
    ? process.env.VENDURE_API_URL ?? DEMO_API_URL
    : DEMO_API_URL;

export function setApiUrl(apiUrl: string) {
  API_URL = apiUrl;
}
