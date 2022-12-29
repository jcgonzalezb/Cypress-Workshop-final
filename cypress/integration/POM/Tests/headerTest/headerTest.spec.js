import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";
import CartPage from "../../Pages/CartPage/CartPage";


// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    HomePage.waitForHomePageSuccessfulResponse();
});

// Scenario 1 : The Home header link is working properly on the Product Store Home page
When('the user navegates again to the Home page', () => {
    HomePage.clickHomeHeader();
});

Then('the Categories title should be display', () => {
    HomePage.visibleCategoriesTitle();
});

// Scenario 2 : The Contact header link is working properly on the Product Store Home page
When('the user navegates to the Contact modal', () => {
    HomePage.clickContactHeader();
});

Then('a modal with contact information should be display', () => {
    HomePage.visibleContactModal();
});

// Scenario 3 : The About Us header link is working properly on the Product Store Home page
When('the user navegates to the About Us modal', () => {
    HomePage.clickAboutUsHeader();
});

Then('a modal with a video about BlazeMeter Demo Store should be display', () => {
    HomePage.visibleAboutUsModal();
    HomePage.visibleAboutUsvideo();
});

// Scenario 4 : The Cart header link is working properly on the Product Store Home page
When('the user navegates to the Cart page', () => {
    HomePage.clickCartHeader();
});

Then('the Products title should be display on the Cart page', () => {
    CartPage.visibleProductsTitle();
    CartPage.textProductsTitle();
});

// Scenario 5 : The Log In header link is working properly on the Product Store Home page
When('the user navegates to the Log in modal', () => {
    HomePage.clickLogInHeader();
});

Then('a modal with Log in, Username and Password titles should be display', () => {
    HomePage.visibleLogInModalLabel();
    HomePage.textLogInModalLabel();
    HomePage.visibleUsernameTitleLogIn();
    HomePage.textUsernameTitleLogIn();
    HomePage.visiblePasswordTitleLogIn();
    HomePage.textPasswordTitleLogIn();
});

// Scenario 6 : The Sign up header link is working properly on the Product Store Home page
When('the user navegates to the Sign up modal', () => {
    HomePage.clickSignUpHeader();
});

Then('a modal with Sign up, Username and Password titles should be display', () => {
    HomePage.visibleSignInModalLabel();
    HomePage.textSignInModalLabel();
    HomePage.visibleUsernameTitleSignUp();
    HomePage.textUsernameTitleSignUp();
    HomePage.visiblePasswordTitleSignUp();
    HomePage.textPasswordTitleSignUp();
});
