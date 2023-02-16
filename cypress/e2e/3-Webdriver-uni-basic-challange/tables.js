///<reference types="cypress"/>

describe("verify the table data ", () => {
  //   it("validate and access table data to get the name and age of person", () => {
  //     cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");

  //     cy.get("#t01 tr td:nth-child(1)").as("name");
  //     cy.get("#t01 tr td:nth-child(3)").as("age");
  //     var age;
  //     var name;

  //     cy.get("@name")
  //       .each(($el) => {
  //         name = $el.text();
  //         cy.log(name)

  //         cy.get("@age").each(($ele) => {
  //           age = $ele.text();
  //           cy.log(age)
  //         })
  //         // cy.log(`${name}==${age}`);
  //       })
  //   });

  it("validate and access table data to get the name and age of person", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get("#t01 tr").each(($el) => {
         const name=$el.find("td:nth-child(1)").text()
         const age =$el.find("td:nth-child(3)").text()

         cy.log(`name=${name} age:${age}`)
    });
  });
});
