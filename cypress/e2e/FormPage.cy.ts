function fillForm(
  author: string,
  description: string,
  date: string,
  human: boolean,
  image: Cypress.FileReference | Cypress.FileReference[],
  submit: boolean
) {
  cy.get('input[name="author"]').type(author);
  cy.get('input[name="description"]').type(description);
  cy.get('input[name="date"]').type(date);
  human ? cy.get('label.yes').click() : null;
  cy.get('input[name="image"]').selectFile(image, { force: true });
  submit ? cy.get('input[type=submit]').click() : null;
}

describe('Check Form page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Form').click();
  });

  it('open form page', () => {
    cy.get('div.thisPage').within(() => {
      cy.get('b').should('have.text', 'Form');
    });
  });

  it('fill form', () => {
    cy.get('.forms-container').within(() => {
      cy.get('.form-container').within(() => {
        cy.get('h2').contains('Upload photo');
        fillForm(
          'hell-llex',
          'Test description...',
          '1990-01-01',
          false,
          './public/images/image0.jpeg',
          true
        );
      });
    });
  });

  it('example card', () => {
    fillForm(
      'hell-llex',
      'Test description...',
      '1990-01-01',
      false,
      './public/images/image0.jpeg',
      false
    );
    cy.get('.forms-container').within(() => {
      cy.get('.example-card').within(() => {
        cy.get('h2').contains('Example card:');
        cy.get('.card').contains('hell-llex');
        cy.get('.card').contains('Test description...');
        cy.get('.card').contains('01.01.1990');
        cy.get('.card').contains('Landscape');
        cy.get('.card').contains('No');
      });
    });
  });

  it('latest update cards', () => {
    cy.get('h2:last').should('have.text', 'Latest update');
    fillForm(
      'hell-llex',
      'Test description...',
      '1990-01-01',
      false,
      './public/images/image0.jpeg',
      true
    );
    fillForm(
      'hell-llex',
      'Test description...',
      '1990-01-01',
      true,
      './public/images/image1.jpg',
      true
    );
    cy.get('.container-cards').within(() => {
      cy.get('div.card').should('have.length', 2);
    });
  });

  it('your update cards', () => {
    fillForm(
      'hell-llex',
      'Test description...',
      '1990-01-01',
      false,
      './public/images/image0.jpeg',
      true
    );
    fillForm(
      'hell-llex',
      'Test description...',
      '1990-01-01',
      true,
      './public/images/image1.jpg',
      true
    );
    cy.contains('Home').click();
    cy.get('div.your-cards-container').within(() => {
      cy.get('div.card').should('have.length', 4);
    });
  });
});
