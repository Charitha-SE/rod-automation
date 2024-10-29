const DriverPage = {

    driversTab: "//div//a//span[text()='Drivers']",
    addNewDriverButton: "//button[text()='Add New Driver']",
    drivername: "input[placeholder='Enter Driver Name'][name='name']",
    driverPhoneNumber: "input[name='phoneNumber']",
    truckingCoNameField: "//label[text()='Trucking Co. Name']//parent::div//div//div//div[@class=' css-19bb58m']//input",
    truckingCoName: "//input[@placeholder='Enter Trucking Co. Name']",
    truckingCoNumber: "input[name='truckingCompanyNumber']",
    saveButton: "//button[text()='Save']",
    unitNumber: "input[name='unitNumber']",
    trailerNumber: "input[name='trailerNumber']",
    trailerSize: "//label[text()='Trailer Size']//parent::div//div//div//div[@class=' css-hlgwow']",
    driverAddress: "input[name='streetAddress']",
    driverCity: "input[name='city']",
    driverZIPCode: "input[name='zipCode']",
    initialLocationTagField: "//label[text()='Initial Location Tag']//parent::div//div//div//div//div//input",
    initialLocationTagInput: "#react-select-9-input",
    createDriverButton: "(//button[text()='Create driver'])[1]",
    successToaster: "//div[contains(text(),'New Driver Added Successfully')]"
};

module.exports = { DriverPage };
