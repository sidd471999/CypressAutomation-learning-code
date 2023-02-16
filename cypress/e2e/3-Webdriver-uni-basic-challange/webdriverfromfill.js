///<reference types="cypress"/>


describe("verifying the login form",()=>{
    it('verify the form filling with valid credentials', () => {
        cy.visit("/"+"/Contact-Us/contactus.html")
        cy.document().should("have.property","charset").and('eq',"UTF-8")
        cy.title().should("includes","WebDriver | Contact Us")

        cy.get('h2[name="contactme"]').then((ele)=>{
            cy.log(" text == "+ ele.text())
        })
        cy.url().should("includes","/Contact-Us/contactus.html")
        cy.get('[placeholder="First Name"]').type("Siddhant")
        cy.get('[placeholder="Last Name"]').type("Gadakh")
        cy.get('[placeholder="Email Address"]').type("siddhantgadakh121@gmail.com")
        cy.get('[placeholder="Comments"]').type("Learning cypress is fun")
        cy.get('[type="submit"]').click()
        cy.get('h1').should("contain","Thank You for your Message!")
    });

it('verify the resetting of the form', () => {
    cy.visit("/"+"/Contact-Us/contactus.html")
    cy.get('[placeholder="First Name"]').type("Siddhant")
    cy.get('[placeholder="Last Name"]').type("Gadakh")
    cy.get('[placeholder="Email Address"]').type("siddhantgadakh121@gmail.com")
    cy.get('[placeholder="Comments"]').type("Learning cypress is fun")
    cy.get('[type="reset"]').click()
    cy.get('[type="submit"]').click()
    cy.get('body').should("contain"," Error: all fields are required")
});

})