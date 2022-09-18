describe('This Test to Create a  new Product Category ', () => {
  it('Creating a new product Category and Rearranging them and Deleting the Category', () => {
    cy.visit("https://playground-admin.apexcommerce.com/")

    cy.get(':nth-child(1) > .input-state').type("gurinder@able.do");
    cy.log('User name is Entered')
    cy.get(':nth-child(2) > .input-state').type("password");
    cy.log('Password is Entered ')
    cy.get('#login-form > .flex').click();
    cy.wait(5000);
    cy.get('.input-state-primary').type("100100");
    cy.get('#otp-form > .flex').click();
    cy.wait(10000);
   // cy.get('.sticky top-0 z-40 flex flex-col min-w-[72px] h-screen bg-blue-100 border-r border-grey-400').trigger('mouseover')
    cy.get('a[href*="/products/categorie"]').click({force:true});
    cy.wait(5000);
    //click on plus icon
    cy.get('.py-4 > .border').click()
    //Enter a New Category Name
    cy.get('.input-state').type('Television Set')
    //Click on Checkbox for to mark it visible on store 
    cy.get('#storeVisibility').click()
    // Click on save button 
    cy.get('.btn-primary').click()
    cy.wait(5000);
    // Select the recenly added category 
    cy.get(':nth-child(4) > .relative').click()
    cy.wait(5000);
    //Click on Plus icon to add sub categoy 
    cy.get(':nth-child(2) > .flex > .border').click()
    
    //Enter a New Sub  Category Name
    cy.get('.input-state').type('Samsung OLED TV')
    //Click on Checkbox for to mark it visible on store 
    cy.get('#storeVisibility').click()
    // Click on save button 
    cy.get('.btn-primary').click()
    cy.wait(5000);

      // Entering the 2nd Sub Product category 
     //Click on Plus icon to add sub categoy 
     cy.get(':nth-child(2) > .flex > .border').click()
    
     //Enter a New Sub  Category Name
     cy.get('.input-state').type('LG OLED TV')
     //Click on Checkbox for to mark it visible on store 
     cy.get('#storeVisibility').click()
     // Click on save button 
     cy.get('.btn-primary').click()
     cy.wait(5000);

     // Click on Re Arrange Button 
     cy.get('.btn').click()

     //Click on first Checkbox of the Sub Category 
     cy.get(':nth-child(1) > .px-2 > .relative > .items-center > .cursor-pointer').click()

     //Click on 2nd Check Box of the Sub category 
     cy.get(':nth-child(2) > .px-2 > .relative > .items-center > .cursor-pointer').click()

     // This is to click on MOve 
     cy.get('.relative > .btn').click()

     cy.wait(5000);

     //Click on Elctronic Gadget Checkbox
     cy.get(':nth-child(3) > .justify-between > input').click()

     // Click on Apply 
     cy.get(':nth-child(1) > .btn').click()

     cy.wait(5000)

     //Click on Ellipses Icon
     cy.get(':nth-child(4) > .relative > .justify-self-end > div > svg').click()

    
     
     // click on Delete Option
     cy.get('.bg-white > :nth-child(2) > .p-2').click()




  })
})