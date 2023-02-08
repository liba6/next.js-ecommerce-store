'use client';

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
      <>
        <div>
          Bite into the goodness of our website by starting with our cookies! By
          clicking 'accept', you're giving us permission to add a little extra
          sweetness to your browsing experience.
        </div>
        <button
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
      </>
    )
  );
}
