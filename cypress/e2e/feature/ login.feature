Feature: Login
    # Scenario: Login user with correct email and password
    # Given I navigate to automation exercise website
    # When I enter login credentials example1@test.com foobar
    # Then I should be logged in Logged

    # Scenario: Login user with not correct email and password
    # Given I navigate to automation exercise website
    # When I enter login credentials example1@test.com1 foobar1
    # Then I should be logged in incorrect

    Scenario Outline: Test Login via Website
        Given I navigate to automation exercise website
        When I enter login credentials <username> <password>
        Then I should be logged in <result>

        Examples:
            | username           | password | result    |
            | example1@test.com  | foobar   | Logged    |
            | example1@test.com1 | foobar1  | incorrect |


