describe('Check Home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home').click();
  });

  it('open popup card 0', () => {
    cy.get('.your-cards-container [data-index="0"]').click();

    cy.get('.popup__container-card').within(() => {
      cy.get('.icon-close');
      cy.get('.card');
      cy.get('.card').contains('hell-llex');
      cy.get('.card').contains('Great photo of the lamp');
      cy.get('.card').contains('2023.03.10');
      cy.get('.card').contains('Landscape');
      cy.get('.card').contains('No');
    });
  });

  it('close popup card 0', () => {
    cy.get('.your-cards-container [data-index="0"]').click();

    cy.get('.popup__container-card').within(() => {
      cy.get('.icon-close').click();
    });
  });

  it('popup card 1', () => {
    cy.get('.your-cards-container [data-index="1"]').click();

    cy.get('.popup__container-card').within(() => {
      cy.get('.icon-close');
      cy.get('.card');
      cy.get('.card').contains('*********');
      cy.get('.card').contains("It's me");
      cy.get('.card').contains('2023.03.11');
      cy.get('.card').contains('Portrait');
      cy.get('.card').contains('Yes');
    });
  });

  it('close popup card 1', () => {
    cy.get('.your-cards-container [data-index="1"]').click();

    cy.get('.popup__container-card').within(() => {
      cy.get('.icon-close').click();
    });
  });
});
