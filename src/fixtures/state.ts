import { Page, expect } from "@playwright/test";
import { test as base} from "../../src/fixtures/pages"
import { email, password } from "../testData.json"
import LoginPage from "../pageObjects/loginPage";

export const loggedInUser = base.extend<{loginPage: LoginPage}>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.goto()
      await expect(loginPage.emailField()).toBeVisible()
      await loginPage.emailField().fill(email)
      await loginPage.passwordField().fill(password)
      await loginPage.submitBtn().click()
      await page.waitForURL("https://app.intempt.com")
  
      await use(loginPage);
    },
  });