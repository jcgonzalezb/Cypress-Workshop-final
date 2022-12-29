var pageLocators = {
    productName: '.name',
    addToCartButton: '.col-sm-12 > .btn',
    cartHeader: '#cartur',
    homeHeader: '.active > .nav-link'
    }

    class AppleMonitor24 {
    productName() { return cy.get(pageLocators.productName); }
    addToCartButton() { return cy.get(pageLocators.addToCartButton); }
    cartHeader() { return cy.get(pageLocators.cartHeader); }
    homeHeader() {return cy.get(pageLocators.homeHeader); }

    visibleProductName() { return this.productName().should('be.visible'); }
    textProductName() { return this.productName().should('have.text', 'Apple monitor 24'); }
    visibleAddToCartButton() { return this.addToCartButton().should('be.visible'); }
    clickAddToCartButton() { return this.addToCartButton().click(); }
    clickHomeHeader() { return this.homeHeader().click(); }
    }
    
    const appleMonitor24 = new AppleMonitor24();
    export default appleMonitor24;