/// <reference types="cypress" />
import { Faker, faker, fakerPT_BR } from '@faker-js/faker';

let data;
before(() => {

    cy.fixture('perfil').then((tData) => {
        data = tData;
    })
})

context('Funcionalidade Login', () => {
    beforeEach('Funcionalidade Login', () => {
        cy.visit('minha-conta')
    })
})
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Bigas',{ delay: 0})
    });
    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log : false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Bigas',{ delay: 0})
        })
        
    });