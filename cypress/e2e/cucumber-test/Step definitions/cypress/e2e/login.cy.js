describe('Apex Module Product Creation', function() {
  it('Creating a Product', function() {
  //Visit the Demo QA Website
  // cy.visit("https://apex-web-admin-8gxatq6zs-able-apex.vercel.app/login");
  cy.visit("https://playground-admin.apexcommerce.com/")


  // Enter the user name 
  cy.get(':nth-child(1) > .input-state').type("gurinder@able.do");

  //Enter the password
  cy.get(':nth-child(2) > .input-state').type("password");

  //click Login
  cy.get('#login-form > .flex').click();
  cy.wait(5000);
 
  // Enter the OTP
  cy.get('.input-state-primary').type("100100");

  

  // Click On Submit
  cy.contains("Submit").click();
 // cy.get('#otp-form > .flex').click({ force: true });
  cy.wait(10000);

 // cy.get('.primary-nav > :nth-child(1)s').click({ force: true })
 // cy.contains('All Products').trigger('mouseover').click();
 //change the url
 cy.visit('https://playground-admin.apexcommerce.com/products');

 cy.wait(10000);



 // Clicking on New Product
  cy.get('.flex > .btn').click();

  //Click on Basic product
  cy.get('.bg-white > :nth-child(1) > .p-2').contains('Basic Product').click();


  // Enter the Product Name 
  cy.get('input[name="productName"]').type('Auomation Shoes');
  


  //to click on Create 
  cy.get('.btn > span').click();

  cy.wait(10000)

  //to click on  URL Edit 
 
  cy.get('.col-span-6 > :nth-child(2) > .btn',{timeout:14000}).click({force:true});
 
 
  
  
  cy.wait(8000)
// to clear the text in url
  //  cy.get(('.justify-center > .w-full > .input-state'),{ timeout: 10000 }).clear();
  //  cy.get('.justify-center > .w-full > .input-state').type('www.shoes.com');
   cy.get((':nth-child(2) > .w-full > .input-state'),{ timeout: 10000 }).clear();
   cy.get(':nth-child(2) > .w-full > .input-state').type('www.shoes.com');
   cy.wait(5000);
   // To click on Update
   cy.get('.col-span-6 > :nth-child(2) > .btn',{timeout:14000}).click({force:true});
   cy.wait(4000);

   //This is to Enter the summary of the product in summary tab
   //cy.get(':nth-child(3) > .input-state').type('Nike Air Max Flyknit Racer Mens Shoes');
   cy.get(':nth-child(3) > .w-full > .input-state').type('Nike Air Max Flyknit Racer Mens Shoes');

   //This is to Enter Description of the product in Description tab
  // cy.get(':nth-child(4) > .input-state').type('Paying homage to both heritage and innovation, weve blended 2 icons (old and new) to go beyond whats expected in the Nike Air Max Flyknit Racer. Incredibly light and airy Flyknit is paired with oh-so-comfy Air Max cushioning. Lace up and let your feet do the talking.')
   cy.get(':nth-child(4) > .w-full > .input-state').type('Paying homage to both heritage and innovation, weve blended 2 icons (old and new) to go beyond whats expected in the Nike Air Max Flyknit Racer. Incredibly light and airy Flyknit is paired with oh-so-comfy Air Max cushioning. Lace up and let your feet do the talking.')
   //This is to select the category 
   cy.get('[data-testid="productCategory"] > .flex-auto').click();

   //This is to scroll to the bottom of the page 
   cy.scrollTo(0, 500)

   cy.wait(5000)

   //This is to click on Shoes Radio button 
   //cy.get('.border-t > .justify-between > input').click();
   cy.get(':nth-child(2) > .justify-between > input').click()
   //cy.contains('cy.get(':nth-child(2) > .justify-between > input')').click()

   cy.get(':nth-child(2) > .justify-between > input')

   //This is to Click on Apply CTA
   cy.get('.gap-3 > :nth-child(1) > .btn').click();
   cy.wait(5000)

// This is to click on SKU Details page 
cy.get('.items-end > :nth-child(2) > .flex').click();

// Click on Edit of SKU Details page
cy.get('.items-end > .btn').click();



// Enter the text in SKU text
cy.get('.items-end > .w-full > .input-state').type('Color of shoes');
cy.wait(5000)
// Click on Update 
cy.get('.items-end > .btn').click();



//Clear the selling Price 
cy.get(':nth-child(2) > .flex > :nth-child(1) > .input-state').clear()

//Enter the Selling Price 
cy.get(':nth-child(2) > .flex > :nth-child(1) > .input-state').type('12000')

//Clear The list price 
cy.get(':nth-child(2) > .flex > :nth-child(2) > .input-state').clear()

//Enter the list Price 
cy.get(':nth-child(2) > .flex > :nth-child(2) > .input-state').type('1150')


// Click on Tax Slab 
//cy.get('select').select('Option 2')
cy.get('select').select('12% GST').should('have.value', 'd833cefa-59a8-4a96-8bc5-7386da54d92b')

// Enter the HSN Code 
cy.get('.mt-5 > .grid > :nth-child(2) > .input-state').type('12345678')
cy.wait(5000)

// Click on Browser Files
//cy.get('.relative > .flex > .text-blue-600').click()
const filepath = 'view.jpg'
    
          // cy.get('#variant-image-uploader-file-input')
          // .attachFile("view.jpg").click({ force: true })

          cy.get('#image-uploader-file-input-productImage')
          .attachFile("view.jpg").click({ force: true })
          
// Click on Plus Icon on the Inventory
cy.get('[data-testid="add-stock"] > svg').click()

// Enter into Inventory 
cy.get('.h-11 > .w-full > .input-state').type('20')


// Click on Save
cy.get('.gap-3 > .btn-primary').click()

cy.wait(8000)

//Enter Shipping Length Dimension 
//cy.get(':nth-child(7) > .grid > .col-span-2 > .flex > :nth-child(1) > .input-state').clear().type('29')
cy.get(':nth-child(6) > .grid > .col-span-2 > .flex > :nth-child(1) > .input-state').clear().type('29')



//Enter Shipping Width Dimensions
//cy.get(':nth-child(7) > .grid > .col-span-2 > .flex > :nth-child(2) > .input-state').clear().type('30')
cy.get(':nth-child(6) > .grid > .col-span-2 > .flex > :nth-child(2) > .input-state').clear().type('30')

//Enter the height 
cy.get(':nth-child(3) > .input-state').clear().type('50')


//Enter the Weight
//cy.get(':nth-child(7) > .grid > :nth-child(2) > .input-state').clear().type('190')
cy.get(':nth-child(6) > .grid > :nth-child(2) > .input-state').clear().type('190')


//Click on Convert to Product with Variants 
cy.get('.mt-8 > .btn').click()

cy.wait(5000)

// Enter the Attribute or Product variant 
cy.get('.mt-16 > .w-full > .input-state').type('size');

//click on " Next"
cy.get('.justify-end > .btn-primary').click()

//Click on Attribute/variant that is added
cy.get('.border-b > div > .input-state').type('30')

cy.wait(3000)

// Click on Save
cy.get('.justify-end > .btn-primary').click()


// Scroll up the page 
cy.scrollTo('topRight')
cy.wait(5000)

// Click on Publish 
//cy.get('.mb-10 > :nth-child(4)').click()




})
})