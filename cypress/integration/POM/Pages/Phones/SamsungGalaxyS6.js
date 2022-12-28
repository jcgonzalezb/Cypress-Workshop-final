var pageLocators = {
    productName: '.name',
    addToCartButton: '.col-sm-12 > .btn',
    cartHeader: '#cartur'
    }

    class SamsungGalaxyS6 {
    productName() { return cy.get(pageLocators.productName); }
    addToCartButton() { return cy.get(pageLocators.addToCartButton); }
    cartHeader() { return cy.get(pageLocators.cartHeader); }

    visibleProductName() { return this.productName().should('be.visible'); }
    textProductName() { return this.productName().should('have.text', 'Samsung galaxy s6'); }
    clickAddToCartButton() { return this.addToCartButton().click(); }
    clickCartHeader() { return this.cartHeader().click(); }
    }
    
    const samsungGalaxyS6 = new SamsungGalaxyS6();
    export default samsungGalaxyS6;