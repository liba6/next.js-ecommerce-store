'use client';
import styles from './layout.module.scss';

import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

export default function CookieBanner() {
  const localStorageValue = getLocalStorage('areCookiesTermsAccepted');

  const initialState = localStorageValue === null ? false : localStorageValue;

  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] =
    useState(initialState);

  return (
    !areCookiesTermsAccepted && (
      <div className={styles.popup}>
        <span className={styles.popuptext}>
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
        </span>
      </div>
    )
  );
}
