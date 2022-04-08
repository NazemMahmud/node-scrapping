import {getRandom} from 'random-useragent';
const BASE_URL = 'https://www.floridahealthfinder.gov';
const FORM_URL = `${BASE_URL}/facilitylocator/FacilitySearch.aspx`;
const LIST_URL = `${BASE_URL}/facilitylocator/FacilitySearch.aspx`;


const formFieldsIds = {
    ProviderType: "ctl00_mainContentPlaceHolder_FacilityType",
    // Community: "ctl00_mainContentPlaceHolder_chkCRH",
    Name: "ctl00_mainContentPlaceHolder_FacilityName",
    // LicenseStatus: "ctl00_mainContentPlaceHolder_ddlLicStatus",
    // Street: "ctl00_mainContentPlaceHolder_FacilityAddress",
    City: "ctl00_mainContentPlaceHolder_City",
    // Zipcode: "ctl00_mainContentPlaceHolder_Zipcode",
    // County: 'ctl00_mainContentPlaceHolder_County',
    // AHCAFileNumber: 'ctl00_mainContentPlaceHolder_AhcaNumber',
    // AHCAFieldOffice: 'ctl00_mainContentPlaceHolder_FieldOffice',
    // License: 'ctl00_mainContentPlaceHolder_LicenseNumber',
    // Affiliated: 'ctl00_mainContentPlaceHolder_Administrator',
    // ProfitStatus: 'ctl00_mainContentPlaceHolder_OwnershipType',
    // Actions: 'ctl00_mainContentPlaceHolder_emergencyActionsList',
    // Emergency: 'ctl00_mainContentPlaceHolder_emergencyActionsList',
    // Facility: 'ctl00_mainContentPlaceHolder_chkBakerAct',
    // HiddenEventTarget: "__EVENTTARGET",
    // HiddenEventArgument: "__EVENTARGUMENT",
    // HiddenLastFocus: "__LASTFOCUS",
    // HiddenViewState: "__VIEWSTATE",
    // HiddenViewStateGenerator: "__VIEWSTATEGENERATOR",
    // HiddenEventValidation: "__EVENTVALIDATION",
}
const formData = {
    providerType: 'ALL',
    // community: '',
    name: 'Legacy At Highwoods',
    // licenseStatus: '',
    // street: '',
    city: '',
    // zipcode: '',
    // county: '',
    // ahcaFileNumber: '',
    // ahcaFieldOffice: '',
    // license: '',
    // affiliated: '',
    // profitStatus: '',
    // actions: '',
    // emergency: '',
    // facility: '',
    // eventTarget: 'ctl00$mainContentPlaceHolder$SearchButton',
    // eventArgument: '',
    // lastFocus: '',
    // eventValidation: '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',
    // viewStateGenerator: '3998EB1C',
    // viewState: '/wEPDwULLTEzNzg3NTEzNjAPZBYCZg9kFgQCBQ9kFgICAQ8WAh4JaW5uZXJodG1sBRlGYWNpbGl0eS9Qcm92aWRlciBMb2NhdG9yZAIHD2QWAgIBD2QWBgIJDxAPFggeFEFwcGVuZERhdGFCb3VuZEl0ZW1zZx4ORGF0YVZhbHVlRmllbGQFCkNsaWVudENvZGUeDURhdGFUZXh0RmllbGQFDEZhY2lsaXR5VHlwZR4LXyFEYXRhQm91bmRnZBAVJQwtLSBTZWxlY3QgLS0JQUxMIFRZUEVTD0Fib3J0aW9uIENsaW5pYxVBZHVsdCBEYXkgQ2FyZSBDZW50ZXIWQWR1bHQgRmFtaWx5IENhcmUgSG9tZRpBTEYgQ29yZSBUcmFpbmluZyBQcm92aWRlchpBbWJ1bGF0b3J5IFN1cmdpY2FsIENlbnRlchhBc3Npc3RlZCBMaXZpbmcgRmFjaWxpdHkMQmlydGggQ2VudGVyE0NsaW5pY2FsIExhYm9yYXRvcnk5Q29tbXVuaXR5IE1lbnRhbCBIZWFsdGggLSBQYXJ0aWFsIEhvc3BpdGFsaXphdGlvbiBQcm9ncmFtMENvbXByZWhlbnNpdmUgT3V0cGF0aWVudCBSZWhhYmlsaXRhdGlvbiBGYWNpbGl0eURDcmlzaXMgU3RhYmlsaXphdGlvbiBVbml0LyBTaG9ydCBUZXJtIFJlc2lkZW50aWFsIFRyZWF0bWVudCBGYWNpbGl0eR5FbmQtU3RhZ2UgUmVuYWwgRGlzZWFzZSBDZW50ZXIeRm9yZW5zaWMgVG94aWNvbG9neSBMYWJvcmF0b3J5EkhlYWx0aCBDYXJlIENsaW5pYxxIZWFsdGggQ2FyZSBDbGluaWMgRXhlbXB0aW9uGUhlYWx0aCBDYXJlIFNlcnZpY2VzIFBvb2wZSG9tZSBmb3IgU3BlY2lhbCBTZXJ2aWNlcxJIb21lIEhlYWx0aCBBZ2VuY3kcSG9tZSBIZWFsdGggQWdlbmN5IEV4ZW1wdGlvbh9Ib21lIE1lZGljYWwgRXF1aXBtZW50IFByb3ZpZGVyH0hvbWVtYWtlciBhbmQgQ29tcGFuaW9uIFNlcnZpY2UHSG9zcGljZQhIb3NwaXRhbDtJbnRlcm1lZGlhdGUgQ2FyZSBGYWNpbGl0eSBmb3IgdGhlIERldmVsb3BtZW50YWxseSBEaXNhYmxlZA5OdXJzZSBSZWdpc3RyeQxOdXJzaW5nIEhvbWUcT3JnYW4gQW5kIFRpc3N1ZSBQcm9jdXJlbWVudA5Qb3J0YWJsZSBYLVJheSlQcmVzY3JpYmVkIFBlZGlhdHJpYyBFeHRlbmRlZCBDYXJlIENlbnRlchVSZWhhYmlsaXRhdGlvbiBBZ2VuY3k5UmVzaWRlbnRpYWwgVHJlYXRtZW50IENlbnRlciBmb3IgQ2hpbGRyZW4gYW5kIEFkb2xlc2NlbnRzHlJlc2lkZW50aWFsIFRyZWF0bWVudCBGYWNpbGl0eRNSdXJhbCBIZWFsdGggQ2xpbmljFFNraWxsZWQgTnVyc2luZyBVbml0HFRyYW5zaXRpb25hbCBMaXZpbmcgRmFjaWxpdHkVJQwtLSBTZWxlY3QgLS0DQUxMBDEzICAEMTIgIAQ1MiAgAjEwBDE0ICAEMTEgIAQxNSAgBDI2ICAENDUgIAQxNiAgBDE3ICAEMTggIAQzNyAgBDc0ICAENzUgIAQ2NyAgBDIxICAEMTkgIAI2OAQ1NiAgBDM5ICAEMjIgIAQyMyAgBDI1ICAENDIgIAQzNSAgBDQxICAEMzAgIAQyOSAgBDQ3ICAENTcgIAQzMiAgBDMzICAENTQgIAQzNCAgFCsDJWdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAWZkAi8PEA8WCB8BZx8CBQRDb2RlHwMFBE5hbWUfBGdkEBVEA0FMTAdBbGFjaHVhBUJha2VyA0JheQhCcmFkZm9yZAdCcmV2YXJkB0Jyb3dhcmQHQ2FsaG91bglDaGFybG90dGUGQ2l0cnVzBENsYXkHQ29sbGllcghDb2x1bWJpYQZEZXNvdG8FRGl4aWUFRHV2YWwIRXNjYW1iaWEHRmxhZ2xlcghGcmFua2xpbgdHYWRzZGVuCUdpbGNocmlzdAZHbGFkZXMER3VsZghIYW1pbHRvbgZIYXJkZWUGSGVuZHJ5CEhlcm5hbmRvCUhpZ2hsYW5kcwxIaWxsc2Jvcm91Z2gGSG9sbWVzDEluZGlhbiBSaXZlcgdKYWNrc29uCUplZmZlcnNvbglMYWZheWV0dGUETGFrZQNMZWUETGVvbgRMZXZ5B0xpYmVydHkHTWFkaXNvbgdNYW5hdGVlBk1hcmlvbgZNYXJ0aW4KTWlhbWktRGFkZQZNb25yb2UGTmFzc2F1CE9rYWxvb3NhCk9rZWVjaG9iZWUGT3JhbmdlB09zY2VvbGEKUGFsbSBCZWFjaAVQYXNjbwhQaW5lbGxhcwRQb2xrBlB1dG5hbQpTYW50YSBSb3NhCFNhcmFzb3RhCFNlbWlub2xlCVN0LiBKb2hucwlTdC4gTHVjaWUGU3VtdGVyCFN1d2FubmVlBlRheWxvcgVVbmlvbgdWb2x1c2lhB1dha3VsbGEGV2FsdG9uCldhc2hpbmd0b24VRANBTEwBMQEyATMBNAE1ATYBNwE4ATkCMTACMTECMTICMTQCMTUCMTYCMTcCMTgCMTkCMjACMjECMjICMjMCMjQCMjUCMjYCMjcCMjgCMjkCMzACMzECMzICMzMCMzQCMzUCMzYCMzcCMzgCMzkCNDACNDECNDICNDMCMTMCNDQCNDUCNDYCNDcCNDgCNDkCNTACNTECNTICNTMCNTQCNTcCNTgCNTkCNTUCNTYCNjACNjECNjICNjMCNjQCNjUCNjYCNjcUKwNEZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dkZAI5DxAPFggfAWcfAgULRmllbGRPZmZpY2UfAwULRmllbGRPZmZpY2UfBGdkEBUMA0FMTAIwMQIwMgIwMwIwNAIwNQIwNgIwNwIwOAIwOQIxMAIxMRUMA0FMTAIwMQIwMgIwMwIwNAIwNQIwNgIwNwIwOAIwOQIxMAIxMRQrAwxnZ2dnZ2dnZ2dnZ2dkZBgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WCAUjY3RsMDAkbWFpbkNvbnRlbnRQbGFjZUhvbGRlciRjaGtDUkgFI2N0bDAwJG1haW5Db250ZW50UGxhY2VIb2xkZXIkQ291bnR5BShjdGwwMCRtYWluQ29udGVudFBsYWNlSG9sZGVyJEZpZWxkT2ZmaWNlBShjdGwwMCRtYWluQ29udGVudFBsYWNlSG9sZGVyJGNoa0Jha2VyQWN0BRljdGwwMCRGb290ZXIyMDE3JHJiWWVzT25lBRhjdGwwMCRGb290ZXIyMDE3JHJiTm9PbmUFGWN0bDAwJEZvb3RlcjIwMTckcmJZZXNUd28FGGN0bDAwJEZvb3RlcjIwMTckcmJOb1R3b//5BOMUOGhNbTYEbw3TWh8xq9W4',
}
const submitButtonId = "ctl00_mainContentPlaceHolder_SearchButton"; // form id aspnetForm

// there are more list for select option value, you may use these
const providerTypeList = {
    ALL: "ALL TYPES",
    13: "Abortion Clinic"
}



const pageSetup = async page => {
    await page.setUserAgent(getRandom()); // set random user agent
    await page.setDefaultNavigationTimeout(0);
    console.log(`Navigating to ${FORM_URL}...`);
    await page.goto(FORM_URL, {
        waitUntil: 'load',
        defaultViewport: null,
    }); // STEP 3: navigate to this page (it will open in browser)
};


const insertData = async page => {
    /**
     * page.type('#find_desc', 'Pizza Delivery');
     * then click the submit button
     * then waitForNavigation to reload a new page
     */
    await page.type(`#${formFieldsIds.ProviderType}`, formData.providerType); // facility type: all types value
    console.log('type added');

    await page.type(`#${formFieldsIds.Name}`, formData.name); // Name field
    /*const name = await page.$eval(`#${formFieldsIds.Name}`, elem => {
        console.log(elem.getAttribute('value'))
        return elem.value;
    })*/
    console.log('name added');

    await page.type(`#${formFieldsIds.City}`, formData.city); // Name field
    console.log('city added');
}

const submitForm = async page => {
    await page.hover(`#${submitButtonId}`)
    const onSubmit = await page.click(`#${submitButtonId}`)
    console.log('submit clicked');
    console.log('waiting for new url...');

    await page.waitForNavigation({
        waitUntil: 'networkidle0', // wait for first network
    });
}


export const scrapper = async browser => {
    let page = await browser.newPage(); // STEP 2: create a page instance
    await pageSetup(page);
    console.log(`page loaded`);
    await insertData(page); // form input field fill up

    /*await page.type(`#${formFieldsIds.County}`, formData.county); // facility type: all types value
    console.log('county added');
    await page.type(`#${formFieldsIds.AHCAFieldOffice}`, formData.ahcaFieldOffice); // Name field
    console.log('ahca field added');

    await page.type(`#${formFieldsIds.ProfitStatus}`, formData.profitStatus); // facility type: all types value
    console.log('profit status added');
    await page.type(`#${formFieldsIds.Emergency}`, formData.emergency); // Name field
    console.log('emergency added');

    await page.type(`#${formFieldsIds.Community}`, formData.community); // facility type: all types value
    console.log('community added');
    await page.type(`#${formFieldsIds.LicenseStatus}`, formData.licenseStatus); // Name field
    console.log('license status added');

    await page.type(`#${formFieldsIds.Street}`, formData.street); // facility type: all types value
    console.log('street added');

    await page.type(`#${formFieldsIds.Zipcode}`, formData.zipcode); // facility type: all types value
    console.log('zip added');
    await page.type(`#${formFieldsIds.AHCAFileNumber}`, formData.ahcaFileNumber); // Name field
    console.log('ahca file added');

    await page.type(`#${formFieldsIds.License}`, formData.license); // Name field
    console.log('license added');
    await page.type(`#${formFieldsIds.Affiliated}`, formData.affiliated); // facility type: all types value
    console.log('affiliated added');

    await page.type(`#${formFieldsIds.Actions}`, formData.actions); // Name field
    console.log('actions added');
    await page.type(`#${formFieldsIds.Facility}`, formData.facility); // Name field
    console.log('facility added');


    await page.type(`#${formFieldsIds.HiddenEventTarget}`, formData.eventTarget); // hidden field
    console.log('event target added');
    await page.type(`#${formFieldsIds.HiddenEventArgument}`, formData.eventArgument); // hidden field
    console.log('event argument added');
    await page.type(`#${formFieldsIds.HiddenLastFocus}`, formData.lastFocus); // hidden field
    console.log('last focus added');
    await page.type(`#${formFieldsIds.HiddenViewState}`, formData.viewState); // hidden field
    console.log('viewState added');

    await page.type(`#${formFieldsIds.HiddenViewStateGenerator}`, formData.viewStateGenerator); // hidden field
    console.log('viewStateGenerator added');
    await page.type(`#${formFieldsIds.HiddenEventValidation}`, formData.eventValidation); // hidden field
    console.log('eventValidation added');*/

    await submitForm(page);

    // console.log('get new url... ', page.url());
    // return page.url();

    page = await browser.newPage();
    await setUserAgent(page);
    await page.setDefaultNavigationTimeout(0);
    console.log(`Navigating to new ${newUrl}...`);
    await page.goto(newUrl, {
        waitUntil: 'load',
        timeout: 0
    }); // STEP 3: navigate to this page (it will open in browser)
    // await page.waitForSelector('#ctl00_mainContentPlaceHolder_dgFacilities'); // last entry of form row
    console.log(`page loaded`);

    /**
     * Name, Type, Street Address, City, State, Zip, Phone, Licensed beds
     */
    const data = await page.$$eval("#ctl00_mainContentPlaceHolder_dgFacilities > tbody > tr ", allItems => {
        allItems = allItems.slice(1); // table header no need
        let results = [];
        allItems.forEach((elem, index) => {
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
    console.log('element array:', data)
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

    return data;
}
