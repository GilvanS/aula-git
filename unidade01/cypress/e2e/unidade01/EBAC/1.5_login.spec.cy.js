/// <reference types="cypress" />
import { Faker, faker, fakerPT_BR } from '@faker-js/faker';
context('Funcionalidade Login', () => {

    beforeEach('Funcionalidade Login', () => {
        cy.visit('minha-conta')
    })
    afterEach('Funcionalidade Login', () => {
        cy.screenshot()
    })
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(fakerPT_BR.internet.email())
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('h1').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, Bigas')
    })
    it("Deve exiber uma mesagem de erro ao inserir usuario invalido", () => {
        cy.get('#username').type('fulano_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()     
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })
       it("Deve exiber uma mesagem de rro ao inserir senha invalidos", () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste*teste.com')
        cy.get('.woocommerce-form > .button').click()     
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})