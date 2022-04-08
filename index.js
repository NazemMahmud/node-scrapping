import {startBrowser, closeBrowser} from "./src/browser.js";
import {scrapper} from "./src/pageScraper.js";

//Start the browser and create a browser instance
let browserInstance = await startBrowser();

if (browserInstance) {
    // Pass the browser instance to the scraper controller
    const response = scrapper(browserInstance);
// TODO: after work done, close the browser instance, like browserInstance.close()
// closeBrowser(browserInstance);
// https://www.floridahealthfinder.gov/facilitylocator/FacilitySearch.aspx

}

