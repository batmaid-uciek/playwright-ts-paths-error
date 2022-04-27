import { test, expect } from "@playwright/test";

import { randomString } from "@services/RandomString";

const createRandomMail = (): string => {
  const randomEmail = `JohnDoe
  -${randomString(5)}@example.com`;

  return randomEmail;
};

test(`test paths`, async ({ page }) => {
  await page.goto("https://www.google.com");

  const email = createRandomMail();
});
