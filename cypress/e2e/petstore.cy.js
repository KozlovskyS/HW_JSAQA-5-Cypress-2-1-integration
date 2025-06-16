
describe('Petstore tests', () => {
   beforeEach(() => {
      const pet = require('../fixtures/petData.json');
      cy.createPet(pet);
   });

   it('Create pet', () => {
      const pet = require('../fixtures/petData.json');
      cy.getPet(pet);
      cy.delPet(pet);
   });
   
   it('Modified pet', () => {
      const pet = require('../fixtures/petData.json');
      pet.id = 123000;
      pet.name = 'dog2';
      cy.log(pet);
      cy.request({
         method: 'PUT',
         url: 'https://petstore.swagger.io/v2/pet',
         body: pet,
      })
         .its('status')
         .should('be.eq', 200);

      cy.getPet(pet);
      cy.delPet(pet);
   });

   it('Delete pet', () => {
      const pet = require('../fixtures/petData.json');
      cy.delPet(pet);
      cy.request({
         method: 'GET',
         url: `https://petstore.swagger.io/v2/pet/${pet.id}`,
         failOnStatusCode: false,
      })
         .its('status')
         .should('be.eq', 404);
   });
})