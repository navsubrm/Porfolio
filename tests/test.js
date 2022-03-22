import { expect, test } from "@playwright/test";

test("index page has expected title", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("title")).toBe("Nathan Meeker || Welcome");
});

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("h1")).toBe("Hi, I'm Nate.");
});

test("index page has expected span", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("span")).toBe("Come see the whole picture.");
});
