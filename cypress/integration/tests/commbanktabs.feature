Feature: Commbank home page tab validation

  @commbankTabs @uitests @regression
  Scenario: To validate home page tabs are working
    Given user is navigating to commbank home page
    When user clicks on tab "Banking"
    Then user validates the "Banking" page has been loaded successfully
    * user clicks on tab "Home loans"
    * user validates the "Home loans" page has been loaded successfully
    * user clicks on tab "Insurance"
    * user validates the "Insurance" page has been loaded successfully
    * user clicks on tab "Investing & super"
    * user validates the "Investing & super" page has been loaded successfully
    * user clicks on tab "Business"
    * user validates the "Business" page has been loaded successfully
    * user clicks on tab "Institutional"
    * user validates the "Institutional" page has been loaded successfully
