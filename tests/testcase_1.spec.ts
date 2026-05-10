import { test, expect } from '@playwright/test';


test.describe.parallel('Parallel test case', () => 
{
test('Iframes @frame',async({page})=>
{

  await page.goto("http://uitestingplayground.com/frames");
  const frame_outer=page.frameLocator("//iframe[@id='frame-outer']");
  const Submit= frame_outer.locator("//button[normalize-space()='Submit']");
  await Submit.click();

}
);

  test('test_1', async ({ page }) =>
 {
    await page.goto('https://www.google.com');
    expect(await page.title()).toBe("Google");
    await page.waitForTimeout(5000);
  });
  test('test_2', async ({ page }) => 
  {
    await page.goto('https://www.facebook.com');
    expect(await page.title()).toContain("Facebook");
    await page.waitForTimeout(5000);
  });

});

