/// <reference types="cypress" />

import { Faker, faker, fakerPT_BR } from '@faker-js/faker';
describe('Funcionalidade Página de produtos', () => {
    beforeEach('Funcionalidade Login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })
    afterEach('Funcionalidade Login', () => {
        cy.screenshot()
    })
    it('Deve selecionar um produto da lista', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click();
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +'× “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });
});