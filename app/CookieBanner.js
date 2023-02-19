'use client';
import styles from './layout.module.scss';

import { useState } from 'react';

export default function CookieBanner() {
  const localStorageValue = JSON.parse(
    window.localStorage.getItem('areCookiesTermsAccepted'),
  );
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
              window.localStorage.setItem(
                'areCookiesTermsAccepted',
                JSON.stringify(true),
              );
            }}
          >
            Accept
          </button>
        </span>
      </div>
    )
  );
}
