Feature: WevdriverUniversity Login Page

    Scenario: Login using valid credentioals
        Given I access to the WebDriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with following massege validation succeeded