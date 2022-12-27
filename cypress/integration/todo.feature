Feature: Manage TODO tasks
    As a user
    I want to add, remove and check my TODO tasks
    So that I always know what are my pending tasks

    Background:
        Given I visit the TODO homepage

    @bar
    Scenario: Add a new TODO
        When I submit a new TODO "My Task #1"
        And I submit a new TODO "My Task #2"
        Then the count of pending items is 4

    Scenario: Check a item
        Given I submitted a new TODO "My Task #3"
        When I check the item #2
        Then the count of pending items is 2