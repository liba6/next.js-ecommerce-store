import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
  stringifyCookieValue,
} from '../cookies';

// This is closest to what we want to test
// testing a single, small function that doesn't depend on a library
test('stringify a cookie value', () => {
  expect(stringifyCookieValue([{ id: 1, amount: 2 }])).toBe(
    '[{"id":1,"amount":2}]',
  );
});

test('set, get and delete a cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, amount: 2 }],
  };
  // First, make sure that the return value of the function is undefined
  // Use .toBe to compare primitive values
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  // expect(getParsedCookie(cookie.key)).toBeUndefined();

  // Set a cookie
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // Use .toStrictEqual to test that objects have the same type as well as structure
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // Best practice: clear state after test to bring the system back to the initial state
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});

// Unit test - to add or remove info from cookie

test('add or remove info from cookie', () => {
  const newItem1 = { id: 1, amount: 1 };
  const newItem2 = { id: 1, amount: -5 };

  const cookie = {
    key: 'cart',
    value: [{ id: newItem1.id, amount: newItem1.amount }],
  };

  // to add a cookie when no cookie exists
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // to add negative amount in cookie when no cookie exists
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  expect(() => setStringifiedCookie(cookie.key, [newItem2])).not.toThrow();
  expect(getParsedCookie(cookie.key)).toStrictEqual([newItem2]);

  // we add new cookie to existing cookie

  const newItem5 = { id: 2, amount: 5 };

  const cookie2 = {
    key: 'cart',
    value: [
      { id: newItem2.id, amount: 0 },
      { id: newItem1.id, amount: 0 },
    ],
  };

  const addtlCookie = [...cookie2.value, newItem5];
  expect(() => setStringifiedCookie(cookie2.key, addtlCookie)).not.toThrow();
  expect(getParsedCookie(cookie2.key)).toStrictEqual([
    { id: newItem2.id, amount: 0 },
    { id: newItem1.id, amount: 0 },
    { id: newItem5.id, amount: newItem5.amount },
  ]);

  // update a cookie - did not get chance to implement
});

// // test cart sum function

// type ArrayOfObj = {
//   amount: number;
//   price: number;
// };

// function sumCart(array: ArrayOfObj[]) {
//   let total = 0;
//   array.forEach((item) => {
//     total += item.amount * item.price;
//   });
//   return total;
// }

// type CartItem = {
//   price: number;
//   amount: number;
// }[];

// test('add sum total in cart', () => {
//   const cartItem: CartItem = [
//     { price: 10, amount: 3 },
//     { price: 20, amount: 2 },
//     { price: 30, amount: 3 },
//   ];

//   expect(sumCart(cartItem)).toBe('160');
// });
