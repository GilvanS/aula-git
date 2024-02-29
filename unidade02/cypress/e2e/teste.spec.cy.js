/// <reference types='Cypress'/>

describe('Login', function () => {

    it('Sign in', function () => {
        cy.visit('www.site.com.br')
        cy.get('input[type="email"]').type('endereco@email.com')
        cy.get('input[type="password"]').type('senha')
        cy.get('btn').contains('Entrar').click()
    });
});