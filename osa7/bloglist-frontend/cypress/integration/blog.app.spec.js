describe('Note app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Super User',
      username: 'root',
      password: 'sekret'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened',  function() {
    cy.contains('Blog App')
  })

  it('login form can be opened', function() {
    cy.contains('Login')
      .click()
  })

  describe('when logged in', function() { 
    beforeEach(function() { 
      cy.contains('Login')
        .click()
      cy.get('#username')
        .type('root')
      cy.get('#password')
        .type('sekret')
      cy.contains('Login')
        .click()
    })

    it('name of the user is shown', function() {
      cy.contains('Super User')  
    })

    describe('and a blog is created', function() { 
      beforeEach(function() {
        cy.contains('create new')
          .click()
        cy.get('#title')
          .type('a blog created by')
        cy.get('#author')
          .type('cypress')
        cy.get('#url')
          .type('cypress.io')
        cy.get('#createNewBlog')
          .click()
      })

      it('name is shown', function() {
        cy.contains('a blog created by')
      }) 

      it('can be liked', function() {
        cy.get('td:first')
          .click()
        cy.get('#likeBlog')
          .click()
        cy.contains('1 likes')
      })
 
      it('can be be commented', function() {
        cy.get('td:first')
          .click()
        cy.contains('new comment')
          .click()
        cy.get('#comment-input')
          .type('a new comment!')
        cy.get('#save-comment')
          .click()
        cy.contains('a new comment!')
      })
    })
  })
})
