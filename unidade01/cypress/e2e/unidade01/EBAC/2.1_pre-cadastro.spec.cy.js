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
        cy.get('#reg_email').type(fakerPT_BR.internet.email())
        cy.get('#reg_password').type('Testeteste123@')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fakerPT_BR.person.firstName())
        cy.get('#account_last_name').type(fakerPT_BR.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificada com sucesso.')
    });
});