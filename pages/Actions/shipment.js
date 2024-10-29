const { expect } = require('@playwright/test');
const PageActions = require('../../helper/pageActions');
const { ShipmentPage } = require('../Selectors/shipmentPage');

class Shipment {
    constructor(page) {
        this.page = page;
        this.selectors = ShipmentPage;
        this.pageActions = new PageActions(page);
    }

    async selectCustomerName(randomCustomerName) {
        await this.pageActions.click(this.page, this.selectors.customerNameDropDown);
        await this.pageActions.fill(this.page, this.selectors.customerNameDropDown, randomCustomerName);
        await this.page.waitForTimeout(1000);
        await this.page.getByText(randomCustomerName, { exact: true }).click();
    }

    async openShipmentActionsPopUp() {
        await this.pageActions.click(this.page, this.selectors.shipmentActions);
    }

    async clickFindDriversButton() {
        await this.pageActions.click(this.page, this.selectors.findDriversButton);
    }

    async searchDriver(createdDriverName){
        await this.pageActions.fill(this.page, this.selectors.searchDriverName, createdDriverName);
    }

    async assignDriver() {
        await this.pageActions.click(this.page, this.selectors.driverCard);
    }

    async assignCommodity() {
        await this.pageActions.click(this.page, this.selectors.assignCommodity);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    async addToLoad() {
        await this.pageActions.click(this.page, this.selectors.addToLoad);
    }

    async viewShipmentDetails() {
        await this.pageActions.click(this.page, this.selectors.viewShipmentDetailsButton);
    }

    async dispatchDriver() {
        await this.pageActions.click(this.page, this.selectors.dispatchDriversButton);
        await this.pageActions.click(this.page, this.selectors.dispatchYesConfirmButton);
    }

    async editLoad() {
        await this.pageActions.click(this.page, this.selectors.editIcon);

    }
    async deliverLoad() {
        await this.pageActions.check(this.page, this.selectors.billOfLading);
    }

    async saveDriverLoad() {
        await this.pageActions.click(this.page, this.selectors.saveDriverLoad);
        await this.page.waitForTimeout(3000);
    }

    async verifyAllDriverRates() {
        await this.pageActions.click(this.page, this.selectors.verifyAllDriverRatesCheckbox);
    }

    async saveChanges() {
        await this.pageActions.click(this.page, this.selectors.saveChangesButton);
    }

    async createInvoice() {
        await this.pageActions.click(this.page, this.selectors.createInvoiceButton);
        await this.pageActions.click(this.page, this.selectors.nextButton);
        await this.pageActions.check(this.page, this.selectors.includeBillsOfLading);
        await this.pageActions.click(this.page, this.selectors.sendButton);
    }

    async invoiceSentSuccessfully() {
        await this.pageActions.click(this.page, this.selectors.toaster);
        const toastMessage = await this.page.textContent(this.page, this.selectors.toaster);
        expect(toastMessage).toContain('Invoice sent successfully');
    }

    async assignDriverToLoad(randomCustomerName,createdDriverName) {
        await this.selectCustomerName(randomCustomerName);
        await this.openShipmentActionsPopUp();
        await this.clickFindDriversButton();
        await this.searchDriver(createdDriverName);
        await this.assignDriver();
        await this.assignCommodity();
        await this.addToLoad();
        await this.openShipmentActionsPopUp();
        await this.viewShipmentDetails();
    }
    async completeShipment() {

        await this.dispatchDriver();
        await this.editLoad();
        await this.deliverLoad();
        await this.saveDriverLoad();
        await this.verifyAllDriverRates();
        await this.saveChanges();
        await this.createInvoice();
        await this.invoiceSentSuccessfully();
    }
}
module.exports = Shipment;