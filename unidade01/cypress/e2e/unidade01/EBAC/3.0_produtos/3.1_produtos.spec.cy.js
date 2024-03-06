/// <reference types="cypress" />

import { Faker, faker, fakerPT_BR } from '@faker-js/faker';
describe('Funcionalidade Página de produtos', () => {
    beforeEach('Funcionalidade Login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })
    afterEach('Funcionalidade Login', () => {
        cy.screenshot()
    })
    it('Deve selecionar o 1º produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .first()
        .click();
    });
    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .last()
        .click();
    });
    it('Deve selecionar o 3º produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .eq(3)
        .click();
    });
    it('Deve selecionar o produto da classe "XXX" da lista', () => {
        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click();
    });
});