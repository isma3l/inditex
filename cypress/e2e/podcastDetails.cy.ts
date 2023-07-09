describe('Podcast Details', () => {    
    it('Given there are several podcasts when you click on one then you navigate to its details', () => {
      cy.visit("http://localhost:3000");
  
      cy.get('[alt="podcast image"]').first().click();
      cy.get('span').contains("Episodes:");
      cy.get('h2').contains("Description");
      cy.get('th').contains("Title");
      cy.get('th').contains("Date");
      cy.get('th').contains("Duration");
    })

    it('Given a podcast has episodes when you select an episode you will see the episode player', () => {
        cy.visit("http://localhost:3000");
    
        cy.get('[alt="podcast image"]').first().click();
        cy.get('[role="cell"]').first().click();
        cy.get('audio').should("be.visible");
      }) 
  })