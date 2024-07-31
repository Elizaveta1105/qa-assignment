import { loggedInUser } from "../src/fixtures/state"
import { blockName } from "../src/testData.json"
import { expect } from "@playwright/test";

loggedInUser.use({
    viewport: { width: 1600, height: 1000 },
  });

loggedInUser('user should successfully set up send email block', async ({ loginPage, myJourneyPage, page}) => {
    
    await myJourneyPage.goto()
    await expect(myJourneyPage.sendEmailDrag()).toBeVisible()
    await myJourneyPage.sendEmailDrag().dragTo(myJourneyPage.workflowSheet(), {targetPosition: {
        x: 572,
        y: 270
    }, force: true})
    await expect(myJourneyPage.sendEmailAction()).toBeVisible()
    await page.waitForTimeout(1000)
    await myJourneyPage.sendEmailAction().dblclick()
    await myJourneyPage.sendEmailBlock.name().fill(blockName)
    await myJourneyPage.sendEmailBlock.emailDestination().click()
    await myJourneyPage.sendEmailBlock.emailTemplateSearch().click()
    await myJourneyPage.sendEmailBlock.emailTemplateItem().click()
    await myJourneyPage.sendEmailBlock.newThreadOption().click()
    await myJourneyPage.sendEmailBlock.saveBtn().click()
    await expect(myJourneyPage.sendEmailBlock.name()).toBeHidden()
    await expect(myJourneyPage.sendEmailAction()).toContainText(blockName)
    await myJourneyPage.sendEmailAction().dblclick()
    await expect(myJourneyPage.sendEmailBlock.previewBtn()).toBeVisible()
    expect(await myJourneyPage.sendEmailBlock.form().screenshot()).toMatchSnapshot("sendEmailActionSettings.png")
    await myJourneyPage.sendEmailBlock.deleteBtn().click()
    await page.waitForLoadState()
    await expect(myJourneyPage.sendEmailBlock.deleteBtn()).not.toBeVisible()
});
