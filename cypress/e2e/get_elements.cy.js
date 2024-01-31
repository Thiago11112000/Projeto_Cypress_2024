
describe('Get Elements', () => {

    it('Obter elementos', () =>{
    cy.visit('/')
    
     //get
     .get('.header-logo')
     // contains
     cy.get('#top_header').as('cabecalho')
     .contains('Login')

     // find()
     cy.get('#top_header')
     .find('.fa-user')
     // as()
       cy.get('@cabecalho')
       .find('.fa-user')
       .find('.fa-user')
 

    })
})