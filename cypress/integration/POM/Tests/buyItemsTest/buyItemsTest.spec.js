import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../Pages/HomePage/HomePage";
import iphone632gb from "../../Pages/Phones/Iphone632gb";
import samsungGalaxyS6 from "../../Pages/Phones/SamsungGalaxyS6";
import macBookAir from "../../Pages/Laptops/MacBookAir";
import appleMonitor24 from "../../Pages/Monitors/AppleMonitor24";
import cartPage from "../../Pages/CartPage/CartPage";

let buyerInfo = ''

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    homePage.waitForHomePageSuccessfulResponse();
    cy.fixture('buyerInfo.json').then((data) => {
        buyerInfo = data;
    });
});


// Scenario 1 : The phones category shows all the phones in the store
When('the user selects the Phones category', () => {
    homePage.clickPhonesCategory();
});

Then('all the phones in the store should be visible', () => {
    homePage.visiblePhoneSamsungGalaxyS6();
    homePage.textPhoneSamsungGalaxyS6();
    homePage.visiblePhoneNokiaLumia1520();
    homePage.textPhoneNokiaLumia1520();
    homePage.visiblePhoneNexus6();
    homePage.textPhoneNexus6();
    homePage.visiblePhoneSamsungGalaxyS7();
    homePage.textPhoneSamsungGalaxyS7();
    homePage.visiblePhoneIphone632gb();
    homePage.textPhoneIphone632gb();
    homePage.visiblePhoneSonyXperiaZ5();
    homePage.textPhoneSonyXperiaZ5();
    homePage.visiblePhoneHTCOneM9();
    homePage.textPhoneHTCOneM9();
});


// Scenario 2 : The laptops category shows all the laptops in the store
When('the user selects the Laptops category', () => {
    homePage.clickLaptopsCategory();
});

Then('all the laptops in the store should be visible', () => {
    homePage.visibleLaptopSonyVaioI5();
    homePage.textLaptopSonyVaioI5();
    homePage.visibleLaptopSonyVaioI7();
    homePage.textLaptopSonyVaioI7();
    homePage.visibleLaptopMacBookAir();
    homePage.textLaptopMacBookAir();
    homePage.visibleLaptopDellI78gb();
    homePage.textLaptopDellI78gb();
    homePage.visibleLaptop2017Dell156Inch();
    homePage.textLaptop2017Dell156Inch();
    homePage.visibleLaptopMacBookPro();
    homePage.textLaptopMacBookPro();
});


// Scenario 3 : The monitors category shows all the monitors in the store
When('the user selects the Monitors category', () => {
    homePage.clickMonitorsCategory();
});

Then('all the monitors in the store should be visible', () => {
    homePage.visibleMonitorAppleMonitor24();
    homePage.textMonitorAppleMonitor24();
    homePage.visibleMonitorASUSFullHD();
    homePage.textMonitorASUSFullHD();
});

// Scenario 4 : The user selects different products and makes a purchase
When('the user selects different products from the store', () => {
    homePage.clickPhonesCategory();
    homePage.visiblePhoneSamsungGalaxyS6();
    homePage.textPhoneSamsungGalaxyS6();
    homePage.clickPhoneSamsungGalaxyS6Pic();
    samsungGalaxyS6.visibleProductName();
    samsungGalaxyS6.textProductName();
    samsungGalaxyS6.visibleAddToCartButton();
    samsungGalaxyS6.clickAddToCartButton();
    samsungGalaxyS6.clickHomeHeader();
    homePage.clickPhonesCategory();
    homePage.visiblePhoneIphone632gb();
    homePage.textPhoneIphone632gb();
    homePage.clickPhoneIphone632gbPic();
    iphone632gb.visibleProductName();
    iphone632gb.textProductName();
    iphone632gb.visibleAddToCartButton();
    iphone632gb.clickAddToCartButton();
    iphone632gb.clickHomeHeader();
    homePage.clickLaptopsCategory();
    homePage.visibleLaptopMacBookAir();
    homePage.textLaptopMacBookAir();
    homePage.clickLaptopMacBookAirPic();
    macBookAir.visibleProductName();
    macBookAir.textProductName();
    macBookAir.visibleAddToCartButton();
    macBookAir.clickAddToCartButton();
    macBookAir.clickHomeHeader();
    homePage.clickMonitorsCategory();
    homePage.visibleMonitorAppleMonitor24();
    homePage.textMonitorAppleMonitor24();
    homePage.clickMonitorAppleMonitor24Pic();
    appleMonitor24.visibleProductName();
    appleMonitor24.textProductName();
    appleMonitor24.visibleAddToCartButton();
    appleMonitor24.clickAddToCartButton();
    appleMonitor24.clickHomeHeader();
});

And('removes one product from the cart', () => {
    homePage.clickCartHeader();
    cartPage.clickDeleteFirstItem();
    cy.reload();
    cartPage.visibleCartFirstItem();
    cartPage.visibleCartSecondItem();
    cartPage.visibleCartThirdItem();
    cartPage.notExistCartLastItem();
});

Then('purchases the products from the store', () => {
    cartPage.visiblePlaceOrderButton();
    cartPage.clickPlaceOrderButton();
    cartPage.purchaseInputName(buyerInfo.newName);
    cartPage.purchaseInputCountry(buyerInfo.newCountry);
    cartPage.purchaseInputCity(buyerInfo.newCity);
    cartPage.purchaseInputCard(buyerInfo.newCard);
    cartPage.purchaseInputMonth(buyerInfo.newMonth);
    cartPage.purchaseInputYear(buyerInfo.newYear);
});
