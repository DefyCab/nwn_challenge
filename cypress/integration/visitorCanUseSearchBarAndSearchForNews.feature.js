describe('Visitor can use the search bar', () => {
  beforeEach(() => {
    cy.visit("/")
  });
  
  it('is expected the visitor can type query into search bar', () => {
    cy.get("[data-cy=user-search-input").should("have.length")
    cy.get("input").type("text")
  });

  it('is expected to render a list of news based on query', () => {
    cy.get("[data-cy]")
  });
  
});
