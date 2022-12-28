// /Pages/HomePage/HomePage.js
var pageLocators = {
    featuredItemCarousel: '.active > .d-block',
    leftArrowCarousel: '.carousel-control-prev-icon',
    rightArrowCarousel: '.carousel-control-next-icon',
    homeHeader: '.active > .nav-link',
    contactHeader: ':nth-child(2) > .nav-link',
    aboutUsHeader: ':nth-child(3) > .nav-link',
    cartHeader: '#cartur',
    logInHeader: '#login2',
    signUpHeader: '#signin2',
    categoriesTitle: '#cat',
    contactModal: '#exampleModal > .modal-dialog > .modal-content > .modal-header',
    aboutUsModal: '#videoModal > .modal-dialog > .modal-content > .modal-header',
    aboutUsVideo: '.vjs-poster'
    }

    class HomePage {
    featuredItemCarousel() { return cy.get(pageLocators.featuredItemCarousel); }
    leftArrowCarousel() { return cy.get(pageLocators.leftArrowCarousel); }
    rightArrowCarousel() { return cy.get(pageLocators.rightArrowCarousel); }
    homeHeader() {return cy.get(pageLocators.homeHeader); }
    categoriesTitle() { return cy.get(pageLocators.categoriesTitle); }
    contactHeader() {return cy.get(pageLocators.contactHeader); }
    contactModal() { return cy.get(pageLocators.contactModal); }
    aboutUsHeader() {return cy.get(pageLocators.aboutUsHeader); }
    aboutUsModal() { return cy.get(pageLocators.aboutUsModal); }
    aboutUsVideo() { return cy.get(pageLocators.aboutUsVideo); }
    cartHeader() { return cy.get(pageLocators.cartHeader); }

    visibleFeaturedItemCarousel() { return this.featuredItemCarousel().should('be.visible'); }
    clickLeftArrowCarousel() { return this.leftArrowCarousel().click(); }
    clickRightArrowCarousel() { return this.rightArrowCarousel().click(); }
    clickHomeHeader() { return this.homeHeader().click(); }
    visiblecategoriesTitle() { return this.categoriesTitle().should('be.visible'); }
    clickContactHeader() { return this.contactHeader().click(); }
    visibleContactModal() { return this.contactModal().should('be.visible'); }
    clickAboutUsHeader() { return this.aboutUsHeader().click(); }
    visibleAboutUsModal() { return this.aboutUsModal().should('be.visible'); }
    visibleAboutUsvideo() { return this.aboutUsVideo().should('be.visible'); }
    clickCartHeader() { return this.cartHeader().click(); }
    
    }
    
    const homePage = new HomePage();
    export default homePage;
