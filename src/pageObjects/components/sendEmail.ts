import BasePage from "../basePage"
import { Page } from "@playwright/test";


export default class SendEmailComponent extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    form = () => this.page.locator('#workflow > section > form > aside');

    name = () => this.page.getByPlaceholder("Enter a name")

    emailDestination = () => this.page.getByText("liza'stest")

    emailTemplateSearch = () => this.page.getByPlaceholder("Select email")

    emailTemplateItem = () => this.page.getByText("limitreached", { exact: true })

    newThreadOption = () => this.page.getByText(' New thread ', { exact: true })

    saveBtn = () => this.page.locator('button[type="button"]:has-text("Save")')

    previewBtn = () => this.page.locator('button[type="button"]:has-text("Preview")')

    deleteBtn = () => this.page.locator('button[type="button"]:has-text("Delete")')
}