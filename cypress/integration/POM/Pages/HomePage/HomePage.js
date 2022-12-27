
var pageLocators = {
    featuredItemCarousel: '.active > .d-block',
    leftarrowcarousel: '.carousel-control-prev-icon'

    }

    class HomePage {
    featuredItemCarousel() { return cy.get(pageLocators.featuredItemCarousel); }
    leftArrowCarousel() { return cy.get(pageLocators.leftarrowcarousel); }
    clickLeftArrowCarousel() { return this.leftArrowCarousel().click(); }
    visibleFeaturedItemCarousel() { return this.featuredItemCarousel().should('be.visible'); }
    }
    const homePage = new HomePage();
    export default homePage;
