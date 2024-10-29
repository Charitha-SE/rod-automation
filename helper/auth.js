const { users } = require('../data/credentials');
const Login = require('../pages/Actions/login');

async function login(page) {
  const login = new Login();

  await page.goto('/');

  await login.enterUsername(page, users.login.username); 
  await login.enterPassword(page, users.login.password);
  await login.clickLoginButton(page);

  await page.waitForNavigation();
}

module.exports = { login };

