import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../Pages/HomePage/HomePage";

// Background: The user navigates the Product Store Home page
Given('the user navigates the Product Store Home page', () => {
    homePage.waitForHomePageSuccessfulResponse();
});

// Scenario 1 : The carousel indicators on the Featured Items Carousel are working properly
When('the user clicks on several indicators on the Carousel', () => {
    homePage.clickCarouselIndicatorOne();
    homePage.clickCarouselIndicatorTwo();
    homePage.clickCarouselIndicatorZero();
    homePage.clickCarouselIndicatorOne();
});

Then('indicators zero and two should be visible', () => {
    homePage.visibleCarouselIndicatorZero();
    homePage.visibleCarouselIndicatorTwo();
});


// Scenario 2 : The Featured Items Carousel returns the first image after three clicks on the left arrow
When('the user clicks three times on the left arrow of the Carousel', () => {
    homePage.clickLeftArrowCarousel();
    homePage.clickLeftArrowCarousel();
    homePage.clickLeftArrowCarousel();

});

Then('the image on the Carousel should be the same as the first one', () => {
    homePage.visibleCarouselIndicatorOne();
    homePage.visibleCarouselIndicatorTwo();
});

// Scenario 3 : The Featured Items Carousel returns the third image after two clicks on the right arrow
When('the user clicks two times on the right arrow of the Carousel', () => {
    homePage.clickRightArrowCarousel();
    homePage.clickRightArrowCarousel();
});

Then('the image on the Carousel should be the third one on the Carousel', () => {
    homePage.visibleCarouselIndicatorZero();
    homePage.visibleCarouselIndicatorOne();
});

// Scenario 4 : The user could download the three images in the Featured Items Carousel
When('the user moves the carousel to display the three images', () => {
    homePage.clickCarouselIndicatorOne();
    homePage.clickCarouselIndicatorTwo();
    homePage.clickCarouselIndicatorZero();
});

Then('the images in the Carousel should be download to the local drive', () => {
    homePage.downloadFirstImageCarousel();
    homePage.clickCarouselIndicatorOne();
    homePage.downloadSecondImageCarousel();
    homePage.clickCarouselIndicatorTwo();
    homePage.downloadThirdImageCarousel();
});
