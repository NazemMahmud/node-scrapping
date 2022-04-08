import puppeteer from 'puppeteer';

export const startBrowser = async () => {
    try {
        console.log("Opening the browser......"); // STEP 1: init launch
        return puppeteer.launch({
            headless: true, // not open in browser
            args: ["--disable-setuid-sandbox"],
            ignoreHTTPSErrors: true,
            ignoreDefaultArgs: ["--enable-automation"]
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }

    return false;
}

export const closeBrowser = async browser => {
    const instance = await browser;
    instance.close();
}
