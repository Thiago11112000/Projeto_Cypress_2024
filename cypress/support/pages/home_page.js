/// <reference types = "cypress"/>

export default {
    acessRegisterPage(){
        cy.visit('/')
        .get('.header-logo')
        cy.get('a > .fa-lock')
        .click()
        .get('#user')
        .should('be.visible')
    }
}