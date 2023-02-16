///<reference types="cypress"/>

describe("Validate file upload function", () => {
  it("File upload with nofilen", () => {
    cy.visit("http://www.webdriveruniversity.com/File-Upload/index.html");
    cy.get("#myFile").selectFile("cypress/fixtures/IMG_1995.JPG");
    cy.get("#submit-button").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.be.eq("Your file has now been uploaded!");
    });
  });

  it("verifying No File upload ", () => {
    cy.visit("http://www.webdriveruniversity.com/File-Upload/index.html");
    cy.get("#submit-button").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.be.eq("You need to select a file to upload!");
    });
  });
});
