// /Pages/HomePage/HomePage.js
var pageLocators = {
    featuredItemCarousel: '.active > .d-block',
    leftArrowCarousel: '.carousel-control-prev-icon',
    rightArrowCarousel: '.carousel-control-next-icon',
    carouselIndicatorZero: '[data-slide-to="0"]',
    carouselIndicatorOne: '[data-slide-to="1"]',
    carouselIndicatorTwo: '[data-slide-to="2"]',
    homeHeader: '.active > .nav-link',
    contactHeader: ':nth-child(2) > .nav-link',
    aboutUsHeader: ':nth-child(3) > .nav-link',
    cartHeader: '#cartur',
    logInHeader: '#login2',
    signUpHeader: '#signin2',
    categoriesTitle: '#cat',
    contactModal: '#exampleModal > .modal-dialog > .modal-content > .modal-header',
    aboutUsModal: '#videoModal > .modal-dialog > .modal-content > .modal-header',
    aboutUsVideo: '.vjs-poster',
    logInModalLabel: '#logInModalLabel',
    usernameTitleLogIn: '#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
    passwordTitleLogIn: '#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',
    signInModalLabel: '#signInModalLabel',
    usernameTitleSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
    passwordTitleSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label'
}

    class HomePage {
    featuredItemCarousel() { return cy.get(pageLocators.featuredItemCarousel); }
    leftArrowCarousel() { return cy.get(pageLocators.leftArrowCarousel); }
    rightArrowCarousel() { return cy.get(pageLocators.rightArrowCarousel); }
    carouselIndicatorZero() { return cy.get(pageLocators.carouselIndicatorZero); }
    carouselIndicatorOne() { return cy.get(pageLocators.carouselIndicatorOne); }
    carouselIndicatorTwo() { return cy.get(pageLocators.carouselIndicatorTwo); }
    homeHeader() {return cy.get(pageLocators.homeHeader); }
    categoriesTitle() { return cy.get(pageLocators.categoriesTitle); }
    contactHeader() {return cy.get(pageLocators.contactHeader); }
    contactModal() { return cy.get(pageLocators.contactModal); }
    aboutUsHeader() {return cy.get(pageLocators.aboutUsHeader); }
    aboutUsModal() { return cy.get(pageLocators.aboutUsModal); }
    aboutUsVideo() { return cy.get(pageLocators.aboutUsVideo); }
    cartHeader() { return cy.get(pageLocators.cartHeader); }
    logInHeader() { return cy.get(pageLocators.logInHeader); }
    logInModalLabel() { return cy.get(pageLocators.logInModalLabel); }
    usernameTitleLogIn() { return cy.get(pageLocators.usernameTitleLogIn); }
    passwordTitleLogIn() { return cy.get(pageLocators.passwordTitleLogIn); }
    signUpHeader() { return cy.get(pageLocators.signUpHeader); }
    signInModalLabel() { return cy.get(pageLocators.signInModalLabel); }
    usernameTitleSignUp() { return cy.get(pageLocators.usernameTitleSignUp); }
    passwordTitleSignUp() { return cy.get(pageLocators.passwordTitleSignUp); }


    visibleFeaturedItemCarousel() { return this.featuredItemCarousel().should('be.visible'); }
    clickLeftArrowCarousel() { return this.leftArrowCarousel().click(); }
    clickRightArrowCarousel() { return this.rightArrowCarousel().click(); }
    clickCarouselIndicatorZero() { return this.carouselIndicatorZero().click(); }
    visibleCarouselIndicatorZero() { return this.carouselIndicatorZero().should('be.visible'); }
    clickCarouselIndicatorOne() { return this.carouselIndicatorOne().click(); }
    visibleCarouselIndicatorOne() { return this.carouselIndicatorOne().should('be.visible'); }
    clickCarouselIndicatorTwo() { return this.carouselIndicatorTwo().click(); }
    visibleCarouselIndicatorTwo() { return this.carouselIndicatorTwo().should('be.visible'); }
    clickHomeHeader() { return this.homeHeader().click(); }
    visibleCategoriesTitle() { return this.categoriesTitle().should('be.visible'); }
    clickContactHeader() { return this.contactHeader().click(); }
    visibleContactModal() { return this.contactModal().should('be.visible'); }
    clickAboutUsHeader() { return this.aboutUsHeader().click(); }
    visibleAboutUsModal() { return this.aboutUsModal().should('be.visible'); }
    visibleAboutUsvideo() { return this.aboutUsVideo().should('be.visible'); }
    clickCartHeader() { return this.cartHeader().click(); }
    clickLogInHeader() { return this.logInHeader().click(); }
    visibleLogInModalLabel() { return this.logInModalLabel().should('be.visible'); }
    textLogInModalLabel() { return this.logInModalLabel().should('have.text', 'Log in'); }
    visibleUsernameTitleLogIn() { return this.usernameTitleLogIn().should('be.visible'); }
    textUsernameTitleLogIn() { return this.usernameTitleLogIn().should('have.text', 'Username:'); }
    visiblePasswordTitleLogIn() { return this.passwordTitleLogIn().should('be.visible'); }
    textPasswordTitleLogIn() { return this.passwordTitleLogIn().should('have.text', 'Password:'); }
    clickSignUpHeader() { return this.signUpHeader().click(); }
    visibleSignInModalLabel() { return this.signInModalLabel().should('be.visible'); }
    textSignInModalLabel() { return this.signInModalLabel().should('have.text', 'Sign up'); }
    visibleUsernameTitleSignUp() { return this.usernameTitleSignUp().should('be.visible'); }
    textUsernameTitleSignUp() { return this.usernameTitleSignUp().should('have.text', 'Username:'); }
    visiblePasswordTitleSignUp() { return this.passwordTitleSignUp().should('be.visible'); }
    textPasswordTitleSignUp() { return this.passwordTitleSignUp().should('have.text', 'Password:'); }
    }
    
    const homePage = new HomePage();
    export default homePage;
