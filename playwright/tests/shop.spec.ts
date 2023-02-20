import { expect, test } from '@playwright/test';

test('add to cart, change quantity, remove from cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Accept' }).click();

  await page.getByRole('link', { name: 'Macaron' }).click();

  await expect(page).toHaveURL('https://localhost:3000/pastries/macaron');

  await page.getByTestId('product-quantity').fill('3');

  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.goto('http://localhost:3000/cart');

  await expect(page).toHaveURL('https://localhost:3000/cart');

  await page.getByRole('button', { name: 'Remove' }).click();

  // checkout flow

  // payment page

  // thank you page
});
