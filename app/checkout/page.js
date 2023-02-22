// import Link from 'next/link';
import styles from './page.module.scss';
import CheckoutComponent from './CheckoutComponent';
import { cookies } from 'next/headers';
import { getPastries } from '../../database/pastries';

export const metadata = {
  title: 'Checkout',
  description: 'This is my checkout page',
};

export default async function Checkout() {
  const cart = cookies().get('cart');

  let cartParsed = [];

  if (cart) {
    cartParsed = JSON.parse(cart.value);
  }

  const pastries = await getPastries();

  const pastriesWithAmt = pastries.map((pastry) => {
    const pastryWithAmt = { ...pastry, amount: 0 };

    const pastryInCookie = cartParsed.find(
      (pastryObject) => pastry.id === pastryObject.id,
    );

    if (pastryInCookie) {
      pastryWithAmt.amount = pastryInCookie.amount;
    }
    return pastryWithAmt;
  });

  const orderedPastries = [];
  pastriesWithAmt.map((pastry) => {
    return pastry.amount > 0 ? orderedPastries.push(pastry) : null;
  });

  const totalCost = pastriesWithAmt.reduce((prevCost, currentCost) => {
    return Number(prevCost) + Number(currentCost.amount * currentCost.price);
  }, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Total: $ {totalCost / 100}</h1>
      <CheckoutComponent />
    </div>
  );
}
