
/// <reference types = "cypress"/>
describe('interações', () => {

    it('Digitar em um campo de texto', () =>{
        cy.visit('/')
        .get('.header-logo')

          cy.get('.form-control')
          .type('thiagaomartins12@gmail.com')
          
           })
           it('Click', () =>{
            cy.visit('/')
            .get('.header-logo')

            cy.get('.fa-user')
            .click()
           })
           it('Enter', () =>{
            cy.visit('/')
            .get('.header-logo')
    
              cy.get('.form-control')
              .type('thiagaomartins12@gmail.com {enter}')
              })

              it('select', () => {
                cy.visit('/')
                .get('.header-logo')
                .get('.footer_one_widget')
                .contains('Checkout View Two')
                .click()
                .get('#country', { timeout: 2000 })
                .select('Colombia')
            })
            it.only('Check box e Radio Button', () => {
              cy.visit('/')
              .get('.header-logo')
              .get('.footer_one_widget')
              .contains('Checkout View One')
              .click()
             cy.get('#materialUnchecked')
             .check()
              .uncheck()

              cy.get('#css')
              .check()
            })
          })
          
        