// /Pages/Phones/SamsungGalaxyS6.js
const pageLocators = {
  productName: '.name',
  addToCartButton: '.col-sm-12 > .btn',
  cartHeader: '#cartur',
  homeHeader: '.active > .nav-link'
}

class SamsungGalaxyS6 {
  productName () { return cy.get(pageLocators.productName) }
  addToCartButton () { return cy.get(pageLocators.addToCartButton) }
  cartHeader () { return cy.get(pageLocators.cartHeader) }
  homeHeader () { return cy.get(pageLocators.homeHeader) }

  visibleProductName () { return this.productName().should('be.visible') }
  textProductName () { return this.productName().should('have.text', 'Samsung galaxy s6') }
  visibleAddToCartButton () { return this.addToCartButton().should('be.visible') }
  clickAddToCartButton () { return this.addToCartButton().click() }
  clickHomeHeader () { return this.homeHeader().click() }
}

const samsungGalaxyS6 = new SamsungGalaxyS6()
export default samsungGalaxyS6
