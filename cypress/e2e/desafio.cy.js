
/// <reference types = "cypress"/>

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';
import resolutions_page from '../support/resolutions/resolutions_page'
const user_data = require ("../fixtures/desafio.json")
const resolutions = require('../support/resolutions/resolutions.json');


resolutions.screen.forEach(element => {
  

describe('Cadastro de Usuario',  ()=>{

beforeEach('Acessando pagina de cadastro', () =>{
 
  resolutions_page.setResolution(element)
 home_page.acessRegisterPage()

})
  const user_name = 'Thiago'
  const user_email = 'thiagoclick2000@hotmail.com'
  const user_password = '123456'
  it('Validar campo nome vazio', () =>{
    cy.get('#user')
    .should('be.visible')
      register_page.saveRegister()
      register_page.checkMessage('O campo nome deve ser prenchido')
  })
  it('Validar campo e-mail vazio', () =>{
    register_page.fillName(user_data.name)
    register_page.saveRegister()
    register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })


  it('validar cmapo e-mail inválido',() =>{
    register_page.fillName(user_data.name)
    register_page.fillEmail('asdsd@') 
    register_page.saveRegister()
    register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Validar campo senha vazio', () =>{

    cy.get('#user')
    .should('be.visible')
    .type(user_data.name)
  
    cy.get('#email')
    .should('be.visible')  
     register_page.fillEmail(user_data.email)
     register_page.fillName(user_data.name)
     register_page.saveRegister()
     register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Validar campo senha inválida', () =>{
    cy.get('#user')
    .should('be.visible')
    register_page.fillName(user_data.name)
  
    cy.get('#email')
    .should('be.visible')
    .type(user_data.email)
     
    cy.get('#password')
    .should('be.visible')
     register_page.fillPassword('12345')
     register_page.saveRegister()
    register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Cadastro realizado com sucesso', () =>{
    const name = faker.person.fullName();
    const email = faker.internet.email(); 
    register_page.fillName(name)
    register_page.fillEmail(email)
    register_page.fillPassword(user_data.password)
    register_page.saveRegister()
    register_page.checkRegisterSuccess(name)

  })
})
});