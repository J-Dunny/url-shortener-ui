describe("Home page display and userflow", () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/urls", 
        
        { urls:[
            {   id: 1, 
                long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', 
                short_url: 'http://localhost:3001/useshorturl/1', 
                title: 'Awesome photo'
            }
        ]}
    
        ).as("get-urls")
    })

    it("Should display correct title", () => {
        cy.visit('http://localhost:3000/')
        .get('h1').contains('URL Shortener')
    })

    it("Should display the existing shortend urls", () => {
        cy.visit('http://localhost:3000/')
        .get('.url').contains('Awesome photo')
        .get('.url').contains('http://localhost:3001/useshorturl/1')
        .get('.url').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })

    it("Should display the form with proper inputs", () => {
        cy.visit('http://localhost:3000/')
        .get('input[name="title"]').should('be.visible')
        .get('input[name="long_url"]').should('be.visible')
        .get('button').contains('Shorten Please!')
    })

    it("Should correctly input data into form fields", () => {
        cy.visit('http://localhost:3000/')
        .get('input[name="title"]').type('Amazing').should("have.value", 'Amazing' )
        .get('input[name="long_url"]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80').should("have.value", 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' )

        
    })

    it("Should correctly add new short URL to dom and POST data", () => {
        
        cy.visit('http://localhost:3000/')
        .get('input[name="title"]').type('Amazing').should("have.value", 'Amazing' )
        
    
        .get('input[name="long_url"]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80').should("have.value", 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' )
        cy.intercept('POST', "http://localhost:3001/api/v1/urls", 
        
            {   id: 25, 
                long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', 
                short_url: 'http://localhost:3001/useshorturl/1', 
                title: 'Awesome photo 2'
            }
        
        ).as("post-urls")
        .get('button').click()
        cy.wait('@post-urls')
        
        
    })



})

