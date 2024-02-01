/// <reference types = "cypress"/>

const elements = {
    buttons: {
      register:  '#btnRegister'
    },
    fields: {
    name: '#user',
    email: '#email',
    password: '#password'
    },
    messages: {
     error: '.errorLabel',
     sucessTitle: '#swal2-title',
     sucessSubTitle: '#swal2-html-container'
    }
}
export default{
  saveRegister(){
    cy.get(elements.buttons.register)
    .click()
},

  fillEmail(email){
    cy.get(elements.fields.email)
    .type(email)
},
fillName(name){
    cy.get(elements.fields.name)
    .type(name)
},

fillPassword (password) {
    cy.get(elements.fields.password)
    .type(password)
},

checkMessage (message){ 
    cy.get(elements.messages.error)
    .should('have.text', message)    
},
checkRegisterSuccess(name){ 
    cy.get(elements.messages.sucessTitle)
    .should('have.text','Cadastro realizado!')
   
   cy.get(elements.messages.sucessSubTitle)
    .should('have.text',`Bem-vindo ${name}`)
}}