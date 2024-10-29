const { test } = require('@playwright/test');
const Customer = require('../pages/Actions/customer');
const Driver = require('../pages/Actions/driver');
const { login } = require('../helper/auth');
const BuildShipment = require('../pages/Actions/buildShipment');
const Shipment = require('../pages/Actions/shipment');

test.beforeEach(async ({ page }) => {
    await login(page);
  });

test('Verify the shipment is created and completed successfully', async ({ page }) => {
    const driver = new Driver(page);
    const customer = new Customer(page);
    const buildShipment = new BuildShipment(page);
    const shipment = new Shipment(page);

    await driver.driverCreation();

    const createdDriverName = driver.driverName;
    
    await customer.customerCreation();
    const createdCustomerName = customer.customerName;
    await customer.waitForToaster();

    const randomCustomerName = customer.customerName;

    await buildShipment.createShipment(randomCustomerName);

    // await page.waitForTimeout(30000);

    await page.route('**/api/shipments/*', (route) => {
        const request = route.request();
        route.continue(); 
    });
    

    await buildShipment.shipmentDetails(randomCustomerName);

    await shipment.assignDriverToLoad(randomCustomerName,createdDriverName)

    // await page.waitForTimeout(30000);

    await page.route('**/api/shipments/*', (route) => {
        const request = route.request();
        route.continue(); 
    });

    await shipment.completeShipment();

    
});
