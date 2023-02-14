'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';

export default function Pastry(props) {
  const [inputValue, setInputValue] = useState('1');
  // console.log('inputvalue', inputValue);
  // console.log('stringified', JSON.parse(inputValue));
  return (
    <div>
      <h1 className={styles.h1}>{props.pastry.name}</h1>
      <section className={styles.imagedesc}>
        <div>
          <Image
            className={styles.img}
            data-test-id="product-image"
            src={`/${props.pastry.name}.jpg`}
            alt={`${props.pastry}.name} image`}
            width="200"
            height="200"
          />
        </div>
        <div className={styles.desc}>
          <p>{props.pastry.description}</p>
          <div
            className={styles.price}
            data-test-id="product-price"
          >{`Price: $ ${props.pastry.price} `}</div>
          <section className={styles.tabs}>
            <input
              className={styles.buttons}
              data-test-id="product-quantity"
              type="number"
              name="quantity"
              min="1"
              max="9"
              pattern="[1-9]"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
            <div data-test-id="product-add-to-cart">
              <button
                className={styles.buttons}
                data-test-id="product-add-to-cart"
                onClick={() => {
                  const pastriesInCookies = getParsedCookie('cart');

                  if (!pastriesInCookies) {
                    setStringifiedCookie('cart', [
                      { id: props.pastry.id, amount: Number(inputValue) },
                    ]);
                    return;
                  }

                  const foundPastry = pastriesInCookies.find(
                    (pastryInCookie) => {
                      return pastryInCookie.id === props.pastry.id;
                    },
                  );

                  if (foundPastry) {
                    foundPastry.amount =
                      foundPastry.amount + Number(inputValue);
                  } else {
                    pastriesInCookies.push({
                      id: props.pastry.id,
                      amount: inputValue,
                    });
                  }
                  setStringifiedCookie('cart', pastriesInCookies);
                }}
              >
                Add to Cart
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
