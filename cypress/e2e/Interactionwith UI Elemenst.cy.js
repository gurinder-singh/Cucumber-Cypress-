///<refrence types="Cypress"/>


describe('UI Elements ',function(){

  it('Interaction with Radiobutton and Input Text',function(){

      //To Enlarge the browser 
      cy.visit('https://demo.guru99.com/test/newtours/index.php')


      //To assert if the above url contains some text
      cy.url().should('include','newtours')                                               //This gives the current page url

      //This is to verify if the text box of username is visible and enabled
      cy.get('input[name=userName]')
      .should('be.visible')
      .should('be.enabled')
      .type('mercury')


      //This is to verify if the text box of password is visible and enabled
      cy.get('input[name=password]')
      .should('be.visible')
      .should('be.enabled')
      .type('mercury')


      //This is to Click on Login 
      cy.get('input[name=submit]')
      .should('be.visible').click()


      //Title verification
     // cy.title().should('eq','Find a Flight: Mercury Tours:')

      //To check with Radio button of roundtrip is visible and is checked
      cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')


      //To check with Radio button of one way is visible and is unchecked(Negative Testing)
      cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()



      //This is to click on Continue ,check if the button is visisble andthen click
      cy.get('[name=findFlights]').should('be.visible').click()
  })
})