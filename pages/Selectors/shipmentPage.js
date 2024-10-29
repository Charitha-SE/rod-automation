const ShipmentPage = {

    loadBoardTab: "//div//a//span[text()='Load Board']",
    customerNameDropDown: "//label[text()='Customer Name']//parent::div//div//div//div[@class=' css-19bb58m']//input",
    shipmentActions: "//div[contains(@class,'d-flex align-items-center shipment-middle-col col-7')]",
    findDriversButton: "//button[text()='Find drivers']",
    searchDriverName: "input[placeholder='Enter Driver Name']",
    driverCard: "//div[@class='row']/div/div/strong",
    assignCommodity: "//label[text()='Assign Commodity']//parent::div//div//div//div[@class=' css-19bb58m']//input",
    addToLoad: "//button[text()='Add to Load']",
    viewShipmentDetailsButton: "//button[text()='View shipment details']",
    dispatchDriversButton: "//button[text()='Dispatch drivers']",
    dispatchYesConfirmButton: "//button[text()='Yes, confirm']",
    editIcon: "//img[@alt='PencilIcon']",
    billOfLading: "//label[text()='Bill of lading received']//parent::div/input",
    saveDriverLoad: "//button[text()='Save']",
    verifyAllDriverRatesCheckbox: "//label[text()='Verify all driver rates']//parent::div/input",
    saveChangesButton: "//button[text()='Save Changes']",
    createInvoiceButton: "//button[text()='Create Invoice']",
    nextButton: "//button[text()='Next']",
    includeBillsOfLading: "//label[text()='Include Bill(s) of Lading']//parent::div/input",
    sendButton: "//button[text()='Send']",
    toaster: "//div[contains(text(),'Invoice sent successfully')]"
}

module.exports = {ShipmentPage};