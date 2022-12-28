// /Pages/CartPage/CartPage.js
var pageLocators = {
    productsTitle: '.col-lg-8 > h2',
    }

    class CartPage {
    productsTitle() { return cy.get(pageLocators.productsTitle); }

    visibleProductsTitle() { return this.productsTitle().should('be.visible'); }
    textTitleProducts() { return this.productsTitle().should('have.text', 'Products'); }
    }
    
    const cartPage = new CartPage();
    export default cartPage;
