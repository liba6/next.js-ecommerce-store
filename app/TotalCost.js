import { cookies } from 'next/headers';
import { getPastries } from '../database/pastries';

export default async function TotalCost() {
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
  return <div>{totalCost}</div>;
}
