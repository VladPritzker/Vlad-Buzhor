import {Before, Given, When, And, Then } from "cypress-cucumber-preprocessor"
Given ('I access to the WebDriverUniversity Login Portal page', ()=>{
    cy.visit('http://www.webdriveruniversity.com/Login-Portal/index.html')
})
When ("I enter a username {word}", (userName)=>{
    cy.get('#text').type(userName)
})