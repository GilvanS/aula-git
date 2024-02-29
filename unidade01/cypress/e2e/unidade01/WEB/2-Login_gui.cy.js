/// <reference types='Cypress'/>
describe("Usuarios devem realizar o login", () => {

  let data;
    
  beforeEach(() => {
    cy.fixture("example").then((tData) => {
      data = tData;
      cy.log(data.username)
      cy.log(data.password)
    });

  });

  it("Atraves da Pagina da aplicação com sucesso", () => {
    cy.visit("https://curso-automacao-web-app.herokuapp.com/login");
    cy.get("input[id='yourUsername']").type(data.username);
    cy.get("input[id='yourPassword']").type(data.password);
    cy.get("button[id='logginButton']").click();
    cy.contains("h1", "Dashboard");
  })
})