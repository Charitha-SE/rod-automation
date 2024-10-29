const { test, expect } = require('@playwright/test');
const Driver = require('../pages/Actions/driver'); 
const { login } = require('../helper/auth');

test.beforeEach(async ({ page }) => {
    await login(page);
  });


test('Verify the driver is created successfully', async ({ page }) => {
    const driver = new Driver(page);

    await driver.driverCreation();

    const createdDriverName = driver.driverName;

    const toastMessage = await page.textContent(driver.selectors.successToaster);
    expect(toastMessage).toContain('New Driver Added Successfully');
});
