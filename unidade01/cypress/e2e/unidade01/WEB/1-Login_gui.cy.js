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
    cy.login(data.username, data.password)
  })
})