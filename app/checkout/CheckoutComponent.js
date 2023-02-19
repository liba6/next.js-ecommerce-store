'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.scss';

export default function CheckoutComponent() {
  // const [email, setEmail] = useState('');
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cc: '',
    exp: '',
    security: '',
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }
  console.log('state', state);
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className={styles.input}
          data-test-id="checkout-first-name"
          id="firstName"
          required
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          className={styles.input}
          data-test-id="checkout-last-name"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          className={styles.input}
          data-test-id="checkout-email"
          id="email"
          type="email"
          required
          name="email"
          value={state.email}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          className={styles.input}
          data-test-id="checkout-address"
          id="address"
          name="address"
          value={state.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          className={styles.input}
          data-test-id="checkout-city"
          id="city"
          name="city"
          value={state.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          className={styles.smlinput}
          data-test-id="checkout-postal-code"
          id="postalCode"
          type="number"
          name="postalCode"
          value={state.postalCode}
          onChange={handleChange}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          className={styles.input}
          data-test-id="checkout-country"
          id="country"
          name="country"
          value={state.country}
          onChange={handleChange}
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
          name="cc"
          value={state.cc}
          onChange={handleChange}
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
          name="exp"
          value={state.exp}
          onChange={handleChange}
        />

        <label htmlFor="securityCode">Security Code:</label>
        <input
          className={styles.smlinput}
          data-test-id="checkout-security-code"
          type="password"
          id="securityCode"
          required
          name="security"
          value={state.security}
          onChange={handleChange}
        />
      </form>
      <div className={styles.buttoncontainer}>
        <Link className={styles.link} href="/thanks">
          <button
            className={styles.confirm}
            data-test-id="checkout-confirm-order"
            disabled={
              !state.email ||
              !state.firstName ||
              !state.lastName ||
              !state.exp ||
              !state.security ||
              !state.cc ||
              !state.address ||
              !state.city ||
              !state.country ||
              !state.postalCode
            }
          >
            Confirm Order
          </button>
        </Link>
      </div>
    </>
  );
}
