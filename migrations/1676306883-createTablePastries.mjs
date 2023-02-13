export async function up(sql) {
  await sql`
  CREATE TABLE pastries (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) NOT NULL,
    price varchar(30) NOT NULL,
    description varchar(400) NOT NULL
     )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE pastries
  `;
}
