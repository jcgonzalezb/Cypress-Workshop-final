// /Pages/Phones/Iphone632gb.js
const pageLocators = {
  productName: '.name',
  addToCartButton: '.col-sm-12 > .btn',
  cartHeader: '#cartur',
  homeHeader: '.active > .nav-link'
}

class Iphone632gb {
  productName () { return cy.get(pageLocators.productName) }
  addToCartButton () { return cy.get(pageLocators.addToCartButton) }
  cartHeader () { return cy.get(pageLocators.cartHeader) }
  homeHeader () { return cy.get(pageLocators.homeHeader) }

  visibleProductName () { return this.productName().should('be.visible') }
  textProductName () { return this.productName().should('have.text', 'Iphone 6 32gb') }
  visibleAddToCartButton () { return this.addToCartButton().should('be.visible') }
  clickAddToCartButton () { return this.addToCartButton().click() }
  clickHomeHeader () { return this.homeHeader().click() }
}

const iphone632gb = new Iphone632gb()
export default iphone632gb
