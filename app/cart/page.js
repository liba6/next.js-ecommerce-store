import styles from './page.module.scss';
import { cookies } from 'next/headers';
import { getPastries } from '../../database/pastries';
import Link from 'next/link';
import Image from 'next/image';
import RemoveFromCart from './../RemoveFromCart';

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

  const orderedPastries = [];
  pastriesWithAmt.map((pastry) => {
    return pastry.amount > 0 ? orderedPastries.push(pastry) : null;
  });
  // console.log('pastriesonly', orderedPastries);

  const totalCost = pastriesWithAmt.reduce((prevCost, currentCost) => {
    return Number(prevCost) + Number(currentCost.amount * currentCost.price);
  }, 0);

  // const totalProducts = pastriesWithAmt.reduce((prevAmt, currentAmt) => {
  //   return Number(prevAmt) + Number(currentAmt.amount);
  // }, 0);

  return (
    <div>
      <h1 className={styles.h1}> Shopping Cart</h1>
      {orderedPastries.map((pastry) => {
        return (
          <div
            key={pastry.id}
            className={styles.product}
            data-test-id="cart-product-{pastry.id}"
          >
            <Image
              className={styles.img}
              data-test-id="product-image"
              src={`/${pastry.name}.jpg`}
              alt={`${pastry}.name} image`}
              width="150"
              height="150"
            />
            {pastry.name}
            <div>Price: ${pastry.price / 100} </div>
            <div data-test-id="cart-product-quantity-{pastry.id}">
              Quantity: {pastry.amount}
            </div>
            <RemoveFromCart
              cartParsed={cartParsed}
              pastry={pastry}
              data-test-id="cart-product-remove-<product id>"
            />
          </div>
        );
      })}
      <br />
      <div className={styles.totalAmt} data-test-id="cart-total">
        Total Amount: ${totalCost / 100}
      </div>
      <br />
      <Link href="/checkout">
        <button className={styles.checkout} data-test-id="cart-checkout">
          Checkout
        </button>
      </Link>
    </div>
  );
}
