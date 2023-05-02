describe('Check Home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home').click();
  });

  it('open home page', () => {
    cy.get('div.thisPage').within(() => {
      cy.get('b').should('have.text', 'Home');
    });
  });

  it('search cards container', () => {
    cy.get('div.search-cards-container').within(() => {
      cy.get('h2.cards-container_title').should('have.text', 'Search Cards');
      cy.get('h3').should(
        'have.text',
        "Either you haven't entered a text query yet or nothing is found..."
      );
    });
  });

  it('your cards container', () => {
    cy.get('div.your-cards-container').within(() => {
      cy.get('h2.cards-container_title').should('have.text', 'Your Cards');
      cy.get('div.card').should('have.length', 2);
      cy.get('[data-index="0"]').contains('hell-llex');
      cy.get('[data-index="0"]').contains('Great photo of the lamp');

      cy.get('[data-index="1"]').contains('*********');
      cy.get('[data-index="1"]').contains("It's me");
    });
  });
});
