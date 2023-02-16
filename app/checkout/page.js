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
    <div className={styles.body}>
      {/* <h1 className = {styles.total}>Total: $ {totalCost / 100}</h1>
      <form className={styles.form}>
        <div className={styles.name}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              className={styles.input}
              data-test-id="checkout-first-name"
              id="firstName"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              className={styles.input}
              data-test-id="checkout-last-name"
              id="lastName"
              required
            />
          </div>
        </div>
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
          className={styles.input}
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
          className={styles.input}
          data-test-id="checkout-security-code"
          type="password"
          id="securityCode"
          required
        />
      </form>
      <Link href="/thanks">
        <button
          className={styles.confirm}
          data-test-id="checkout-confirm-order"
        >
          Confirm Order
        </button>
      </Link>
    </div>
  );
} */}

<div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com">
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York">

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001">
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe">
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September">

            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018">
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352">
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn">
      </form>
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h4>Cart
        <span class="price" style="color:black">
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
    </div>
  </div>
</div>
