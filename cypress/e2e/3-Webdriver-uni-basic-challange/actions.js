///<reference types="cypress"/>

describe("verify actions performed with cypress", () => {
  it("verify the click and hold with trigger function ", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($el) => {
        expect($el).to.have.css("background" ,"rgb(0, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box");
      });
  });
});
