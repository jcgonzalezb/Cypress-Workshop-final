Feature: Manage the Featured Items Carousel

  In order to do have a great user experience,
  the user should be able to use freely the 
  Featured from the Product Store Home page.

  Background:
    Given the user navigates the Product Store Home page

  Scenario: The Featured Items Carousel is working properly on the Product Store Home page
    When the user clicks on the left arrow of the Carousel
    Then the image on the Carousel should change

  Scenario: The Featured Items Carousel returns the first image after two clicks on the left arrow
    When the user clicks twice on the left arrow of the Carousel
    Then the image on the Carousel should be the same as the first one

  Scenario: The Featured Items Carousel returns the first image after two clicks on the right arrow
    When the user clicks twice on the right arrow of the Carousel
    Then the image on the Carousel should be the same as the first one

  


