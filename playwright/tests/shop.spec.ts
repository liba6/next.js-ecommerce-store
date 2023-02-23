import { expect, test } from '@playwright/test';

test('add to cart, change quantity, remove from cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Accept' }).click();

  await page.getByTestId('product-macaron').click();

  await expect(page).toHaveURL('http://localhost:3000/pastries/4');

  await page.getByTestId('product-quantity').fill('3');

  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.goto('http://localhost:3000/cart');

  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page.getByRole('button', { name: 'Remove' }).click();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByTestId('checkout-first-name').fill('Liba');

  await page.getByTestId('checkout-last-name').fill('Shapiro');

  await page.getByTestId('checkout-email').fill('abc@gmail.com');

  await page.getByTestId('checkout-address').fill('Kunzgasse 4/3');

  await page.getByTestId('checkout-city').fill('Vienna');

  await page.getByTestId('checkout-postal-code').fill('123');

  await page.getByTestId('checkout-country').fill('Austria');

  await page.getByTestId('checkout-credit-card').fill('123456789');

  await page.getByTestId('checkout-expiration-date').fill('0124');

  await page.getByTestId('checkout-security-code').fill('123');

  await page.getByRole('button', { name: 'Confirm Order' }).click();

  await expect(page).toHaveURL('http://localhost:3000/thanks');
});
