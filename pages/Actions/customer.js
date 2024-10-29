const { CustomerPage } = require('../Selectors/customerPage');
const RandomMethod = require('../../helper/randomHelpers');
const PageActions = require('../../helper/pageActions');

class Customer {
    constructor(page) { 
        this.page = page;
        this.selectors = CustomerPage; 
        this.pageActions = new PageActions(); 
        this.customerName = '';
    }

    async navigateToCustomersTab() {
        await this.pageActions.click(this.page, this.selectors.customersTab);
    }

    async clickCreateCustomerButton() {
        await this.pageActions.click(this.page, this.selectors.createCustomerButton);
    }

    async fillCustomerName() {
        this.customerName = RandomMethod.getRandomName();
        await this.pageActions.fill(this.page, this.selectors.customerName, this.customerName);
    }

    async fillPhoneNumber() {
        const randomPhoneNumber = RandomMethod.generatePhoneNumber();
        await this.pageActions.fill(this.page, this.selectors.phoneNumber, randomPhoneNumber);
    }

    async fillCustomerAddress() {
        const randomAddress = RandomMethod.getRandomAddress();
        await this.pageActions.fill(this.page, this.selectors.customerAddress, randomAddress);
    }

    async fillCustomerCity() {
        const randomCity = RandomMethod.getRandomCity();
        await this.pageActions.fill(this.page, this.selectors.customerCity, randomCity);
    }

    async fillCustomerZipCode() {
        const randomZipcode = RandomMethod.getRandomZipCode();
        await this.pageActions.fill(this.page, this.selectors.customerZipCode, randomZipcode);
    }

    async fillCustomerNotes() {
        const customerNotes = RandomMethod.generateRandomNotes(15);
        await this.pageActions.fill(this.page, this.selectors.customerNotes, customerNotes);
    }

    async selectPriority() {
        const radioButtonSelectors = [this.selectors.highPriority, this.selectors.normalPriority];
        const randomIndex = Math.floor(Math.random() * radioButtonSelectors.length);
        await this.pageActions.click(this.page, radioButtonSelectors[randomIndex]);
    }

    async selectInvoiceType() {
        const invoiceTypeSelector = ["//input[@value='LumpSum']", "//input[@value='BrokenOut']"];
        const randomIndex = Math.floor(Math.random() * invoiceTypeSelector.length);
        await this.pageActions.click(this.page, invoiceTypeSelector[randomIndex]);
    }

    async fillShrinkage() {
        const autoShrinkage = RandomMethod.getRandomShrinkage();
        await this.pageActions.fill(this.page, this.selectors.customerShrinkage, autoShrinkage);
    }

    async addCustomer() {
        await this.pageActions.click(this.page, this.selectors.addCustomer);
    }

    async waitForToaster() {
        await this.page.waitForSelector(this.selectors.toaster);
    }

    async customerCreation() {
        await this.navigateToCustomersTab();
        await this.clickCreateCustomerButton();
        await this.fillCustomerName();
        await this.fillPhoneNumber();
        await this.fillCustomerAddress();
        await this.fillCustomerCity();
        await this.fillCustomerZipCode();
        await this.fillCustomerNotes();
        await this.selectPriority();
        await this.selectInvoiceType();
        await this.fillShrinkage();
        await this.addCustomer();
        await this.waitForToaster();
    }
}

module.exports = Customer;
