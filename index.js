import {startBrowser, closeBrowser} from "./src/browser.js";
import {scrapper} from "./src/pageScraper.js";


try {
    console.log("Opening the browser......");
    let browserInstance = await startBrowser(); // create a new browser instance
    await scrapper(browserInstance);
    closeBrowser(browserInstance);
} catch (err) {
    console.log("Could not create a browser instance => : ", err);
}

