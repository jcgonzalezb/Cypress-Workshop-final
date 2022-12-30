import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";
import Iphone632gb from "../../Pages/Phones/Iphone632gb";
import SamsungGalaxyS6 from "../../Pages/Phones/SamsungGalaxyS6";
import MacBookAir from "../../Pages/Laptops/MacBookAir";
import AppleMonitor24 from "../../Pages/Monitors/AppleMonitor24";
import CartPage from "../../Pages/CartPage/CartPage";

let buyerInfo = ''

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    HomePage.waitForHomePageSuccessfulResponse();
    cy.fixture('buyerInfo.json').then((data) => {
        buyerInfo = data;
    });
});


// Scenario 1 : The phones category shows all the phones in the store
When('the user selects the Phones category', () => {
    HomePage.clickPhonesCategory();
});

Then('all the phones in the store should be visible', () => {
    HomePage.visiblePhoneSamsungGalaxyS6();
    HomePage.textPhoneSamsungGalaxyS6();
    HomePage.visiblePhoneNokiaLumia1520();
    HomePage.textPhoneNokiaLumia1520();
    HomePage.visiblePhoneNexus6();
    HomePage.textPhoneNexus6();
    HomePage.visiblePhoneSamsungGalaxyS7();
    HomePage.textPhoneSamsungGalaxyS7();
    HomePage.visiblePhoneIphone632gb();
    HomePage.textPhoneIphone632gb();
    HomePage.visiblePhoneSonyXperiaZ5();
    HomePage.textPhoneSonyXperiaZ5();
    HomePage.visiblePhoneHTCOneM9();
    HomePage.textPhoneHTCOneM9();
});


// Scenario 2 : The laptops category shows all the laptops in the store
When('the user selects the Laptops category', () => {
    HomePage.clickLaptopsCategory();
});

Then('all the laptops in the store should be visible', () => {
    HomePage.visibleLaptopSonyVaioI5();
    HomePage.textLaptopSonyVaioI5();
    HomePage.visibleLaptopSonyVaioI7();
    HomePage.textLaptopSonyVaioI7();
    HomePage.visibleLaptopMacBookAir();
    HomePage.textLaptopMacBookAir();
    HomePage.visibleLaptopDellI78gb();
    HomePage.textLaptopDellI78gb();
    HomePage.visibleLaptop2017Dell156Inch();
    HomePage.textLaptop2017Dell156Inch();
    HomePage.visibleLaptopMacBookPro();
    HomePage.textLaptopMacBookPro();
});


// Scenario 3 : The monitors category shows all the monitors in the store
When('the user selects the Monitors category', () => {
    HomePage.clickMonitorsCategory();
});

Then('all the monitors in the store should be visible', () => {
    HomePage.visibleMonitorAppleMonitor24();
    HomePage.textMonitorAppleMonitor24();
    HomePage.visibleMonitorASUSFullHD();
    HomePage.textMonitorASUSFullHD();
});

// Scenario 4 : The user selects different products and makes a purchase
When('the user selects different products from the store', () => {
    HomePage.clickPhonesCategory();
    HomePage.visiblePhoneSamsungGalaxyS6();
    HomePage.textPhoneSamsungGalaxyS6();
    HomePage.clickPhoneSamsungGalaxyS6Pic();
    SamsungGalaxyS6.visibleProductName();
    SamsungGalaxyS6.textProductName();
    SamsungGalaxyS6.visibleAddToCartButton();
    SamsungGalaxyS6.clickAddToCartButton();
    SamsungGalaxyS6.clickHomeHeader();
    HomePage.clickPhonesCategory();
    HomePage.visiblePhoneIphone632gb();
    HomePage.textPhoneIphone632gb();
    HomePage.clickPhoneIphone632gbPic();
    Iphone632gb.visibleProductName();
    Iphone632gb.textProductName();
    Iphone632gb.visibleAddToCartButton();
    Iphone632gb.clickAddToCartButton();
    Iphone632gb.clickHomeHeader();
    HomePage.clickLaptopsCategory();
    HomePage.visibleLaptopMacBookAir();
    HomePage.textLaptopMacBookAir();
    HomePage.clickLaptopMacBookAirPic();
    MacBookAir.visibleProductName();
    MacBookAir.textProductName();
    MacBookAir.visibleAddToCartButton();
    MacBookAir.clickAddToCartButton();
    MacBookAir.clickHomeHeader();
    HomePage.clickMonitorsCategory();
    HomePage.visibleMonitorAppleMonitor24();
    HomePage.textMonitorAppleMonitor24();
    HomePage.clickMonitorAppleMonitor24Pic();
    AppleMonitor24.visibleProductName();
    AppleMonitor24.textProductName();
    AppleMonitor24.visibleAddToCartButton();
    AppleMonitor24.clickAddToCartButton();
    AppleMonitor24.clickHomeHeader();
});

And('removes one product from the cart', () => {
    HomePage.clickCartHeader();
    CartPage.clickDeleteFirstItem();
});

Then('purchases the products from the store', () => {
    CartPage.clickPlaceOrderButton();
    CartPage.orderModalHeaderDisplay();
    CartPage.orderModalLabelDisplay();
    //CartPage.visibleInputName();
    //CartPage.cleanInputName();
    //CartPage.clickParentModal();
    CartPage.purchaseInputName(buyerInfo.newName);
    //CartPage.visibleInputCountry();
    CartPage.purchaseInputCountry(buyerInfo.newCountry);
    //CartPage.clickInputCountry();
    CartPage.purchaseInputCity(buyerInfo.newCity);
    CartPage.cleanInputCard();
    CartPage.purchaseInputCard(buyerInfo.newCard);
    CartPage.cleanInputMonth();
    CartPage.purchaseInputMonth(buyerInfo.newMonth);
    CartPage.cleanInputYear();
    CartPage.purchaseInputYear(buyerInfo.newYear);
});
