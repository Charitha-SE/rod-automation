const { LoginSelectors } = require('../Selectors/loginPage');
const PageActions = require('../../helper/pageActions');

class Login {
    constructor() {
        this.pageActions = new PageActions();
    }

    async enterUsername(page, username) {
        await this.pageActions.fill(page, LoginSelectors.username, username);
    }

    async enterPassword(page, password) {
        await this.pageActions.fill(page, LoginSelectors.password, password);
    }

    async clickLoginButton(page) {
        await this.pageActions.click(page, LoginSelectors.loginButton);
    }

    async getToasterMessage(page) {
        return await page.textContent(LoginSelectors.toaster);
    }
}

module.exports = Login;
