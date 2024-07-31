import BasePage from "./basePage";
import { Page } from "@playwright/test";
import SendEmailComponent from "./components/sendEmail";


export default class MyJourneyPage extends BasePage {
    path = "https://app.intempt.com/journeys/5316"
    sendEmailBlock: SendEmailComponent

    constructor(page: Page) {
        super(page)
        this.sendEmailBlock = new SendEmailComponent(page)
    }

    public async goto() {
        await this.page.goto(this.path)
    }

    sendEmailDrag = () => this.page.getByText(" Send email ", { exact: true })

    workflowSheet = () => this.page.locator('#workflow > section > div:nth-child(2)');

    sendEmailAction = () => this.page.locator('#workflow > section > div:nth-child(1) > div > div:nth-child(2) > svg > g > g:nth-child(2) > g')

}