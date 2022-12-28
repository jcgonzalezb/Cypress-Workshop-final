import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

// Scenario 1 : The carousel indicators on the Featured Items Carousel are working properly
When('the user clicks on two indicators on the Carousel', () => {
    HomePage.clickCarouselIndicatorOne();
    HomePage.clickCarouselIndicatorTwo();
});

Then('indicators zero and one should be visible', () => {
    HomePage.visibleCarouselIndicatorZero();
    HomePage.visibleCarouselIndicatorOne();
});


// Scenario 2 : The Featured Items Carousel returns the first image after three clicks on the left arrow
When('the user clicks three times on the left arrow of the Carousel', () => {
    HomePage.clickLeftArrowCarousel();
    HomePage.clickLeftArrowCarousel();
    HomePage.clickLeftArrowCarousel();

});

Then('the image on the Carousel should be the same as the first one', () => {
    HomePage.visibleCarouselIndicatorOne();
    HomePage.visibleCarouselIndicatorTwo();
});

// Scenario 3 : The Featured Items Carousel returns the first image after three clicks on the right arrow
When('the user clicks three times on the right arrow of the Carousel', () => {
    HomePage.clickRightArrowCarousel();
    HomePage.clickRightArrowCarousel();
    HomePage.clickRightArrowCarousel();
});

Then('the image on the Carousel should be the same as the first one', () => {
    HomePage.visibleCarouselIndicatorOne();
    HomePage.visibleCarouselIndicatorTwo();
});

