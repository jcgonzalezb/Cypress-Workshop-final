// /Pages/CartPage/CartPage.js
var pageLocators = {
    productsTitle: '.col-lg-8 > h2',
    deleteFirstItem: '#tbodyid > :nth-child(1) > :nth-child(4) > a',
    placeOrderButton: '.col-lg-1 > .btn',
    orderModal: '#orderModal',
    orderModalHeader: '#orderModal > .modal-dialog > .modal-content > .modal-header',
    orderModalLabel: '#orderModalLabel',
    inputName: '#name',
    inputCountry: '#country',
    inputCity: '#city',
    inputCard: '#card',
    inputMonth: '#month',
    inputYear: '#year',
    purchaseButton: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    }

    class CartPage {
    productsTitle() { return cy.get(pageLocators.productsTitle); }
    deleteFirstItem() { return cy.get(pageLocators.deleteFirstItem); }
    placeOrderButton() { return cy.get(pageLocators.placeOrderButton); }
    orderModal() { return cy.get(pageLocators.orderModal); }
    orderModalHeader() { return cy.get(pageLocators.orderModalHeader); }
    orderModalLabel() { return cy.get(pageLocators.orderModalLabel); }
    inputName() { return cy.get(pageLocators.inputName); }
    inputCountry() { return cy.get(pageLocators.inputCountry); }
    inputCity() { return cy.get(pageLocators.inputCity); }
    inputCard() { return cy.get(pageLocators.inputCard); }
    inputMonth() { return cy.get(pageLocators.inputMonth); }
    inputYear() { return cy.get(pageLocators.inputYear); }
    purchaseButton() { return cy.get(pageLocators.purchaseButton); }
    orderModalHeaderDisplay() { return cy.get(pageLocators.orderModalHeader).should('not.have.css', 'display', 'none'); }
    
    visibleProductsTitle() { return this.productsTitle().should('be.visible'); }
    textProductsTitle() { return this.productsTitle().should('have.text', 'Products'); }
    clickDeleteFirstItem() { return this.deleteFirstItem().click(); }
    clickPlaceOrderButton() { return this.placeOrderButton().click(); }

    visibleOrderModal() { return this.orderModal().should('be.visible'); }
    visibleOrderModalHeader() { return this.orderModalHeader().should('be.visible'); }
    visibleOrderModalLabel() { return this.orderModalLabel().should('be.visible'); }
    visibleInputName() { return this.inputName().should('be.visible'); }
    clickInputName() { return this.InputName().click(); }
    cleanInputName() { return this.inputName().clear(); }
    purchaseAddName(name) { return this.inputName().type(name + '{enter}'); }



    }
    
    const cartPage = new CartPage();
    export default cartPage;
