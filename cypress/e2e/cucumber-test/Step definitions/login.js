import{Given,when,Then} from 'cypress-cucumber-preprocessor/steps'

Given('I Opened Login page',()=>{
    cy.visit('http://zero.webappsecurity.com/login.html')

    })
    when ('I submit Login',()=>{
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('input[name="submit"]').click()      
        })
    Then('I Should see home page',()=>{

        cy.get('#account_summary_tab').should('be.visible')
    })