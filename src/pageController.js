import {scrapper} from "./pageScraper.js";

export const scrapeAll = async browserInstance => {
    try{
        return scrapper(browserInstance);
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }

    return false;
}
