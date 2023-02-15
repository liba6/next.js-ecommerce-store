import { cookies } from 'next/headers';

export default function CartCount() {
  const cart = cookies().get('cart');

  let cartParsed = [];

  if (cart) {
    cartParsed = JSON.parse(cart.value);
  }

  const totalProducts = cartParsed.reduce((prevAmt, currentAmt) => {
    return Number(prevAmt) + Number(currentAmt.amount);
  }, 0);

  return <span>{totalProducts}</span>;
}
