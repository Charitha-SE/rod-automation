const {DriverPage} = require('../Selectors/driverPage');
const RandomMethod = require('../../helper/randomHelpers');
const PageActions = require('../../helper/pageActions');

class Driver {
    constructor(page) {
        this.page = page;
        this.selectors = DriverPage;
        this.pageActions = new PageActions();
        this.driverName = '';
    }

    async navigateToDriversTab() {
        await this.pageActions.click(this.page, this.selectors.driversTab);
    }

    async clickAddNewDriverButton() {
        await this.pageActions.click(this.page, this.selectors.addNewDriverButton);
    }

    async fillDriverName() {
        this.driverName = RandomMethod.getRandomName();
        await this.pageActions.fill(this.page, this.selectors.drivername, this.driverName);
    }

    async fillPhoneNumber() {
        const randomPhoneNumber = RandomMethod.generatePhoneNumber();
        await this.pageActions.fill(this.page, this.selectors.driverPhoneNumber, randomPhoneNumber);
    }

    async createTruckingCompany() {
        await this.pageActions.click(this.page, this.selectors.truckingCoNameField);
        await this.pageActions.fill(this.page, this.selectors.truckingCoNameField, "Create");

        await this.page.getByText('Create New Trucking Company', { exact: true }).click();

        const randomTruckingCompanyName = RandomMethod.getTruckingCompanyName();
        await this.pageActions.fill(this.page, this.selectors.truckingCoName, randomTruckingCompanyName);

        const randomTruckingCompanyNumber = RandomMethod.getTruckingCompanyNumber();
        await this.pageActions.fill(this.page, this.selectors.truckingCoNumber, randomTruckingCompanyNumber);

        await this.pageActions.click(this.page, this.selectors.saveButton);
    }

    async fillUnitNumber() {
        const unitNumber = RandomMethod.getUnitNumber();
        await this.pageActions.fill(this.page, this.selectors.unitNumber, unitNumber);
    }

    async selectTrailerSize() {
        await this.pageActions.click(this.page, this.selectors.trailerSize);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }

    async fillDriverAddress() {
        const randomAddress = RandomMethod.getRandomAddress();
        await this.pageActions.fill(this.page, this.selectors.driverAddress, randomAddress);
    }

    async fillDriverCity() {
        const randomCity = RandomMethod.getRandomCity();
        await this.pageActions.fill(this.page, this.selectors.driverCity, randomCity);
    }

    async fillDriverZipCode() {
        const randomZipcode = RandomMethod.getRandomZipCode();
        await this.pageActions.fill(this.page, this.selectors.driverZIPCode, randomZipcode);
    }

    async selectInitialLocationTag() {
        await this.pageActions.click(this.page, this.selectors.initialLocationTagField);
        await this.pageActions.fill(this.page, this.selectors.initialLocationTagField, "tx/ok");
        await this.page.keyboard.press('Enter');
    }

    async clickCreateDriverButton() {
        await this.pageActions.click(this.page, this.selectors.createDriverButton);
    }

    async waitForToaster() {
        await this.page.waitForSelector(this.selectors.successToaster);
    }

    async driverCreation() {
        await this.navigateToDriversTab();
        await this.clickAddNewDriverButton();
        await this.fillDriverName();
        await this.fillPhoneNumber();
        await this.createTruckingCompany();
        await this.fillUnitNumber();
        await this.selectTrailerSize();
        await this.fillDriverAddress();
        await this.fillDriverCity();
        await this.fillDriverZipCode();
        await this.selectInitialLocationTag();
        await this.clickCreateDriverButton();
        await this.waitForToaster();
    }
}

module.exports = Driver;
