/// <reference types="cypress" />
import { Faker, faker, fakerPT_BR } from '@faker-js/faker';

import { perfil } from '../fixtures/perfil.json'

context('Funcionalidade Login', () => {

    beforeEach('Funcionalidade Login', () => {
        cy.visit('minha-conta')
    })
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(fakerPT_BR.internet.email())
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('h1').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Bigas',{ delay: 0})
    })
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuaio)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('h1').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Bigas')
    });
})