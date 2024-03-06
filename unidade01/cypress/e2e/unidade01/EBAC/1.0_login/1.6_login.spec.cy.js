/// <reference types="cypress" />
describe('Funcionalidade Login', () => {
    beforeEach('Funcionalidade Login', () => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    })
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)',{ delay: 0})
    });
})
 
