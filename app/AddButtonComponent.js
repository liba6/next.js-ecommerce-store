'use client';

import PastriesPage from './page';
import { getParsedCookie, setStringifiedCookie } from './utils/cookies';

export default function AddCartButton(props) {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          const pastriesInCookies = getParsedCookie('pastryCookie');
          if (!pastriesInCookies) {
            setStringifiedCookie('pastryCookie', [
              { id: props.pastry.id, amount: 1 },
            ]);
            return;
          }

          const foundPastry = pastriesInCookies.find((pastryInCookie) => {
            return pastryInCookie.id === props.pastry.id;
          });

          if (foundPastry) {
            foundPastry.amount++;
          } else {
            pastriesInCookies.push({ id: props.pastry.id, amount: 1 });
          }
          setStringifiedCookie('pastryCookie', pastriesInCookies);
        }}
      >
        {' '}
        Add to Cart{' '}
      </button>
    </div>
  );
}
