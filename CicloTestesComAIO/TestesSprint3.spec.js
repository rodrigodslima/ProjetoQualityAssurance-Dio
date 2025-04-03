/// <reference types="cypress" />


describe("Testes automatizados com cypress Sprint 3", () => {

    beforeEach(()=> {
        cy.visit("https://www.saucedemo.com/v1/")

})


    it('(QA-TC-9)Testar a funcionalidade de cadastrar endereço',() => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('path').click()
        cy.get('.btn_action').click()
        cy.get('[data-test=firstName]').type('Testando o primeiro nome').should('have.value','Testando o primeiro nome')
        cy.get('[data-test=lastName]').type('Testando segundo nome').should('have.value','Testando segundo nome')
        cy.get('[data-test=postalCode]').type('52222-222').should('have.value','52222-222')
        cy.get('.btn_primary').click()

    }) 

    it('(QA-TC-10)Testar a funcionalidade de cadastrar endereço sem dados cadastrados',() => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('path').click()
        cy.get('.btn_action').click()
        cy.get('.btn_primary').click()

    }) 

    it('QA-TC-15)Testar a funcionalidade de efetivar compras na loja virutal', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('path').click()
        cy.get('.btn_action').click()
        cy.get('[data-test=firstName]').type('Testando o primeiro nome').should('have.value','Testando o primeiro nome')
        cy.get('[data-test=lastName]').type('Testando segundo nome').should('have.value','Testando segundo nome')
        cy.get('[data-test=postalCode]').type('52222-222').should('have.value','52222-222')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click().should('have.text','FINISH')

    })

    it('QA-TC-13)Testar funcionalidades da opção todos os itens', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#inventory_sidebar_link').click().should('have.text','All Items')
       
    })

    it('QA-TC-14)Testar funcionalidades das opção sair', () => {

        cy.get('[data-test=username]').type("standard_user").should("have.value","standard_user")
        cy.get('[data-test=password]').type("secret_sauce").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click().should('have.text','Logout')
        
       
    })
   

})