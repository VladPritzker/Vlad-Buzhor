/// <reference types="Cypress" />
import {
    Given,
    When,
    Then,
    Before
} from '@badeball/cypress-cucumber-preprocessor';
import {
    Examples,
    Scenario
} from '@cucumber/messages';

let stub;
Before(() => {
    cy.log("Executing before step");
    stub = cy.stub();
});

//Login first

Given('I navigate to automation exercise website', () => {
    cy.visit('https://automationexercise.com/');
})
When('I enter login credentials {word} {word}', (email, password) => {
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
})
Then('I should be logged in {word}', (confirm) => {
    cy.contains(confirm).should('be.visible');
})

// Validating alert
Given('user login to the webPortal', () => {
    cy.visit('http://www.webdriveruniversity.com/Login-Portal/index.html');
})
When('user enter {word} {word}', (email, password) => {
    cy.get('#text').type(email)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.on('window:alert', stub);
})
Then('we validating that appear alert {word} {word}', (message, message2) => {
    const expectedMessage = message + " " + message2
    cy.log(expectedMessage)
    cy.log(stub.getCall(0));
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
})




// import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
// Given('I navigate to automation exercise website', () => {
// cy.visit('https://automationexercise.com/');
// cy.get('a[href="/login"]').click();
// cy.contains('Login to your account').should('be.visible');
// })
// When('I enter login name {word}', (userName) => {
// cy.get('input[data-qa="login-email"]').type(userName);
// })
// And('I enter password {word}', (userName)=>{
//     cy.get('input[data-qa="login-password"]').type(userName);
//     cy.get('button[data-qa="login-button"]').click();
// }) 
// Then('I should be logged in', () => {

// cy.contains(' Logged in as ').should('be.visible');
// })