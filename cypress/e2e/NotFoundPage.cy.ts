describe('Check NotFound page', () => {
  beforeEach(() => {
    cy.visit('/error-page');
  });
  it('open NotFound page', () => {
    cy.url().should('include', '/error-page');
  });
});
