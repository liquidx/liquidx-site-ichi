import { expect, test } from '@playwright/test';

test('home page shows name and links to company info', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toContainText('Ichi Research');
	await page.getByRole('link', { name: /Company Info/ }).click();
	await expect(page).toHaveURL(/\/company/);
	await expect(page.locator('dl')).toBeVisible();
});
