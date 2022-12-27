import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";

Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

When('the user clicks on the left arrow of the Carousel', () => {
    HomePage.clickLeftArrowCarousel();
});

Then('the image on the Carousel should change', () => {
    HomePage.visibleFeaturedItemCarousel();
});