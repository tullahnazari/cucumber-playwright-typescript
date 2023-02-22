import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('Go to the Gravie website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
});

When('I visit the careers page', async function (this: ICustomWorld) {
  const page = this.page!;

  await page.goto(config.BASE_URL + 'careers/');

  // 'Join the team' element on careers page is visible
  const joinTheTeam = 'text=Join the Team';

  page.locator(joinTheTeam).isVisible;
});

When('I navigate to the open positions', async function (this: ICustomWorld) {
  const page = this.page!;

  // The url should match the careers page
  await expect(page).toHaveURL(/.*gravie/);

  await page.click('text=View Open Positions');
});

Then(
  'I should be able to see the application for {string}',
  async function (this: ICustomWorld, jobTitle: string) {
    const page = this.page!;

    // Switching to newly opened tab
    const [newPage] = await Promise.all([page.waitForEvent('popup')]);

    // Confirm I am on the jobs lever page
    await expect(newPage).toHaveURL(/.*jobs.lever/);

    await newPage.click(`text=${jobTitle}`);

    // Verify I can see the Software Test Engineer position and the button to apply
    page.locator(`text=${jobTitle}`).isVisible;
    page.locator('text=Apply for this job').isVisible;
  },
);
