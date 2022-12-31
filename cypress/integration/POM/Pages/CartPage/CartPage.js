// /Pages/CartPage/CartPage.js
const pageLocators = {
  productsTitle: '.col-lg-8 > h2',
  cartFirstItem: '#tbodyid > :nth-child(1) > :nth-child(4) > a',
  cartSecondItem: '#tbodyid > :nth-child(2) > :nth-child(4) > a',
  cartThirdItem: '#tbodyid > :nth-child(3) > :nth-child(4) > a',
  cartLastItem: '#tbodyid > :nth-child(4) > :nth-child(4) > a',
  placeOrderButton: '.col-lg-1 > .btn',
  orderModalHeader: '#orderModal > .modal-dialog > .modal-content > .modal-header',
  orderModalLabel: '#orderModalLabel',
  inputName: '#name',
  inputCountry: '#country',
  inputCity: '#city',
  inputCard: '#card',
  inputMonth: '#month',
  inputYear: '#year',
  purchaseButton: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  confirmButton: '.confirm',
  closeButton: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
}

class CartPage {
  productsTitle () { return cy.get(pageLocators.productsTitle) }
  cartFirstItem () { return cy.get(pageLocators.cartFirstItem) }
  cartSecondItem () { return cy.get(pageLocators.cartSecondItem) }
  cartThirdItem () { return cy.get(pageLocators.cartThirdItem) }
  cartLastItem () { return cy.get(pageLocators.cartLastItem) }
  placeOrderButton () { return cy.get(pageLocators.placeOrderButton) }
  orderModalHeader () { return cy.get(pageLocators.orderModalHeader) }
  orderModalLabel () { return cy.get(pageLocators.orderModalLabel) }
  inputName () { return cy.get(pageLocators.inputName) }
  inputCountry () { return cy.get(pageLocators.inputCountry) }
  inputCity () { return cy.get(pageLocators.inputCity) }
  inputCard () { return cy.get(pageLocators.inputCard) }
  inputMonth () { return cy.get(pageLocators.inputMonth) }
  inputYear () { return cy.get(pageLocators.inputYear) }
  purchaseButton () { return cy.get(pageLocators.purchaseButton) }
  confirmButton () { return cy.get(pageLocators.confirmButton) }
  closeButton () { return cy.get(pageLocators.closeButton) }

  clickDeleteFirstItem () { return this.cartFirstItem().click() }
  visibleCartFirstItem () { return this.cartFirstItem().should('be.visible') }
  visibleCartSecondItem () { return this.cartSecondItem().should('be.visible') }
  visibleCartThirdItem () { return this.cartThirdItem().should('be.visible') }
  notExistCartLastItem () { return this.cartLastItem().should('not.exist') }
  visiblePlaceOrderButton () { return this.placeOrderButton().should('be.visible') }
  clickPlaceOrderButton () { return this.placeOrderButton().click() }
  purchaseInputName (name) { this.inputName().clear().type(name) }
  purchaseInputCountry (country) { this.inputCountry().clear().type(country) }
  purchaseInputCity (city) { return this.inputCity().clear().type(city) }
  purchaseInputCard (card) { return this.inputCard().clear().type(card) }
  purchaseInputMonth (month) { return this.inputMonth().clear().type(month) }
  purchaseInputYear (year) { return this.inputYear().clear().type(year) }
  clickPurchaseButton () { return this.purchaseButton().click() }
  clickConfirmButton () { return this.confirmButton().click() }
  noVisibleConfirmButton () { return this.confirmButton().should('not.be.visible') }
  clickCloseButton () { return this.closeButton().click() }
}

const cartPage = new CartPage()
export default cartPage
