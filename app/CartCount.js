import { cookies } from 'next/headers';
// import { useRouter } from 'next/navigation';

export default function CartCount() {
  const cart = cookies().get('cart');
  // const router = useRouter();

  let cartParsed = [];

  if (cart) {
    cartParsed = JSON.parse(cart.value);
  }

  const totalProducts = cartParsed.reduce((prevAmt, currentAmt) => {
    return Number(prevAmt) + Number(currentAmt.amount);
  }, 0);
  // router.refresh();

  return <div>{totalProducts}</div>;
}
