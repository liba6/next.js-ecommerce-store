const pastries = [
  {
    id: 1,
    name: 'Eclair',
    price: 2.45,
    description:
      'This is a decadent crunchy pastry with a creamy, rich filling topped with a drizzle of dark chocolate. Eclairs are the height of sweet, indulgent treats.',
  },
  {
    id: 2,
    name: 'Croissant',
    price: 1.4,
    description:
      'This flaky, buttery, golden-brown croissant with layers of crisp pastry crumbles beautifully in your mouth, revealing a soft, airy, and delicate interior. The slightly sweet, rich, and nutty flavor of the dough makes it the ultimate indulgent treat.',
  },
  {
    id: 3,
    name: 'Cupcake',
    price: 1.3,
    description:
      'This soft and fluffy cupcake, baked to perfection, is like a cloud in your mouth, melting with every bite. The sweetness of the cake is perfectly balanced by the rich and creamy frosting.',
  },
  {
    id: 4,
    name: 'Macaron',
    price: 1.0,
    description:
      'This macaron is a delicate, bite-sized treat that is sure to tantalize your taste buds. The crisp and chewy exterior sandwiches a generous dollop of creamy, flavored filling and creates a perfect balance of textures and flavors.',
  },
];
export async function up(sql) {
  await sql`
  INSERT INTO pastries ${sql(pastries, 'name', 'price', 'description')}
  `;
}

export async function down(sql) {
  for (const pastry of pastries) {
    await sql`
    DELETE FROM
    pastries
    WHERE
    id = ${pastry.id}
    `;
  }
}
