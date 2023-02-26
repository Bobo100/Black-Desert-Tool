// NPC 販賣的東西
const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      //   "--disable-gpu",
      "--start-maximized",
      //   "--window-size=1920x1080",
    ],
    defaultViewport: null,
  });

  // await browser.newPage();

  let pages = await browser.pages();
  let page = pages[0];
  // let page2 = pages[1];
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
  );

  await page.goto("https://bdocodex.com/tw/npc/42201/1/");

  try {
    const sell_page_btn = await page.$(
      "body > div > div > div:nth-child(3) > div.card.mt-3 > div > div > ul > li:nth-child(4) > a"
    );
    sell_page_btn.click();

    // 點擊篩選器 更改顯示方式 從10改成200
    const select = await page.$(
      'select[name="npcSpecialSellItemsTable_length"]'
    );
    const options = await select.$$("option");
    const value = await (
      await options[options.length - 1].getProperty("value")
    ).jsonValue();
    await select.select(value);

    // 點選排序 由小到大
    // const thElement = await page.$("th.dt-id");
    // await thElement.click();
    let flag = true;
    while (flag) {
      const nextButton = await page.$("#npcSpecialSellItemsTable_next");
      const isDisabled = await page.$eval(
        "#npcSpecialSellItemsTable_next",
        (button) => button.classList.contains("disabled")
      );

      // 如果是最後一頁就跳出迴圈
      if (isDisabled) {
        flag = false;
        console.log("Last Page");
      } else {
        await nextButton.click();
        await delay(1000);
        console.log("Next Page");
      }

      const rows = await page.$$(
        "#tabs-npcspecialsellsitems table > tbody > tr"
      );
      for (const row of rows) {
        // 在這裡對每個 <tr> 元素進行操作
        // 例如：讀取行內文本，選取子元素等等

        // 這邊我們要下載素材圖片
        // 首先先取得名字
        const element = await row.$("td > a > b");
        const innerText = await element.evaluate(
          (element) => element.textContent,
          element
        );

        // 取得圖片連結
        const img = await row.$("td > div > a > img");
        const imgUrl = await img.evaluate((node) => node.src);
        const response = await axios({
          method: "GET",
          url: imgUrl,
          responseType: "stream",
        });
        await response.data.pipe(
          fs.createWriteStream(`./image/${innerText}.png`)
        );

        console.log("Downloaded: " + innerText);
      }
    }
  } catch (error) {
    console.log(error);
  }

  await browser.close();
})();
