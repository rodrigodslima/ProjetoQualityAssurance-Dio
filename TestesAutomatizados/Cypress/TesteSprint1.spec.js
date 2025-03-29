/// <reference types="cypress" />

describe("Testes automatizados com cypress Sprint 1", () => {

    beforeEach(()=> {
        cy.visit("https://www.saucedemo.com/v1/")

})


it("Teste login", () => {
    
    cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
    cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
    cy.get('#login-button').click()
})

it("Teste login senha inválida", () => {

     cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
     cy.get('[data-test=password]').type("Colocando senha errada")
     cy.get('#login-button').click()
})

it("Clicar no produto da loja virtual ver as informações do produto e clicar no botão voltar para página anterior", () => {

    cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
    cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
    cy.get('#login-button').click()
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.inventory_details_back_button').click({force:true})
    
})

it("Verificar funcionalidade do botão adicionar e remover", () => {

    cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
    cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
    cy.get('#login-button').click()
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click().should('have.text','REMOVE')
    cy.get('.btn_secondary').click().should('have.text','ADD TO CART')
    

    })   

})