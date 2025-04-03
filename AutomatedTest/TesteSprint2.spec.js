/// <reference types="cypress" />


describe("Testes automatizados com cypress Sprint 2", () => {

    beforeEach(()=> {
        cy.visit("https://www.saucedemo.com/v1/")
        
})


    it('(QA-TC-5)Testar a funcionalidade da opção de buscar produtos de A a Z', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('az').should('contain','Name (A to Z)')
       
    })

    it('(QA-TC-6)Testar a funcionalidade da opção de buscar produtos de Z a A', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('za').should('contain','Name (A to Z)')

    }) 

    it('(QA-TC-7)Testar a funcionalidade da opção de buscar produtos pelo preço mais baixo', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('lohi').should('contain','Price (low to high')               
    })

    it('QA-TC-8)Testar a funcionalidade da opção de buscar produtos pelo preço mais alto', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('hilo').should('contain','Price (high to low')

    })    

})