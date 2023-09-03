describe('Validate the parameters of API', () => {
    it('Access the API and validate parameters', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) => {
          // Check the response status code
          expect(response.status).to.eq(200);
  
          // Iterate through the users in the response
          response.body.data.forEach((user) => {
            // Validate ID, email, first_name, and last_name
            expect(user).to.have.property('id').to.be.a('number');
            expect(user).to.have.property('email').to.be.a('string');
            expect(user).to.have.property('first_name').to.be.a('string');
            expect(user).to.have.property('last_name').to.be.a('string');
          });
  
          // Store the response data in a JSON fixture
          cy.writeFile('cypress/fixtures/userData.json', response.body.data);
        });
    });
  });
  