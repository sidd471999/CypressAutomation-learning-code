describe("verifying the login form to get data form fixture file",()=>{

    before(function(){
        cy.fixture("example").then((el)=>{
            globalThis.data=el
        })
    })
    it.only('verify the form filling with valid credentials', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should("have.property","charset").and('eq',"UTF-8")
        cy.title().should("includes","WebDriver | Contact Us")

        cy.get('h2[name="contactme"]').then((ele)=>{
            cy.log(" text == "+ ele.text())
        })
        cy.url().should("includes","/Contact-Us/contactus.html")
        cy.get('[placeholder="First Name"]').type(data.name)
        cy.get('[placeholder="Last Name"]').type("Gadakh")
        cy.get('[placeholder="Email Address"]').type(data.email)
        cy.get('[placeholder="Comments"]').type("Learning cypress is fun")
        cy.get('[type="submit"]').click()
        cy.get('h1').should("contain","Thank You for your Message!")
    });

})