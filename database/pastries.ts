import { cache } from 'react';
import { sql } from './connect';

// export const pastriesList = [
//   {
//     id: 1,
//     name: 'Eclair',
//     price: 245,
//     description:
//       'This is a decadent crunchy pastry with a creamy, rich filling topped with a drizzle of dark chocolate. Eclairs are the height of sweet, indulgent treats.',
//   },
//   {
//     id: 2,
//     name: 'Croissant',
//     price: 140,
//     description:
//       'This flaky, buttery, golden-brown croissant with layers of crisp pastry crumbles beautifully in your mouth, revealing a soft, airy, and delicate interior. The slightly sweet, rich, and nutty flavor of the dough makes it the ultimate indulgent treat.',
//   },
//   {
//     id: 3,
//     name: 'Cupcake',
//     price: 130,
//     description:
//       'This soft and fluffy cupcake, baked to perfection, is like a cloud in your mouth, melting with every bite. The sweetness of the cake is perfectly balanced by the rich and creamy frosting.',
//   },
//   {
//     id: 4,
//     name: 'Macaron',
//     price: 100,
//     description:
//       'This macaron is a delicate, bite-sized treat that is sure to tantalize your taste buds. The crisp and chewy exterior sandwiches a generous dollop of creamy, flavored filling and creates a perfect balance of textures and flavors.',
//   },
// ];

type Pastry = {
  id: number;
  name: string;
  price: number;
  description: string | null;
};

// get all pastries

export const getPastries = cache(async () => {
  const pastries = await sql<Pastry[]>`
  SELECT * FROM pastries
  `;
  return pastries;
});

// get a single pastry

export const getPastry = cache(async (id: number) => {
  const [pastry] = await sql<Pastry[]>`
  SELECT * FROM pastries WHERE id = ${id}`;
  return pastry;
});
