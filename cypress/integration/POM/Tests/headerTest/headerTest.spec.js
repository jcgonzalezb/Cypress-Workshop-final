import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

// Scenario 1 : The Home header link is working properly on the Product Store Home page
When('the user clicks on Home header link', () => {
    HomePage.clickHomeHeader();
});

Then('the Categories title should be display', () => {
    HomePage.visiblecategoriesTitle();
});

