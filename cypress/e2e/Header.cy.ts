describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
  });
});

describe('Check Heder', () => {
  it('finds the content "Link"', () => {
    cy.visit('/');
    cy.contains('Home').click();
    cy.url().should('include', '');

    cy.contains('Form').click();
    cy.url().should('include', '/form');

    cy.contains('About Us').click();
    cy.url().should('include', '/about');
  });
});
