import { test, expect } from '@playwright/test';

test('Iframes @frame',async({page})=>
{

  await page.goto("http://uitestingplayground.com/frames");
  const frame_outer=page.frameLocator("//iframe[@id='frame-outer']");
  const Submit= frame_outer.locator("//button[normalize-space()='Submit']");
  await Submit.click();

}
);
