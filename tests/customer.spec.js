const { test, expect } = require('@playwright/test');
const Customer = require('../pages/Actions/customer');
const { login } = require('../helper/auth');

test.beforeEach(async ({ page }) => {
    await login(page);
  });

test('Verify the customer is created successfully', async ({ page }) => {
    const customer = new Customer(page); 

    await customer.customerCreation();

    const createdCustomerName = customer.customerName;

    const toastMessage = await page.textContent(customer.selectors.toaster);
    expect(toastMessage).toContain('New Customer Added Successfully');
});
