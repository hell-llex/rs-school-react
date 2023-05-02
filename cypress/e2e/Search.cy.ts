describe('Check Home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home').click();
  });

  it('search input', () => {
    cy.get('.search-forms-container').within(() => {
      cy.get('input[type=text]');
      cy.get('input[type=submit]');
      cy.get('input[type=text]').type('cat');
      cy.get('input[type=submit]').click();
      cy.get('input[type=text]').should('have.value', 'cat');
    });
  });

  it('search cards fill "cat"', () => {
    cy.get('.search-forms-container').within(() => {
      cy.get('input[type=text]').type('cat{enter}');
    });
    cy.get('div.search-cards-container').within(() => {
      cy.get('div.card').should('have.length', 30);
    });
  });

  it('search cards fill "bird"', () => {
    cy.get('.search-forms-container').within(() => {
      cy.get('input[type=text]').type('bird{enter}');
    });
    cy.get('div.search-cards-container').within(() => {
      cy.get('div.card').should('have.length', 30);
    });
  });

  it('search cards fill "dog"', () => {
    cy.get('.search-forms-container').within(() => {
      cy.get('input[type=text]').type('dog');
      cy.get('input[type=submit]').click();
    });
    cy.get('div.search-cards-container').within(() => {
      cy.get('div.card').should('have.length', 30);
    });
  });

  it('search cards fill space', () => {
    cy.get('.search-forms-container').within(() => {
      cy.get('input[type=text]').type(' ');
      cy.get('input[type=submit]').click();
    });
    cy.get('h3').should(
      'have.text',
      "Either you haven't entered a text query yet or nothing is found..."
    );
  });
});
