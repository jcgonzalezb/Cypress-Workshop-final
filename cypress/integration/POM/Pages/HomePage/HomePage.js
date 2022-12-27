
var pageLocators = {
    featuredItemCarousel: '.active > .d-block',
    leftArrowCarousel: '.carousel-control-prev-icon',
    rightArrowCarousel: '.carousel-control-next-icon'
    }

    class HomePage {
    featuredItemCarousel() { return cy.get(pageLocators.featuredItemCarousel); }
    visibleFeaturedItemCarousel() { return this.featuredItemCarousel().should('be.visible'); }
    leftArrowCarousel() { return cy.get(pageLocators.leftArrowCarousel); }
    clickLeftArrowCarousel() { return this.leftArrowCarousel().click(); }
    rightArrowCarousel() { return cy.get(pageLocators.rightArrowCarousel); }
    clickRightArrowCarousel() { return this.rightArrowCarousel().click(); }
    }
    
    const homePage = new HomePage();
    export default homePage;
