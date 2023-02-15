import styles from './page.module.scss';
import { cookies } from 'next/headers';
import { getPastries } from '../../database/pastries';
import Link from 'next/link';

export const metadata = {
  title: 'Cart',
  description: 'This is my cart page',
};

export default async function Cart() {
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
  const totalCost = pastriesWithAmt.reduce((prevCost, currentCost) => {
    return Number(prevCost) + Number(currentCost.amount * currentCost.price);
  }, 0);

  const totalPrice = pastriesWithAmt.map((pastryAmt) => {
    let price = 0;
    return (price += pastryAmt.amount);
  });

  // const totalProducts = pastriesWithAmt.reduce((prevAmt, currentAmt) => {
  //   return Number(prevAmt) + Number(currentAmt.amount);
  // }, 0);
  // console.log(totalProducts, 'totalProduct');
  //console.log('pastries', pastriesWithAmt);
  console.log('totalCost', totalCost);
  console.log('totaldollars', totalCost / 100);
  console.log('totalprice', totalPrice);

  return (
    <div>
      <h1 className={styles.h1}> Shopping Cart</h1>
      {pastriesWithAmt.map((pastry) => {
        return (
          <div key={pastry.id} className={styles.product}>
            {pastry.name}
            <div>Price: {pastry.price / 100} </div>
            <h2>Quantity: {pastry.amount}</h2>
            <button>Remove from Cart</button>
          </div>
        );
      })}
      <span className={styles.totalAmt}>Total Amount: ${totalCost / 100}</span>
      <Link href="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
