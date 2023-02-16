///<reference types="cypress"/>


describe("Navigating to two super domains", () => {
    it.skip("verify visiting two super domain", () => {
    cy.visit("http://www.webdriveruniversity.com/")
    cy.visit("https://automationteststore.com/")
      });


      it("verify visiting two super domain by clicking chromewebsceuirty", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#automation-test-store").invoke("removeAttr","target").click()
      });


      it(" cy-origin", () => {
       cy.origin("webdriveruniversity.com",()=>{
        cy.visit("/")
       })

       cy.origin("automationteststore.com",()=>{
        cy.visit("/")
       })



      });
    });