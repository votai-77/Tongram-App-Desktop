import { config } from "../Utils/TG_Config";
import fs from 'fs';
import path from 'path';
export class LoginAccount {
    constructor(page) {
        this.page = page;
    }
    async loginAccount() {
        await this.page.goto(config.url);
        await this.page.reload();
        const page1Promise = await this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'Log In' }).click();
        const page1 = await page1Promise;
        await page1.locator('#login-phone').fill('0329733010');
        await page1.getByRole('button', { name: 'Next' }).click();
    }
    async saveCookies() {
        const cookies = await this.page.context().cookies();
        const dir = config.cookieDir;
        const filePath = path.join(dir, config.cookiesFile);

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, JSON.stringify(cookies, null, 2));
    }
}