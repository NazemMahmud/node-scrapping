import {getRandom} from 'random-useragent';
const BASE_URL = 'https://www.floridahealthfinder.gov';
const FORM_URL = `${BASE_URL}/facilitylocator/FacilitySearch.aspx`;


const formFieldsIds = {
    ProviderType: "ctl00_mainContentPlaceHolder_FacilityType",
    Name: "ctl00_mainContentPlaceHolder_FacilityName",
    City: "ctl00_mainContentPlaceHolder_City",
}
const formData = {
    providerType: 'ALL',
    name: 'Legacy At Highwoods',
    city: '',
}

const submitButtonId = "ctl00_mainContentPlaceHolder_SearchButton";

/** Set page setup and navigate to the page */
const openPage = async page =>
    Promise.all([
        await page.setUserAgent(getRandom()), // set random user agent
        await page.setDefaultNavigationTimeout(0), // 0 means unlimited time
        await page.goto(FORM_URL, {
            waitUntil: 'load',
            defaultViewport: null,
        }) //  navigate to this page (it will open in browser if headless false)
    ])


/**
 * page.type('#find_desc', 'Pizza Delivery');
 * then click the submit button
 * then waitForNavigation to reload a new page
 */
const insertData = async page =>
    Promise.all([
        await page.type(`#${formFieldsIds.ProviderType}`, formData.providerType),
        await page.type(`#${formFieldsIds.Name}`, formData.name),
        await page.type(`#${formFieldsIds.City}`, formData.city)
    ])

    /*const name = await page.$eval(`#${formFieldsIds.Name}`, elem => {
        console.log(elem.getAttribute('value'))
        return elem.value;
    })*/

const submitForm = async page =>
    Promise.all([
        page.click(`#ctl00_mainContentPlaceHolder_SearchButton`),
        page.waitForNavigation({ waitUntil: "networkidle2" }),
    ]);
    // await page.hover(`#${submitButtonId}`)


const prepareResponseData = async page => {
    return await page.$$eval("#ctl00_mainContentPlaceHolder_dgFacilities > tbody > tr ", allItems => {
        allItems = allItems.slice(1); // table header no need
        let results = [];
        allItems.forEach(elem => {
            const tds = elem.querySelectorAll('td');
            let tdData = [];
            tds.forEach((item, idx) => {
                if (idx) {
                    tdData.push(item.textContent);
                } else {
                    const title = item.querySelector('#facilityProfiles > a').title;
                    tdData.push(title);
                }
            })
            results.push(tdData);
        })
        return results;
    });
}

/**
 * Steps::
 * Create New Page instance
 * Set user agent (randomly), set navigation timeout and other related config before go to the link
 * Go to the link
 * Fill up necessary input fields,
 * Submit form
 * Get specific data and format data from new loaded page
 *
 * @param browser
 * @returns {Promise<*>}
 */
export const scrapper = async browser => {
    let page = await browser.newPage(); // STEP 2: create a page instance
    console.log(`Navigating to ${FORM_URL}...`);

    await openPage(page);
    console.log(`page loaded`);

    await insertData(page); // form input field fill up
    await submitForm(page);

    const data = await prepareResponseData(page)
    console.log('element array:', data)
    return data;

    /**
     outputs:  [
         [
             'LEGACY AT HIGHWOODS PRESERVE',
             'Assisted Living Facility',
             '18600 HIGHWOODS PRESERVE PKWY',
             'TAMPA',
             'FL',
             '33647',
             '(813) 375-9858',
             '88'
         ],
         [
             'LEGACY AT HIGHWOODS PRESERVE',
             'Clinical Laboratory',
             '18600 HIGHWOODS PRESERVE PKWY',
             'TAMPA',
             'FL',
             '33647',
             '(813) 375-9858',
             '0'
         ]
     ]
     */
}
