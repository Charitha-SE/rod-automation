const CustomerPage = {
    customersTab: "//div//a//span[text()='Customers']",
    createCustomerButton: "button[class='transparent-button btn btn-primary']",
    customerRadioButton: "input[value='Customer']",
    customerName: "(//input[@placeholder='Enter Customer Name'])[2]",
    phoneNumber: "//input[@name='phoneNumber']",
    customerEmail: "input[placeholder='Enter Email Address']",
    customerAddress: "//input[@name='streetAddress']",
    customerCity: "//input[@name='city']",
    customerState: "(//div[contains(@class,'css-19bb58m')])[3]",
    customerZipCode: "//input[@name='zipCode']",
    customerNotes: "//textarea[@name='notes']",
    highPriority: "//input[@value='High']",
    normalPriority: "//input[@value='Normal']",
    customerShrinkage: "//input[@name='autoShrinkPercentage']",
    cancel: "//button[text()='Cancel']",
    addCustomer: "//button[text()='Add Customer']",
    toaster: "//div[contains(text(),'New Customer Added Successfully')]"
};

module.exports = { CustomerPage };
