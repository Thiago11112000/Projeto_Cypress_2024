
/// <reference types = "cypress"/>

import { faker } from '@faker-js/faker';

const user_data = require ("../fixtures/desafio.json")
describe('Cadastro de Usuario',  ()=>{

beforeEach('Acessando pagina de cadastro', () =>{
cy.acessRegisterPage()
})
  const user_name = 'Thiago'
  const user_email = 'thiagoclick2000@hotmail.com'
  const user_password = '123456'
  it('Validar campo nome vazio', () =>{
    cy.get('#user')
    .should('be.visible')
      cy.saveRegister()
      cy.checkMessage('O campo nome deve ser prenchido')
  })
  it('Validar campo e-mail vazio', () =>{
    cy.fillName(user_data.name)
    cy.saveRegister()
    cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })


  it('validar cmapo e-mail inválido',() =>{
   cy.fillName(user_data.name)
   cy.fillEmail('asdsd@') 
   cy.saveRegister()
   cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Validar campo senha vazio', () =>{

    cy.get('#user')
    .should('be.visible')
    .type(user_data.name)
  
    cy.get('#email')
    .should('be.visible')  
    cy.fillEmail(user_data.email)
    cy.fillName(user_data.name)
    cy.saveRegister()
   cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Validar campo senha inválida', () =>{
    cy.get('#user')
    .should('be.visible')
    cy.fillName(user_data.name)
  
    cy.get('#email')
    .should('be.visible')
    .type(user_data.email)
     
    cy.get('#password')
    .should('be.visible')
    cy.fillPassword('12345')
    cy.saveRegister()
   cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Cadastro realizado com sucesso', () =>{
    const name = faker.person.fullName();
    const email = faker.internet.email(); 
   cy.fillName(name)
   cy.fillEmail(email)
   cy.fillPassword(user_data.password)
   cy.saveRegister()
   cy.checkRegisterSuccess(name)

  })
})
     