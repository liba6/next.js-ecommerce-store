import { useState } from 'react';

('use client');

export default function CookieBanner() {
  const initialValue = JSON.parse(
    window.localStorage.getItem('areCookiesTermsAccepted'),
  );
  const [isCookieBannerVisible, setIsCookieBannerVisible] =
    useState(initialValue);
  return (
    isCookieBannerVisible && (
      <>
        <div>
          Bite into the goodness of our website by starting with our cookies! By
          clicking 'accept', you're giving us permission to add a little extra
          sweetness to your browsing experience.
        </div>
        <button
          onClick={() => {
            setIsCookieBannerVisible(false);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
