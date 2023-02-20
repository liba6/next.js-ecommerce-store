import Cookies from 'js-cookie';

// to get values from cookies
export function getParsedCookie(key: string): CookieValue | undefined {
  const cookieValue = Cookies.get(key);
  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue);
  } catch (error) {
    return undefined;
  }
}
export type CookieValue = {
  id: number;
  amount: number;
}[];

export function setStringifiedCookie(key: string, value: CookieValue) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value: CookieValue) {
  return JSON.stringify(value);
}
