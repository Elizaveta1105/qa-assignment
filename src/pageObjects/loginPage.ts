import { Page } from "@playwright/test";
import BasePage from "./basePage";


export default class LoginPage extends BasePage {

    path = "https://app.intempt.com/"

    constructor(page: Page) {
        super(page)
    }

    emailField = () => this.page.locator('#email1')

    passwordField = () => this.page.locator('[name="password"]')

    submitBtn = () => this.page.locator('[id="login"]')

    public async goto() {
        await this.page.goto(this.path)
    }
}