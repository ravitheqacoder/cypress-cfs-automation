class Homepage{

gettablist(){
    return cy.get('.commbank-list >> a')
}
getPageHeading(){
    return cy.get('h1')
}

getHamburgerMenu(){
    return cy.get('.icon-menu')
}
getmenulistMobile(){
    return cy.get('.hamburger-menu-list > ul > > a')
}


}
export default Homepage;