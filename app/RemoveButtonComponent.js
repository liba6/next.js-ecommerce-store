'use client';

// import PastriesPage from './page';
import { getParsedCookie, setStringifiedCookie } from './utils/cookies';

export default function RemoveCartButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          const pastriesInCookies = getParsedCookie('pastryCookie');
          if (!pastriesInCookies) {
            return;
          }

          const foundPastry = pastriesInCookies.find((pastryInCookie) => {
            return pastryInCookie.id === props.pastry.id;
          });

          if (foundPastry) {
            foundPastry.amount--;
            if (foundPastry.amount < 0) {
              foundPastry.amount = 0;
            }
          } else {
            return;
          }
          setStringifiedCookie('pastryCookie', pastriesInCookies);
        }}
      >
        Remove from Cart
      </button>
    </div>
  );
}
