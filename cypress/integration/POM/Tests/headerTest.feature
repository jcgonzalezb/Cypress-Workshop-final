Feature: The user wants to check the navigation of all the headers links in the Home page

  In order to do have a great user experience, the user should be
  able to use navigate freely to all the header links in the Home page

  Background:
    Given the user navigates the Product Store Home page

  Scenario: The Home header link is working properly on the Product Store Home page
    When the user navegates again to the Home page
    Then the Categories title should be display

  Scenario: The Contact header link is working properly on the Product Store Home page
    When the user navegates to the Contact modal
    Then a modal with contact information should be display

  Scenario: The About Us header link is working properly on the Product Store Home page
    When the user navegates to the About Us modal
    Then a modal with a video about BlazeMeter Demo Store should be display

  Scenario: The Cart header link is working properly on the Product Store Home page
    When the user navegates to the Cart page
    Then the Products title should be display on the Cart page
