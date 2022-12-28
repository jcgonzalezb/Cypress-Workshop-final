import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";

// Scenario 1 : The phones category shows all the phones in the store
Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

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
Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

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
});

