import { test } from '@playwright/test';
import { LoginAccount } from '../Pages/TG_Login';
import { brotliCompress } from 'zlib';


let login;
let page;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    login = new LoginAccount(page);
    await login.loginAccount();
});
test.afterEach(async () => {
    await page.close();
})


// ===============================Test Case=================================
test("Login account correct with telegram", async ({ page }) => {
    await login.loginAccount();
})
