Feature: End to End Ecommerce validation

    regression for end to end test

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page 
    When I add items to Cart
    Then validate the total prices
    Then Select the country, submit and verify Thank you page is display


