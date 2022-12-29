Feature: The user wants to check the images in the Featured Items Carousel

  In order to do have a great user experience, the user should be able to 
  use freely the Featured Items Carousel from the Product Store Home page.

  Background:
    Given the user navigates the Product Store Home page

  Scenario: The carousel indicators on the Featured Items Carousel are working properly
    When the user clicks on several indicators on the Carousel
    Then indicators zero and two should be visible

  Scenario: The Featured Items Carousel returns the first image after three clicks on the left arrow
    When the user clicks three times on the left arrow of the Carousel
    Then the image on the Carousel should be the same as the first one

  Scenario: The Featured Items Carousel returns the third image after two clicks on the right arrow
    When the user clicks two times on the right arrow of the Carousel
    Then the image on the Carousel should be the third one on the Carousel

  Scenario: The user could download the three images in the Featured Items Carousel
    When the user moves the carousel to display the three images
    Then the images in the Carousel should be download to the local drive


