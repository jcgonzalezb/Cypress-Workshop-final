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
    passwordTitleSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',
    phonesCategory: '[onclick="byCat(\'phone\')"]',
    phoneSamsungGalaxyS6: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
    phoneNokiaLumia1520: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',
    phoneNexus6: ':nth-child(3) > .card > .card-block > .card-title > .hrefch',
    phoneSamsungGalaxyS7: ':nth-child(4) > .card > .card-block > .card-title > .hrefch',
    phoneIphone632gb: ':nth-child(5) > .card > .card-block > .card-title > .hrefch',
    phoneSonyXperiaZ5: ':nth-child(6) > .card > .card-block > .card-title > .hrefch',
    phoneHTCOneM9: ':nth-child(7) > .card > .card-block > .card-title > .hrefch',
    laptopsCategory: '[onclick="byCat(\'notebook\')"]',
    laptopSonyVaioI5: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
    laptopSonyVaioI7: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',
    laptopMacBookAir: ':nth-child(3) > .card > .card-block > .card-title > .hrefch',
    laptopDellI78gb: ':nth-child(4) > .card > .card-block > .card-title > .hrefch',
    laptop2017Dell156Inch: ':nth-child(5) > .card > .card-block > .card-title > .hrefch',
    laptopMacBookPro: ':nth-child(6) > .card > .card-block > .card-title > .hrefch',
    monitorsCategory: '[onclick="byCat(\'monitor\')"]',
    monitorAppleMonitor24: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
    monitorASUSFullHD: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',
    phoneSamsungGalaxyS6Pic: ':nth-child(1) > .card > :nth-child(1) > .card-img-top',
    phoneIphone632gbPic: ':nth-child(5) > .card > :nth-child(1) > .card-img-top',
    laptopMacBookAirPic: ':nth-child(3) > .card > :nth-child(1) > .card-img-top',
    monitorAppleMonitor24Pic: ':nth-child(1) > .card > :nth-child(1) > .card-img-top'
    }

var urls = {
        firstImageCarousel: 'https://www.demoblaze.com/Samsung1.jpg',
        secondImageCarousel: 'https://www.demoblaze.com/nexus1.jpg',
        thirdImageCarousel: 'https://www.demoblaze.com/iphone1.jpg'
    }

var localPath = {
        firstImageCarousel: 'C:/Users/Public/Downloads/Samsung1.jpg',
        secondImageCarousel: 'C:/Users/Public/Downloads/nexus1.jpg',
        thirdImageCarousel: 'C:/Users/Public/Downloads/iphone1.jpg'
    }

    class HomePage {
    waitForHomePageSuccessfulResponse() { 
        cy.intercept('/')
        .as('getHomeResponse')
        cy.visit('/')
        cy.wait('@getHomeResponse', { timeout: 10000 })
        .its('response.statusCode')
        .should('eq', 200)
        }
    featuredItemCarousel() { return cy.get(pageLocators.featuredItemCarousel); }
    leftArrowCarousel() { return cy.get(pageLocators.leftArrowCarousel); }
    rightArrowCarousel() { return cy.get(pageLocators.rightArrowCarousel); }
    carouselIndicatorZero() { return cy.get(pageLocators.carouselIndicatorZero); }
    carouselIndicatorOne() { return cy.get(pageLocators.carouselIndicatorOne); }
    carouselIndicatorTwo() { return cy.get(pageLocators.carouselIndicatorTwo); }
    firstImageCarousel() { return cy.request({
        url: urls.firstImageCarousel, encoding: 'binary',
      }); }
    secondImageCarousel() { return cy.request({
        url: urls.secondImageCarousel, encoding: 'binary',
      }); }
    thirdImageCarousel() { return cy.request({
        url: urls.thirdImageCarousel, encoding: 'binary',
      }); }
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
    phonesCategory() { return cy.get(pageLocators.phonesCategory); }
    phoneSamsungGalaxyS6() { return cy.get(pageLocators.phoneSamsungGalaxyS6); }
    phoneSamsungGalaxyS6Pic() { return cy.get(pageLocators.phoneSamsungGalaxyS6Pic); }
    phoneNokiaLumia1520() { return cy.get(pageLocators.phoneNokiaLumia1520); }
    phoneNexus6() { return cy.get(pageLocators.phoneNexus6); }
    phoneSamsungGalaxyS7() { return cy.get(pageLocators.phoneSamsungGalaxyS7); }
    phoneIphone632gb() { return cy.get(pageLocators.phoneIphone632gb); }
    phoneIphone632gbPic() { return cy.get(pageLocators.phoneIphone632gbPic); }
    phoneSonyXperiaZ5() { return cy.get(pageLocators.phoneSonyXperiaZ5); }
    phoneHTCOneM9() { return cy.get(pageLocators.phoneHTCOneM9); }
    laptopsCategory() { return cy.get(pageLocators.laptopsCategory); }
    laptopSonyVaioI5() { return cy.get(pageLocators.laptopSonyVaioI5); }
    laptopSonyVaioI7() { return cy.get(pageLocators.laptopSonyVaioI7); }
    laptopMacBookAir() { return cy.get(pageLocators.laptopMacBookAir); }
    laptopMacBookAirPic() { return cy.get(pageLocators.laptopMacBookAirPic); }
    laptopDellI78gb() { return cy.get(pageLocators.laptopDellI78gb); }
    laptop2017Dell156Inch() { return cy.get(pageLocators.laptop2017Dell156Inch); }
    laptopMacBookPro() { return cy.get(pageLocators.laptopMacBookPro); }
    monitorsCategory() { return cy.get(pageLocators.monitorsCategory); }
    monitorAppleMonitor24() { return cy.get(pageLocators.monitorAppleMonitor24); }
    monitorAppleMonitor24Pic() { return cy.get(pageLocators.monitorAppleMonitor24Pic); }
    monitorASUSFullHD() { return cy.get(pageLocators.monitorASUSFullHD); }



    visibleFeaturedItemCarousel() { return this.featuredItemCarousel().should('be.visible'); }
    clickLeftArrowCarousel() { return this.leftArrowCarousel().click(); }
    clickRightArrowCarousel() { return this.rightArrowCarousel().click(); }
    clickCarouselIndicatorZero() { return this.carouselIndicatorZero().click(); }
    visibleCarouselIndicatorZero() { return this.carouselIndicatorZero().should('be.visible'); }
    clickCarouselIndicatorOne() { return this.carouselIndicatorOne().click(); }
    visibleCarouselIndicatorOne() { return this.carouselIndicatorOne().should('be.visible'); }
    clickCarouselIndicatorTwo() { return this.carouselIndicatorTwo().click(); }
    visibleCarouselIndicatorTwo() { return this.carouselIndicatorTwo().should('be.visible'); }
    downloadFirstImageCarousel() { return this.firstImageCarousel().then((response) => {
        cy.writeFile(localPath.firstImageCarousel, response.body, 'binary')
      }); }
    downloadSecondImageCarousel() { return this.secondImageCarousel().then((response) => {
        cy.writeFile(localPath.secondImageCarousel, response.body, 'binary')
      }); }   
    downloadThirdImageCarousel() { return this.thirdImageCarousel().then((response) => {
        cy.writeFile(localPath.thirdImageCarousel, response.body, 'binary')
      }); }   
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
    clickPhonesCategory() { return this.phonesCategory().click(); }
    visiblePhoneSamsungGalaxyS6() { return this.phoneSamsungGalaxyS6().should('be.visible'); }
    textPhoneSamsungGalaxyS6() { return this.phoneSamsungGalaxyS6().should('have.text', 'Samsung galaxy s6'); }
    visiblePhoneNokiaLumia1520() { return this.phoneNokiaLumia1520().should('be.visible'); }
    textPhoneNokiaLumia1520() { return this.phoneNokiaLumia1520().should('have.text', 'Nokia lumia 1520'); }
    visiblePhoneNexus6() { return this.phoneNexus6().should('be.visible'); }
    textPhoneNexus6() { return this.phoneNexus6().should('have.text', 'Nexus 6'); }
    visiblePhoneSamsungGalaxyS7() { return this.phoneSamsungGalaxyS7().should('be.visible'); }
    textPhoneSamsungGalaxyS7() { return this.phoneSamsungGalaxyS7().should('have.text', 'Samsung galaxy s7'); }
    visiblePhoneIphone632gb() { return this.phoneIphone632gb().should('be.visible'); }
    textPhoneIphone632gb() { return this.phoneIphone632gb().should('have.text', 'Iphone 6 32gb'); }
    visiblePhoneSonyXperiaZ5() { return this.phoneSonyXperiaZ5().should('be.visible'); }
    textPhoneSonyXperiaZ5() { return this.phoneSonyXperiaZ5().should('have.text', 'Sony xperia z5'); }
    visiblePhoneHTCOneM9() { return this.phoneHTCOneM9().should('be.visible'); }
    textPhoneHTCOneM9() { return this.phoneHTCOneM9().should('have.text', 'HTC One M9'); }
    clickLaptopsCategory() { return this.laptopsCategory().click(); }
    visibleLaptopSonyVaioI5() { return this.laptopSonyVaioI5().should('be.visible'); }
    textLaptopSonyVaioI5() { return this.laptopSonyVaioI5().should('have.text', 'Sony vaio i5'); }
    visibleLaptopSonyVaioI7() { return this.laptopSonyVaioI7().should('be.visible'); }
    textLaptopSonyVaioI7() { return this.laptopSonyVaioI7().should('have.text', 'Sony vaio i7\n'); }
    visibleLaptopMacBookAir() { return this.laptopMacBookAir().should('be.visible'); }
    textLaptopMacBookAir() { return this.laptopMacBookAir().should('have.text', 'MacBook air'); }
    visibleLaptopDellI78gb() { return this.laptopDellI78gb().should('be.visible'); }
    textLaptopDellI78gb() { return this.laptopDellI78gb().should('have.text', 'Dell i7 8gb'); }
    visibleLaptop2017Dell156Inch() { return this.laptop2017Dell156Inch().should('be.visible'); }
    textLaptop2017Dell156Inch() { return this.laptop2017Dell156Inch().should('have.text', '2017 Dell 15.6 Inch'); }
    visibleLaptopMacBookPro() { return this.laptopMacBookPro().should('be.visible'); }
    textLaptopMacBookPro() { return this.laptopMacBookPro().should('have.text', 'MacBook Pro'); }
    clickMonitorsCategory() { return this.monitorsCategory().click(); }
    visibleMonitorAppleMonitor24() { return this.monitorAppleMonitor24().should('be.visible'); }
    textMonitorAppleMonitor24() { return this.monitorAppleMonitor24().should('have.text', 'Apple monitor 24'); }
    visibleMonitorASUSFullHD() { return this.monitorASUSFullHD().should('be.visible'); }
    textMonitorASUSFullHD() { return this.monitorASUSFullHD().should('have.text', 'ASUS Full HD'); }
    clickPhoneSamsungGalaxyS6Pic() { return this.phoneSamsungGalaxyS6Pic().click(); }
    clickPhoneIphone632gbPic() { return this.phoneIphone632gbPic().click(); }
    clickLaptopMacBookAirPic() { return this.laptopMacBookAirPic().click(); }
    clickMonitorAppleMonitor24Pic() { return this.monitorAppleMonitor24Pic().click(); }

}
    
    const homePage = new HomePage();
    export default homePage;
