import  SearchResultsPage from './searchResultsPage'

class MainPage{
    open(){
        cy.visit(`${Cypress.env('googleURL')}/collection/accessories`);
    }
    get searchIcon(){
        return cy.get('.header-search-icon');
    }
    get searchInput(){
        return cy.get('input[aria-label = "Search Google Store"]');
    }
    performSearch(productToSearch){
        var a = this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }
}

export default new MainPage();