//'use client';
import { getParsedCookie } from './utils/cookies';
import { getPastries } from '../database/pastries';

export default async function RemoveFromCart() {
  const cart = getParsedCookie('cart');

  let cartParsed = JSON.parse(cart.value);

  console.log('cart', cartParsed);

  const pastries = await getPastries();
  const pastryToDelete = cartParsed.filter(
    (pastryObject) => pastries.id === pastryObject.id,
  );
  console.log(pastryToDelete);
  cartParsed = pastryToDelete.amount = pastryToDelete.amount === 0;
}
//     if (pastryInCookie) {
//       pastryWithAmt.amount = pastryInCookie.amount;
//     }
//     return pastryWithAmt;
//   });

//   const orderedPastries = [];
//   pastriesWithAmt.map((pastry) => {
//     return pastry.amount > 0 ? orderedPastries.push(pastry) : null;
//   });

//   return (

//   )

// }
//           const foundPastry = pastriesInCookies.find((pastryInCookie) => {
//             return pastryInCookie.id === props.pastry.id;
//           });

//           if (foundPastry) {
//             foundPastry.amount--;
//             if (foundPastry.amount < 0) {
//               foundPastry.amount = 0;
//             }
//           } else {
//             return;
//           }
//           setStringifiedCookie('pastryCookie', pastriesInCookies);
//         }}
//       >
//         Remove from Cart
//       </button>
//     </div>
//   );
// }
