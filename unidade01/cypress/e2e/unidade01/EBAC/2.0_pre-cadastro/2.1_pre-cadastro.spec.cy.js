/// <reference types="cypress" />

import { Faker, faker, fakerPT_BR } from '@faker-js/faker';
describe('Funcionalidade Pré Cadastro', () => {
    beforeEach('Funcionalidade Login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    })
    afterEach('Funcionalidade Login', () => {
        cy.screenshot()
    })
    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = fakerPT_BR.internet.email()
        let nomelFaker = fakerPT_BR.person.firstName()
        let sobrenomeFaker = fakerPT_BR.person.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('Testeteste123@')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomelFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificada com sucesso.')
    });
});