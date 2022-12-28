Feature: The user wants to check the buying experience in the Product Store site

  In order to do have a great user experience, the user should be able to 
  navegate freely though categories selection and product selection, add products
  to the cart, buy the products located in the cart and remove products from the cart.

  Scenario: The phones category shows all the phones in the store
    Given the user navigates the Product Store Home page
    When the user selects the Phones category
    Then all the phones in the store should be visible

  Scenario: The laptops category shows all the laptops in the store
    Given the user navigates the Product Store Home page
    When the user selects the Laptops category
    Then all the laptops in the store should be visible
