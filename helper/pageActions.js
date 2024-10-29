class PageActions {
    async click(page, selector) {
        await page.click(selector);
    }

    async fill(page, selector, value) {
        await page.fill(selector, value);
    }

    async check(page, selector) {
        await page.check(selector);
    }

    async scrollToBottom(page) {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }
}

module.exports = PageActions;
