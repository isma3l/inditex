describe('Podcasts list', () => {
  it('Given the service returns 100 podcasts you should see 100 items in the listing and the item counter should show a total of 100', () => {
    const TOTAL_PODCASTS = 100;
    cy.visit("http://localhost:3000");

    cy.get("input[type=text]").should("be.visible");
    cy.get('[aria-label="podcasts counter"]').contains(TOTAL_PODCASTS.toString());
    cy.get('[alt="podcast image"]').should("have.length", TOTAL_PODCASTS)
  })

  it('Given there is a podcast by the author Joe Budden when you search in the filter by his name then only one podcast is displayed', () => {
    cy.visit("http://localhost:3000");

    cy.get("input[type=text]").type("the joe budden");
    cy.get('[alt="podcast image"]').should("have.length", 1)
  })

  it('Given there is no author named star123 when you search in the filter by his name then the results will not show any podcasts', () => {
    cy.visit("http://localhost:3000");

    cy.get("input[type=text]").type("start123");
    cy.get('[alt="podcast image"]').should("have.length", 0)
  })
})