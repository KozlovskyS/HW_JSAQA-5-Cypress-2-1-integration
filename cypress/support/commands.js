// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add('createPet', (pet) => {
   cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: pet,
   })
      .its('status')
      .should('be.eq', 200);
});

Cypress.Commands.add('getPet', (pet) => {
   cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${pet.id}`,
      failOnStatusCode: false,
   })
      .then(response => {
         expect(response.status).eq(200);
         expect(response.body.id).to.eq(pet.id);
         expect(response.body.name).to.eq(pet.name);
         expect(response.body.status).to.eq(pet.status);
      });
});

Cypress.Commands.add('delPet', (pet) => {
   cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/pet/${pet.id}`,
      failOnStatusCode: false,
   })
      .its('status')
      .should('be.eq', 200);
});
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })