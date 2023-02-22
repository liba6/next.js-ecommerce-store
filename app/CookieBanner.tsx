'use client';
import styles from './layout.module.scss';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');

    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    setAreCookiesTermsAccepted(initialState);
  }, []);

  return areCookiesTermsAccepted ? (
    <div />
  ) : (
    <div className={styles.popup}>
      Bite into the goodness of our website by starting with our cookies! By
      clicking 'accept', you're giving us permission to add a little extra
      sweetness to your browsing experience.
      <br />
      <button
        className={styles.btn}
        onClick={() => {
          setAreCookiesTermsAccepted(true);
          setLocalStorage('areCookiesTermsAccepted', JSON.stringify(true));
        }}
      >
        Accept
      </button>
    </div>
  );
}
