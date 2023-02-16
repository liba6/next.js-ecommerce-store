// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
import Link from 'next/link';
import styles from './page.module.scss';
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
  // console.log('pastriesonly', orderedPastries);

  const totalCost = pastriesWithAmt.reduce((prevCost, currentCost) => {
    return Number(prevCost) + Number(currentCost.amount * currentCost.price);
  }, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Total: $ {totalCost / 100}</h1>
      <form className={styles.form}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className={styles.input}
          data-test-id="checkout-first-name"
          id="firstName"
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          className={styles.input}
          data-test-id="checkout-last-name"
          id="lastName"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          className={styles.input}
          data-test-id="checkout-email"
          id="email"
          type="email"
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          className={styles.input}
          data-test-id="checkout-address"
          id="address"
          required
        />

        <label htmlFor="city">City:</label>
        <input
          className={styles.input}
          data-test-id="checkout-city"
          id="city"
          required
        />

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          className={styles.smlinput}
          data-test-id="checkout-postal-code"
          id="postalCode"
          type="number"
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          className={styles.input}
          data-test-id="checkout-country"
          id="country"
          required
        />

        <label htmlFor="cc">Credit Cart Number:</label>
        <input
          className={styles.input}
          data-test-id="checkout-credit-card"
          id="cc"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="19"
          placeholder="xxxx xxxx xxxx xxxx"
          required
        />

        <label htmlFor="expirationDate">Expires:</label>
        <input
          className={styles.input}
          data-test-id="checkout-expiration-date"
          type="number"
          placeholder="MM / YY"
          maxLength="5"
          id="expirationDate"
          required
        />

        <label htmlFor="securityCode">Security Code:</label>
        <input
          className={styles.smlinput}
          data-test-id="checkout-security-code"
          type="password"
          id="securityCode"
          required
        />
      </form>
      <div className={styles.buttoncontainer}>
        <Link className={styles.link} href="/thanks">
          <button
            className={styles.confirm}
            data-test-id="checkout-confirm-order"
          >
            Confirm Order
          </button>
        </Link>
      </div>
    </div>
  );
}
