/// <reference types="cypress" />
import Homepage from '../../../support/pageobject/Homepage'
import { Given,When,Then,And,But } from "cypress-cucumber-preprocessor/steps";

const homepage = new Homepage()

Given('user is navigating to commbank home page', () =>
{   
    cy.visit(Cypress.env('url'));
  
  })
  
When('user clicks on tab {string}', function(tabname) 
{
  if (Cypress.env('viewportWidth')>768){
  homepage.gettablist().contains(tabname).click()
  }else
  {
    homepage.getHamburgerMenu().click()
    homepage.getmenulistMobile().contains(tabname).click()
  }
})

  Then('user validates the {string} page has been loaded successfully', function(tabname) 
  {
    homepage.getPageHeading().contains(tabname, {matchCase: false})
  }) 

  When('user clicks the below tabs on homepage to validate', function(dataTable) 
{
  dataTable.hashes().forEach( tab=> {
    var headinglist;
    homepage.gettablist().contains(tab).click()
    headinglist.push(homepage.getPageHeading())
  });

  Then('user validates all pages loaded successfully', function() 
  {
    homepage.getPageHeading().contains(tabname, {matchCase: false})
  }) 

  
})