import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

// Scenario 1 : The Featured Items Carousel is working properly on the Product Store Home page
When('the user clicks on the left arrow of the Carousel', () => {
    HomePage.clickLeftArrowCarousel();
});

Then('the image on the Carousel should change', () => {
    HomePage.visibleFeaturedItemCarousel();
});


// Scenario 2 : The Featured Items Carousel returns the first image after two clicks on the left arrow
When('the user clicks twice on the left arrow of the Carousel', () => {
    HomePage.clickLeftArrowCarousel();
    HomePage.clickLeftArrowCarousel();
});

Then('the image on the Carousel should be the same as the first one', () => {
    HomePage.visibleFeaturedItemCarousel();
});

// Scenario 3 : The Featured Items Carousel returns the first image after two clicks on the left arrow
When('the user clicks twice on the right arrow of the Carousel', () => {
    HomePage.clickRightArrowCarousel();
    HomePage.clickRightArrowCarousel();
});

Then('the image on the Carousel should be the same as the first one', () => {
    HomePage.visibleFeaturedItemCarousel();
});

