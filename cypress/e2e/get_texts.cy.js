<reference types = "cypress"/>
describe('Get texts', () => {

    it('Obter texto de um elemento', () =>{
        cy.visit('/')
        .get('.header-logo')

          cy.get('.top_header_left > p')
          .then((element) => {
            console.log(element.text())
           })
    })
})