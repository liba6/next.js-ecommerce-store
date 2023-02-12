'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';

export default function Pastry(props) {
  const [inputValue, setInputValue] = useState(1);
  console.log('inputvalue', inputValue);
  console.log('stringified', JSON.parse(inputValue));

  return (
    <div>
      <h1 className={styles.h1}>{props.pastry.name}</h1>
      <section className={styles.imagedesc}>
        <div>
          <Image
            data-test-id="product-image"
            src={`/${props.pastry.name}.jpg`}
            alt={`${props.pastry}.name} image`}
            width="200"
            height="200"
          />
        </div>
        <div>
          <p>{props.pastry.description}</p>
          <div data-test-id="product-price">{`Price: $ ${props.pastry.price} `}</div>
          <input
            data-test-id="product-quantity"
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
              data-test-id="product-add-to-cart"
              onClick={() => {
                const pastriesInCookies = getParsedCookie('pastryCookie');

                if (!pastriesInCookies) {
                  setStringifiedCookie('pastryCookie', [
                    { id: props.pastry.id, amount: inputValue },
                  ]);
                  return;
                }

                const foundPastry = pastriesInCookies.find((pastryInCookie) => {
                  return pastryInCookie.id === props.pastry.id;
                });

                if (foundPastry) {
                  foundPastry.amount = foundPastry.amount + inputValue;
                } else {
                  pastriesInCookies.push({
                    id: props.pastry.id,
                    amount: inputValue,
                  });
                }
                setStringifiedCookie('pastryCookie', pastriesInCookies);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
