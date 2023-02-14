import styles from './page.module.scss';
import { cookies } from 'next/headers';
import { pastriesList } from '../../database/pastries';

// import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';
// get the cookies
// get the database
// match id and update amount and price
export const metadata = {
  title: 'Cart',
  description: 'This is my cart page',
};

export default function Cart() {
  const cart = cookies().get('cart');

  let cartParsed = [];

  if (cart) {
    cartParsed = JSON.parse(cart.value);
  }

  const pastriesWithAmt = pastriesList.map((pastry) => {
    const pastryWithAmt = { ...pastry, amount: 0 };

    const pastryInCookie = cartParsed.find(
      (pastryObject) => pastry.id === pastryObject.id,
    );

    if (pastryInCookie) {
      pastryWithAmt.amount = pastryInCookie.amount;
    }
    return pastryWithAmt;
  });
  // console.log(pastriesWithAmt, 'pastrieswithAmt');

  return (
    <div>
      <h1 className={styles.h1}> Shopping Cart</h1>
      {pastriesWithAmt.map((pastry) => {
        return (
          <div key={pastry.id}>
            <div>{pastry.name}</div>
            <div> {pastry.price} </div>
            <h2>{pastry.amount}</h2>
            <button>Remove from Cart</button>
          </div>
        );
      })}
    </div>
  );
}
