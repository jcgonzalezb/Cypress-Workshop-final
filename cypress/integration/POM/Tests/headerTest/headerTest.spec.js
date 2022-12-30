import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../Pages/HomePage/HomePage";
import cartPage from "../../Pages/CartPage/CartPage";


// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    homePage.waitForHomePageSuccessfulResponse();
});

// Scenario 1 : The Home header link is working properly on the Product Store Home page
When('the user navegates again to the Home page', () => {
    homePage.clickHomeHeader();
});

Then('the Categories title should be display', () => {
    homePage.visibleCategoriesTitle();
});

// Scenario 2 : The Contact header link is working properly on the Product Store Home page
When('the user navegates to the Contact modal', () => {
    homePage.clickContactHeader();
});

Then('a modal with contact information should be display', () => {
    homePage.visibleContactModal();
});

// Scenario 3 : The About Us header link is working properly on the Product Store Home page
When('the user navegates to the About Us modal', () => {
    homePage.clickAboutUsHeader();
});

Then('a modal with a video about BlazeMeter Demo Store should be display', () => {
    homePage.visibleAboutUsModal();
    homePage.visibleAboutUsvideo();
});

// Scenario 4 : The Cart header link is working properly on the Product Store Home page
When('the user navegates to the Cart page', () => {
    homePage.clickCartHeader();
});

Then('the Products title should be display on the Cart page', () => {
    cartPage.visibleProductsTitle();
    cartPage.textProductsTitle();
});

// Scenario 5 : The Log In header link is working properly on the Product Store Home page
When('the user navegates to the Log in modal', () => {
    homePage.clickLogInHeader();
});

Then('a modal with Log in, Username and Password titles should be display', () => {
    homePage.visibleLogInModalLabel();
    homePage.textLogInModalLabel();
    homePage.visibleUsernameTitleLogIn();
    homePage.textUsernameTitleLogIn();
    homePage.visiblePasswordTitleLogIn();
    homePage.textPasswordTitleLogIn();
});

// Scenario 6 : The Sign up header link is working properly on the Product Store Home page
When('the user navegates to the Sign up modal', () => {
    homePage.clickSignUpHeader();
});

Then('a modal with Sign up, Username and Password titles should be display', () => {
    homePage.visibleSignInModalLabel();
    homePage.textSignInModalLabel();
    homePage.visibleUsernameTitleSignUp();
    homePage.textUsernameTitleSignUp();
    homePage.visiblePasswordTitleSignUp();
    homePage.textPasswordTitleSignUp();
});
