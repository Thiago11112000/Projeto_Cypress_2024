
/// <reference types = "cypress"/>
describe('asserts', () => {

            it.only('Check box e Radio Button', () => {
              cy.visit('/')
              .get('.header-logo')

              cy.get('.fa-user')
              .click()

              //should
              cy.get('.account_form > h3')
              .should('be.visible')

              cy.get('.account_form > h3')
              .should('contain.text', 'Login')


              // expect 
              cy.get('.account_form > h3')
                .then((element) => {
                  expect(element.text()).eq('Login')
                  expect(element).to.be.visible
                })
            })
          })
          
        