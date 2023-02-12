import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres(
  'postgres://next_js_ecommerce_store:next_js_ecommerce_store@localhost:5432/next_js_ecommerce_store',
);

console.log(await sql`SELECT * FROM pastries`);

// this is to end the connection
await sql.end();
