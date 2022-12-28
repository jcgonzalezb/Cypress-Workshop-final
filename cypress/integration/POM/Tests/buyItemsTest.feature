Feature: The user wants to check the buying experience in the Product Store site

  In order to do have a great user experience, the user should be able to 
  navegate freely though categories selection and product selection, add products
  to the cart, buy the products located in the cart and remove products from the cart.

  Background:
    Given the user navigates the Product Store Home page

  Scenario: The phones category shows all the phones in the store
    When the user selects the Phones category
    Then all the phones in the store should be visible

  Scenario: The laptops category shows all the laptops in the store
    When the user selects the Laptops category
    Then all the laptops in the store should be visible

  Scenario: The monitors category shows all the monitors in the store
    When the user selects the Monitors category
    Then all the monitors in the store should be visible

  Scenario: The user selects different products and makes a purchase
    When the user selects different products from the store
    And removes one product from the cart
    Then purchases the products from the store
