'use client';
import { setStringifiedCookie } from './utils/cookies';
import { useRouter } from 'next/navigation';
import styles from './cart/page.module.scss';

export default function RemoveFromCart(props) {
  const router = useRouter();

  return (
    <div>
      <button
        className={styles.remove}
        onClick={() => {
          const filtered = props.cartParsed.filter(
            (pastryObject) => props.pastry.id !== pastryObject.id,
          );

          setStringifiedCookie('cart', filtered);
          router.refresh();
        }}
      >
        Remove
      </button>
    </div>
  );
}

//   console.log('props');
//   return <div>{props}</div>;

//   data-test-id="cart-product-remove-{pastry.id}"
//   className={styles.remove}
//   onClick={<RemoveFromCart pastry={pastry} />}
// >

// const cart = getParsedCookie('cart');

// let cartParsed = JSON.parse(cart.value);

// console.log('cart', cartParsed);

// const pastries = await getPastries();
// const pastryToDelete = cartParsed.filter(
//   (pastryObject) => pastries.id === pastryObject.id,
// );
// console.log(pastryToDelete);
// return cartParsed;
// cartParsed = pastryToDelete.amount = pastryToDelete.amount === 0;
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
