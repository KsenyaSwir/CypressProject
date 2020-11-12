class SearchResultsPage{
    getProductByDocId(docId){
        return cy.get(`a[href = "/product/${docId}"]`);
    }
    clickBuyOnNextPage(obj){
        cy.xpath('//a[@class = "card-link-target"][@href="/product/pixel_buds"]').click()
        cy.get('div[class="hidden-xs bar-container background-white"]').contains('Buy').parent().click()
    }
    findElementByColor(obj){
      /*cy.server()
        cy.route("GET", '/config/pixel_buds').as('getToken')
        cy.get('div[class="mqn-lobby-swatch__cards-container"]')
        cy.wait('@getToken').its('status').should('eq', 200)*/
        let random = chance.pickone(obj.images).color
        cy.log(random.color_name)
        //cy.get('div[class="mqn-lobby-swatch__card__inner"]')

        cy.contains(random.color_name).should('exist').parent().next().next().find('button')

        //cy.get('div[class="mqn-lobby-swatch__cards-container"]').should('exist').contains(`${random.color_name}`).parent().parent().find('button').click()
    }
}

export default new SearchResultsPage()