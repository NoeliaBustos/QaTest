Cypress.Commands.add('withOutPass', (wrongUser) => { 
    cy.get('input[name="username"]').clear().type(wrongUser);
    cy.get('.oxd-button').click()
    cy.get('span').contains('Required')
})


Cypress.Commands.add('wrongLogin',(wrongUser,wrongPass) => {
    cy.get('input[name="username"]').clear().type(wrongUser);
    cy.get('input[name="password"]').clear().type(wrongPass);
    cy.get('.oxd-button').click()
    cy.get('p').contains('Invalid credentials')
}) 