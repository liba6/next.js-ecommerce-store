'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function Pastry(props) {
  const [inputValue, setInputValue] = useState(1);
  console.log('parsedCookie', getParsedCookie());
  return (
    <div>
      <h1>{props.pastry.name}</h1>
      <Image
        data-test-id="product-image"
        src={`/${props.pastry.name}.jpg`}
        alt={`${props.pastry}.name} image`}
        width="200"
        height="200"
      />
      <div>{props.pastry.description}</div>
      <div data-test-id="product-price">{`Price: $ ${props.pastry.price} `}</div>
      <input
        type="number"
        name="quantity"
        min="1"
        max="10"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <div data-test-id="product-add-to-cart">
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
          Add to Cart
        </button>
      </div>
    </div>
  );
}
