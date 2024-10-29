const { faker } = require('@faker-js/faker');

class RandomMethod {
    
    static getRandomName() {
        const randomFirstName = faker.person.firstName();  
        const randomLastName = faker.person.lastName();    
        return `${randomFirstName} ${randomLastName}`;
    }

    static generatePhoneNumber() {
        const centralOfficeCode = Math.floor(100 + Math.random() * 800); 
        const lineNumber = Math.floor(1000 + Math.random() * 9000); 
        return `2342${centralOfficeCode}${lineNumber}`;
    }

    static getRandomAddress() {
        return faker.location.streetAddress();
    }

    static getRandomCity() {
        return faker.location.city();
    }

    static getRandomState() {
        const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", 
            "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
             "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", 
             "WA", "WV", "WI", "WY"];

        const selectState = states[Math.floor(Math.random() * states.length)];
        return `${selectState}`;
    }

    static getRandomZipCode() {
        const randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;  
        return randomNumber.toString();
    }

    static generateRandomNotes(length) {
        return faker.lorem.words(length);  
    }

    static getRandomShrinkage() {
        return (Math.random() * 8.99 + 1).toFixed(2);  
    }

    static getcommodityName(length = 4) {
        return Array.from({ length }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
    }

    static getRate() {
        return (Math.random() * 499 + 1).toFixed(2);  
    }

    static getCommodityName(){
        const commodityName = faker.string.alpha(5);
        return commodityName;
    }

    static getWeight() {
        return faker.number.int({ min: 4500, max: 9000 }).toString();
    }

    static getUnLoadedWeight() {
        return faker.number.int({ min: 4500, max: 9000 }).toString();
    }

    static getUnitNumber() {
        return faker.string.numeric(3);
    }

    static getTruckingCompanyName(length = 6) {
        return Array.from({ length }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
    }

    static getTruckingCompanyNumber() {
        return '#' + faker.string.numeric(3);
    }
    

}
module.exports = RandomMethod;
