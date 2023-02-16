///<reference types="cypress"/>
describe("count the link on the google page", () => {
  it("verify the links on the google page", () => {
    cy.visit(
      "https://www.google.com/search?q=cypress&oq=cypress&aqs=chrome..69i57j69i59j35i39j0i131i433i512l5j0i512j0i131i433.3330j1j15&sourceid=chrome&ie=UTF-8"
    );
    cy.get(".g div > a[href]").then(($el) => {
      cy.log("the number of links on the page are ==" + $el.length);
    });
  });



    it("verify the link on search page", () => {
      cy.visit(
        "https://www.google.com");
        cy.get("input[name=q]").type("Cypress{enter}");
  
      cy.get("div.g").then(($div) => {
         const countlink = $div.find("a");
         const nooflink=countlink.length
        cy.log(nooflink);
        cy.log(countlink)
      });
    });
  });

