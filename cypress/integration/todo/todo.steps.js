import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the TODO homepage', () => {
    cy.visit('/todo');
});

When('I submit a new TODO {string}', text => {
    cy.get('.new-todo').type(text + '{enter}');
});
Then('the count of pending items is {int}', pendingItems => {
    cy.get('.todo-count > strong').invoke('text').then(parseInt)
        .should('eq', pendingItems);
});