declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select an element by a data-test attribute
     * @example cy.getByData('submit-button')
     */
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
  }
}
