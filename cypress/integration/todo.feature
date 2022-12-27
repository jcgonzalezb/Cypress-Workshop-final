Feature: Manage TODO tasks
    As a user
    I want to add, remove and check my TODO tasks
    So that I always know what are my pending tasks
    Scenario: Add a new TODO
        Given I visit the TODO homepage
        When I submit a new TODO "My Task #1"
        And I submit a new TODO "My Task #2"
        Then the count of pending items is 4