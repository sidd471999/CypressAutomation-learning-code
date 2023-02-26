///<reference types="cypress"/>

describe("verify the task", () => {
  it("verify the task", () => {
    cy.visit("https://vw-qs.eu.erwin-portal.com/erwin/showHome.do");
    cy.get("[name='loginName']").type("user4");
    cy.get("[name='password']").type("Password@00");
    cy.get('[name="method"]').click();
    cy.get("#bannerAcceptButton").click();
    cy.get("#root > :nth-child(3) > .a > span").click();
    cy.get('[href="/erwin/showVehicleSearch.do"]')
      .first()
      .click({ force: true });
    cy.get(".cell-2and3of3_flatrate > select").select("H");
    cy.get(".cell-1of1 > .button-main").click();
    cy.get("#form_gtb").check().should("be.checked");
    cy.get("tbody > tr > .col3").should("contain", "12,00%");
    cy.get("tfoot > :nth-child(2) > .col5").should("contain", "7,00");
    cy.get(
      "#main-content > form:nth-child(3) > table:nth-child(2) > tbody > tr:nth-child(6) > td.col5"
    ).should("contain", "7,84");
    cy.get(".button-main").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(3000);
    cy.get("#headline-1 > h1").should("contain", "Checkout");
    cy.get(".wpwl-group-brand > .wpwl-wrapper > .wpwl-control").should(
      "have.value",
      "VISA"
    );
    // cy.get('.wpwl-group-brand > .wpwl-wrapper > .wpwl-control').select("VISA")
    // cy.get('.wpwl-control-givenName').type("siddhant")
    // cy.get('[name="card.number"]').type('4000000000000044',{force:true})
    cy.get('[name="customer.givenName"]').type("test", { force: true });
    cy.get('[name="customer.surname"]').type("Data", { force: true });
    //  cy.get('.wpwl-group-cardNumber > .wpwl-wrapper > .wpwl-control').type('4000000000000044',{force:true})

    // cy.get("[name='card.cvv']").type("123",{force:true})
    cy.get('iframe[name="card.number"]').then(($frm) => {
      cy.log($frm);
      let bdy = $frm.contents().find("body");
      cy.wrap(bdy).as("frameBdy");
      // let bdy = $frm.find("body");
      // cy.log(bdy);
      // cy.wrap(bdy).as('frameBdy')
      cy.get("@frameBdy")
        .find('[placeholder="Card Number"]')
        .type("4000000000000044", { force: true });
    });

    // input[data-action="blur-card-expiry"]

    cy.get('input[data-action="blur-card-expiry"]').type("0223", {
      force: true,
    });

    cy.get('iframe[placeholder="CVV"]').then(($el) => {
      cy.log($el);
      let bd = $el.contents().find("body");
      cy.wrap(bd).as("ibody");
      cy.get("@ibody")
        .find('input[name="card.cvv"][aria-label="CVV"]')
        .type("123", { force: true });
    });

    cy.get(".wpwl-button").click({ force: true });

    cy.wait(3000);
    cy.get('iframe[src="about:blank"]', { timeout: 5000 }).then(($ele) => {
      console.log($ele);
      cy.wait(3000);
      let bbd = $ele["0"].contentDocument.body;
      cy.wrap(bbd).as("paybdy");
      cy.get("@paybdy").find(".container.stage");
    });
    // #EndToEndIdentity

    // cy.get('iframe[name="card.cvv"]').then(($el)=>{
    //     let bd=$el.find("body")
    //     cy.log(bd)
    //     cy.wrap(bd).as("frbd")
    //     cy.get("@frbd").find("[name='card.cvv']").type("123",{force:true})
    // })
  });
});
