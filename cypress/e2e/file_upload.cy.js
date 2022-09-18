describe('File Upload Example', () => {
  it('Simple  File Uplaod ', () => {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    const filepath = 'view.jpg'
        cy.get('#fileUpload').attachFile(filepath)
        // cy.get('#file-submit').click()
        // cy.get('#uploaded-files').contains('evening.png')
  })
  it.skip('passes', () => {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
  })
})