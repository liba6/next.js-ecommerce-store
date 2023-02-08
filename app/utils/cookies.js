import Cookies from 'js-cookie';

// to get values from cookies
export default function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);
  if (!cookieValue) {
    return undefined;
  }
  try {
    JSON.parse(cookieValue);
  } catch (error) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
