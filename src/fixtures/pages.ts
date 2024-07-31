import { test as base } from "@playwright/test"
import LoginPage from "../pageObjects/loginPage"
import MyJourneyPage from "../pageObjects/myJourneyPage";

type MyPages = {
  loginPage: LoginPage
  myJourneyPage: MyJourneyPage
};

export const test = base.extend<MyPages>({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  },
  myJourneyPage: async ({page}, use) => {
    await use(new MyJourneyPage(page))
  },
})
