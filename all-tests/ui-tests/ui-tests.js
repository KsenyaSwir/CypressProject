import Chance from 'chance'
import  SearchResultsPage from "../../page-objects/searchResultsPage";
import MainPage from "../../page-objects/mainPage";
/*
describe('Searcher', () => {
      it('Positive: Searcher', () => {
            cy.visit('https://store.google.com/us/collection/accessories?hl=en-US')
            cy.get('.header-search-icon').click()
            cy.get('input[aria-label = "Search Google Store"]').type(`Google Pixel Buds{enter}`)
            cy.get('a[href = "/product/google_pixel_buds"]').should('exist')
    })
})*/

describe('Searcher', () => {
      it('Positive: Searcher', () => {
            MainPage.open();
            MainPage.performSearch('Google Pixel Buds');

            SearchResultsPage.getProductByDocId("google_pixel_buds").should('exist')
      })
})