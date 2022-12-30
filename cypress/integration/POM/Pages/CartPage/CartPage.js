// /Pages/CartPage/CartPage.js
var pageLocators = {
    productsTitle: '.col-lg-8 > h2',
    deleteFirstItem: '#tbodyid > :nth-child(1) > :nth-child(4) > a',
    placeOrderButton: '.col-lg-1 > .btn',
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
    orderModalHeader() { return cy.get(pageLocators.orderModalHeader); }
    orderModalLabel() { return cy.get(pageLocators.orderModalLabel); }
    inputName() { return cy.get(pageLocators.inputName); }
    inputCountry() { return cy.get(pageLocators.inputCountry); }
    inputCity() { return cy.get(pageLocators.inputCity); }
    inputCard() { return cy.get(pageLocators.inputCard); }
    inputMonth() { return cy.get(pageLocators.inputMonth); }
    inputYear() { return cy.get(pageLocators.inputYear); }
    purchaseButton() { return cy.get(pageLocators.purchaseButton); }
    startFixture() { return cy.fixture('buyerInfo').then((data) => {
        buyerInfoData = data
    }); }

    visibleProductsTitle() { return this.productsTitle().should('be.visible'); }
    textProductsTitle() { return this.productsTitle().should('have.text', 'Products'); }
    clickDeleteFirstItem() { return this.deleteFirstItem().click(); }
    clickPlaceOrderButton() { return this.placeOrderButton().click(); }
    clickParentModal() {return this.orderModalHeader().parent().parent().parent().click() }
    orderModalHeaderDisplay() { return this.orderModalHeader().should('not.have.css', 'display', 'none'); }
    orderModalLabelDisplay() { return this.orderModalLabel().should('not.have.css', 'display', 'none'); }
    visibleInputName() { return this.inputName().should('be.visible'); }
    clickInputName() { return this.inputName().click(); }
    cleanInputName() { return this.inputName().clear(); }
    purchaseInputName(name) { return this.inputName().type(name); }

    inputCountryDisplay() { return this.inputCountry().should('not.have.css', 'display', 'none'); }
    visibleInputCountry() { return this.inputCountry().should('be.visible'); }
    clickInputCountry() { return this.inputCountry().click(); }
    cleanInputCountry() { return this.inputCountry().clear(); }
    purchaseInputCountry(country) { return this.inputCountry().type(country); }
    purchaseInputCity(city) { return this.inputCountry().type(city); }







    }
    
    const cartPage = new CartPage();
    export default cartPage;
