class Homepage{

gettablist(){
    return cy.get('.commbank-list >> a')
}
getPageHeading(){
    return cy.get('h1')
}

}
export default Homepage;