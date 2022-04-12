import puppeteer from 'puppeteer';

export const startBrowser = async () => {
    return await puppeteer.launch({
            headless: true, // true = not open, false= open in browser
            args: ["--disable-setuid-sandbox"],
            ignoreHTTPSErrors: true,
            ignoreDefaultArgs: ["--enable-automation"]
    });
}

export const closeBrowser = browser => {
    browser.close();
    console.log("Browser is closed......");
}
