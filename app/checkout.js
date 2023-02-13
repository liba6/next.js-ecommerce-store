// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)

export default function Checkout() {
  return (
    <>
      <h1>Total:</h1>
      <label htmlFor="firstName">First Name:</label>
      <input data-test-id="checkout-first-name" id="firstName" required />

      <label htmlFor="lastName">Last Name:</label>
      <input data-test-id="checkout-last-name" id="lastName" required />

      <label htmlFor="email">Email:</label>
      <input data-test-id="checkout-email" id="email" type="email" required />

      <label htmlFor="address">Address:</label>
      <input data-test-id="checkout-address" id="address" required />

      <label htmlFor="city">City:</label>
      <input data-test-id="checkout-city" id="city" required />

      <label htmlFor="postalCode">Postal Code:</label>
      <input
        data-test-id="checkout-postal-code"
        id="postalCode"
        type="number"
        required
      />

      <label htmlFor="country">Country:</label>
      <input data-test-id="checkout-country" id="country" required />

      <label htmlFor="cc">Credit Cart Number:</label>
      <input
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
        data-test-id="checkout-expiration-date"
        type="number"
        placeholder="MM / YY"
        maxLength="5"
        id="expirationDate"
        required
      />

      <label htmlFor="securityCode">Security Code:</label>
      <input
        data-test-id="checkout-security-code"
        type="password"
        id="securityCode"
        required
      />
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </>
  );
}
