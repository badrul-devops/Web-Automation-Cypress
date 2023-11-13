import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

    Given(`Visit the website`, () => {
        // [Given] Sets up the initial state of the system.
        cy.visit(data.url);
    });
    
    When(`Click on login Option`, () => {
        cy.wait(data.oneSecond);
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.LoginButtonHome).click({force:true});

    });
    
    When(`Enter Email And Password`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.EmailBox).type(data.Email);
        cy.wait(data.oneSecond);
        cy.xpath(locator.PasswordBox).click({force:true});
        cy.xpath(locator.PasswordBox).type(data.Password);
 
    });
    
    When(`Click on login button`, () => {
        cy.wait(data.oneSecond);
        cy.xpath(locator.LoginButton).click({force:true});
    });
    
    Given(`Go to W3school`, () => {
        cy.visit(data.url);
        
    });
    
    // When(`Click on login Option`, () => {
    //     cy.wait(data.oneSecond);
    //     // [When] Describes the action or event that triggers the scenario.
    //     cy.xpath(locator.LoginButtonHome).click({force:true});
    // });
    
    Then(`Check that Login page is Displayed`, () => {
       cy.xpath(locator.LoginPage).should('be.visible');
       cy.wait(data.oneSecond);

    });
    
    Then(`Check that EmailBox is Displayed`, () => {
        cy.xpath(locator.EmailBox).should('be.visible');
    });
    
    When(`Inpun Email in EmailBox`, () => {
        cy.xpath(locator.EmailBox).type(data.Email);
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that PasswordBox is Displayed`, () => {
        cy.xpath(locator.PasswordBox).should('be.visible');

    });
    
    When(`Inpun Password in PasswordBox`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.PasswordBox).type(data.Password);
        cy.wait(data.oneSecond);
    });
    
    When(`Click on Login Button`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.LoginButton).click({force:true});
        cy.wait(data.oneSecond);
    });
    
    Given(`Check that Logo is Displayed`, () => {
        // [Given] Sets up the initial state of the system.
        cy.xpath(locator.logo).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on Logo`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.logo).click({force:true});
    });
    
    Then(`Check that Home page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HomePage).should('be.visible');
        cy.wait(data.oneSecond);

    });
    
    Given(`Check that HTML Section is Available`, () => {
        // [Given] Sets up the initial state of the system.
        cy.xpath(locator.HtmlSection).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on HTML Section`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.HtmlSection).click({force:true});
    });
    
    Then(`Check that Home Tutorial is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlPage).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that Sidebar is Available`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.SideBar).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that HTML Introduction Section`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlIntroductionSection).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on HTML Introduction Section`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.HtmlIntroductionSection).click({force:true});
    });
    
    Then(`Check that Home Introduction page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlPage).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that HTML Basic Section`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlBasicSection).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on HTML Basic Section`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.HtmlBasicSection).click({force:true});
    });
    
    Then(`Check that Home Basic page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlPage).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that Try it YourSelf is Available`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.TryitYourself).should('be.visible');
        cy.wait(data.oneSecond);
        
    });
    
    When(`Click on Try it YourSelf`, () => {
        const TryitYourselfXPath = locator.TryitYourself;

        // Use cy.get to select the element by class and index
        cy.get(".w3-btn.w3-margin-bottom").eq(0)
          .invoke('removeAttr', 'target') // Remove the 'target' attribute
          .then(() => {
            // Click using XPath
            cy.xpath(TryitYourselfXPath).click({ force: true });
          });
    });
    
    Then(`Check that Try it YourSelf page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.RunButton).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on Run Button`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.RunButton).click({force:true});
    });
    
    Then(`Check that Code output is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.ResultOutput).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that Next Button is Available`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.NextButton).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on Next Button`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.NextButton).click({force:true});
    });
    
    Then(`Check that Next page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlPage).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that Previous Button is Available`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.PreviousButton).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on Previous Button`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.PreviousButton).click({force:true});
    });
    
    Then(`Check that Previous page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.HtmlIntroductionSection).should('be.visible');
        cy.wait(data.oneSecond);
    });

    Then(`Check that Learning page is Displayed`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.LearningPage).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    Then(`Check that Logout Option is Available`, () => {
        // [Then] Describes the expected outcome or result of the scenario.
        cy.xpath(locator.LogoutButton).should('be.visible');
        cy.wait(data.oneSecond);
    });
    
    When(`Click on Logout Option`, () => {
        // [When] Describes the action or event that triggers the scenario.
        cy.xpath(locator.LogoutButton).click({force:true});
    });


    Given("Go to Home page", () => {
        cy.xpath(locator.HomePage).should('be.visible');
        
    });

    Then("Check that Search Box is Displayed", () => {
        cy.xpath(locator.SearchBox).should('be.visible');
        cy.wait(data.oneSecond);
        
    });

    When("Click on Search Box", () => {
        cy.xpath(locator.SearchBox).click({force:true});
        
    });

    When("Input something in Search Box", () => {
        cy.xpath(locator.SearchBox).type("HTML");
        cy.wait(data.oneSecond);
        
    });
    When("Click on Search Button", () => {
        cy.xpath(locator.SearchButton).click({force:true});
        
    });
    Then("Check that Search Result is Displayed", () => {
        cy.xpath(locator.HtmlPage).should('be.visible');
        cy.wait(data.oneSecond);
        
    });
        

        
