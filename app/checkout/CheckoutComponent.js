'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.scss';

export default function CheckoutComponent() {
  const [email, setEmail] = useState('');

  return (
    <>
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
          value={email}
          onChange={(event) => setEmail(event.target.email)}
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
            disabled={!email}
          >
            Confirm Order
          </button>
        </Link>
      </div>
    </>
  );
}
