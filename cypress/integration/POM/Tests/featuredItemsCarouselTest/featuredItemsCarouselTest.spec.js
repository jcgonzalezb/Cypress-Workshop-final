import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage/HomePage";

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    cy.visit('/');
});

// Scenario 1 : The carousel indicators on the Featured Items Carousel are working properly
When('the user clicks on several indicators on the Carousel', () => {
    HomePage.clickCarouselIndicatorOne();
    HomePage.clickCarouselIndicatorTwo();
    HomePage.clickCarouselIndicatorZero();
    HomePage.clickCarouselIndicatorOne();
});

Then('indicators zero and two should be visible', () => {
    HomePage.visibleCarouselIndicatorZero();
    HomePage.visibleCarouselIndicatorTwo();
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

// Scenario 3 : The Featured Items Carousel returns the third image after two clicks on the right arrow
When('the user clicks two times on the right arrow of the Carousel', () => {
    HomePage.clickRightArrowCarousel();
    HomePage.clickRightArrowCarousel();
});

Then('the image on the Carousel should be the third one on the Carousel', () => {
    HomePage.visibleCarouselIndicatorZero();
    HomePage.visibleCarouselIndicatorOne();
});

// Scenario 4 : The user could download the second image of the Featured Items Carousel
When('the user moves the carousel to display the second image', () => {
    HomePage.clickCarouselIndicatorOne();
});

Then('the image on the Carousel should be download to the local drive', () => {
    HomePage.downloadSecondImage();
    });
