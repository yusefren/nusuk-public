// @ts-check
const { test, expect } = require('@playwright/test');

test('Full scenario', async ({ page }) => {
  test.setTimeout(0)
  await page.goto('https://nusuk.site/');
  await addMouse(page)
  await moveCursorToElement(page, 'img[alt="Kabaa"]');
  await page.waitForTimeout(500)
  await moveCursorToElement(page, 'a[href="#"]');
  await page.click('a[href="#"]')
  await page.waitForTimeout(3000)
  await moveCursorToElement(page, 'button:has-text("إنهاء")');
  await page.click('button:has-text("إنهاء")')
  await page.waitForTimeout(2000)
  await moveCursorToElement(page, 'a[href="./settings"]');
  await page.click('a[href="./settings"]')
  await page.waitForTimeout(2000)

  await moveCursorToElement(page, 'input');
  await page.click('input')
  //clear input
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.waitForTimeout(1000)
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(1000)
  await page.keyboard.type('سارة عمر داغستاني')
  await page.waitForTimeout(500)
  await moveCursorToElement(page, 'span:has-text("female")');
  await page.click('span:has-text("female")')

  await moveCursorToElement(page, 'span:has-text("save")');
  await page.click('span:has-text("save")')
  await page.waitForTimeout(1000)

  await moveCursorToElement(page, 'a[href="#"]');
  await page.click('a[href="#"]')
  await page.waitForTimeout(3000)



});

async function addMouse(page){
  await page.addStyleTag({ content: `
  .custom-cursor {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: grey; /* Customize the cursor appearance */
    border-radius: 50%;
    pointer-events: none; /* Ensures it doesn't interfere with page interactions */
    z-index: 10000;
    opacity: 0.5;
    transition: all 1s ease-in-out;
  }
`});

await page.evaluate(() => {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  
});
}

async function moveCursor(page, x, y) {
  await page.evaluate(({ x, y }) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }, { x, y });
}

async function moveCursorToElement(page, selector) {
  const elementHandle = await page.$(selector);
  await elementHandle.evaluate(async element  => {
      const rect = element.getBoundingClientRect();
      const cursor = document.querySelector('.custom-cursor');

      const x = rect.left + rect.width / 2 + window.scrollX;
      const y = rect.top + rect.height / 2 + window.scrollY;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
  }, selector);
  await page.waitForTimeout(1000)
}