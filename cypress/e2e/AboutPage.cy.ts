describe('Check About page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('About Us').click();
  });
  it('open about page', () => {
    cy.get('div.thisPage').within(() => {
      cy.get('b').should('have.text', 'About us');
    });
  });
  it('loader', () => {
    cy.get('div.about-page.router__page').within(() => {
      cy.get('div.loader-container');
    });
  });
});
