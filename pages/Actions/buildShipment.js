const {BuildShipmentPage} = require('../../pages/Selectors/buildShipmentPage');
const RandomMethod = require('../../helper/randomHelpers');
const PageActions = require('../../helper/pageActions');

class BuildShipment {
    constructor(page) {
        this.page = page;
        this.selectors = BuildShipmentPage;
        this.pageActions = new PageActions();
    }

    async navigateToBuildShipment() {
        await this.pageActions.click(this.page, this.selectors.buildShipment);
    }

    async fillCustomerName(randomCustomerName) {
        await this.pageActions.click(this.page, this.selectors.customerNameField);
        await this.pageActions.fill(this.page, this.selectors.customerNameField, randomCustomerName);
        await this.page.waitForTimeout(3000);
        await this.page.getByText(randomCustomerName, { exact: true }).click();
    }

    async setPickupLocation() {
        await this.pageActions.click(this.page, this.selectors.pickUp);
        await this.page.waitForTimeout(3000);

        const pinDropElement = await this.page.locator(this.selectors.pinDrop);
        const boundingBox = await pinDropElement.boundingBox();

        await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(boundingBox.x + boundingBox.width / 3 + 20, boundingBox.y + boundingBox.height / 3 + 20, { steps: 10 });
        await this.page.mouse.up();

        await this.page.waitForTimeout(3000);
        await this.pageActions.click(this.page, this.selectors.useThisLocation);
    }

    async setDropOffLocation() {
        await this.pageActions.click(this.page, this.selectors.dropOff);
        await this.page.waitForTimeout(3000);

        const pinDropElement = await this.page.locator(this.selectors.pinDrop);
        const boundingBox = await pinDropElement.boundingBox();

        await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(boundingBox.x + boundingBox.width / 4 + 20, boundingBox.y + boundingBox.height / 4 + 20, { steps: 10 });
        await this.page.mouse.up();

        await this.page.waitForTimeout(1000);
        await this.pageActions.click(this.page, this.selectors.useThisLocation);
    }

    async saveAndContinue() {
        await this.pageActions.click(this.page, this.selectors.saveAndContinue);
    }

    async fillDates() {
        await this.page.waitForSelector(this.selectors.startDate, { state: 'visible' });
        await this.page.locator(this.selectors.startDate).first().click();
        await this.page.waitForSelector('.react-datepicker', { state: 'visible' });
        await this.page.locator('.react-datepicker__day--today').click();

        await this.page.waitForSelector(this.selectors.endDate, { state: 'visible' });
        await this.page.locator(this.selectors.endDate).nth(1).click();
        await this.page.waitForSelector('.react-datepicker', { state: 'visible' });

        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 2);
        const futureDay = futureDate.getDate();
        const daySelector = `//div[contains(@class, 'react-datepicker__day') and text()="${futureDay}"]`;
        await this.page.locator(daySelector).click();
    }

    async fillWeight() {
        const weight = RandomMethod.getWeight();
        await this.pageActions.fill(this.page, this.selectors.weightLbs, weight);
    }

    async fillUnloadedWeight() {
        const unLoadedWeight = RandomMethod.getUnLoadedWeight();
        await this.pageActions.fill(this.page, this.selectors.unloadedWeight, unLoadedWeight);
    }

    async fillShipmentDetails() {
        await this.pageActions.fill(this.page, this.selectors.numberOfLoads, "1");
        await this.pageActions.fill(this.page, this.selectors.trucksNeeded, "1");
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async createCommodity() {
        await this.pageActions.click(this.page, this.selectors.commodityField);
        await this.pageActions.fill(this.page, this.selectors.commodityField, "Create");

        await this.page.getByText('Create New Commodity', { exact: true }).click();

        const randomCommodityName = RandomMethod.getCommodityName();

        await this.pageActions.fill(this.page, this.selectors.commodityName, randomCommodityName);

        await this.pageActions.click(this.page, this.selectors.saveCommodity);
    }

    async checkAddLocationsCheckbox() {
        await this.pageActions.check(this.page, this.selectors.addLocationsCheckbox);
    }

    async selectRateType(rateType) {
        await this.pageActions.click(this.page, this.selectors.rateType);
        await this.page.getByText(rateType, { exact: true }).click();
    }

    async clickBuildShpmentButton(){
        await this.pageActions.click(this.page, this.selectors.buildShipmentButton);
    }

    async waitForToaster() {
        await this.page.waitForSelector(this.selectors.buildShipmentToaster);
    }

    async goToLoadBoard(){
        await this.pageActions.click(this.page, this.selectors.goToLoadBoradButton);
    }

    async createShipment(randomCustomerName) {
        await this.navigateToBuildShipment();
        await this.fillCustomerName(randomCustomerName);
        await this.setPickupLocation();
        await this.setDropOffLocation();
        await this.saveAndContinue();
    }

    async shipmentDetails() {
        await this.fillDates();
        await this.fillWeight();
        await this.fillUnloadedWeight();
        await this.fillShipmentDetails();
        await this.createCommodity();
        await this.checkAddLocationsCheckbox();
        await this.selectRateType("Per CWT");
        await this.pageActions.scrollToBottom(this.page);
        await this.clickBuildShpmentButton();
        await this.waitForToaster();
        await this.goToLoadBoard();
    }
}

module.exports = BuildShipment;
