Feature: Open Bikroy End to End

 Background: Login
      Given Visit the website
#     When Click on login Option
#     And Enter Email And Password 
#     And Click on login button


Scenario: Login to W3school
    Given Go to W3school
    When Click on login Option
    Then Check that Login page is Displayed
    And Check that EmailBox is Displayed
    When Inpun Email in EmailBox
    Then Check that PasswordBox is Displayed
    When Inpun Password in PasswordBox
    And Click on Login Button
     
Scenario: Verify logo work properly
    Given Check that Logo is Displayed
    When Click on Logo
    Then Check that Home page is Displayed

Scenario: Verify that HTML Section Work properly
    Given Check that HTML Section is Available
    When Click on HTML Section
    Then Check that Home Tutorial is Displayed
    And Check that Sidebar is Available
    And Check that HTML Introduction Section
    When Click on HTML Introduction Section
    Then Check that Home Introduction page is Displayed

Scenario: Verity That Try it YourSelf Work properly in HTML
    Given Check that HTML Section is Available
    When Click on HTML Section
    Then Check that Home Tutorial is Displayed
    And Check that Sidebar is Available
    And Check that HTML Basic Section
    When Click on HTML Basic Section
    Then Check that Home Basic page is Displayed
    And Check that Try it YourSelf is Available
    When Click on Try it YourSelf
    Then Check that Try it YourSelf page is Displayed
    When Click on Run Button
    Then Check that Code output is Displayed

Scenario: Verify that Next And Previous Button Work properly
    Given Check that HTML Section is Available
    When Click on HTML Section
    Then Check that Home Tutorial is Displayed
    And Check that Sidebar is Available
    And Check that HTML Basic Section
    When Click on HTML Basic Section
    Then Check that Home Basic page is Displayed
    And Check that Next Button is Available
    When Click on Next Button
    Then Check that Next page is Displayed
    And Check that Previous Button is Available
    When Click on Previous Button
    Then Check that Previous page is Displayed
@focus
Scenario: Verify that Logout successfully
    Given Go to W3school
    When Click on login Option
    Then Check that Login page is Displayed
    And Check that EmailBox is Displayed
    When Inpun Email in EmailBox
    Then Check that PasswordBox is Displayed
    When Inpun Password in PasswordBox
    And Click on Login Button
    Then Check that Learning page is Displayed
    And Check that Logout Option is Available
    When Click on Logout Option
    Then Check that Login page is Display
    
Scenario: Verify that Search Box Work properly
    Given Go to Home page
    Then Check that Search Box is Displayed
    When Click on Search Box
    And Input something in Search Box
    And Click on Search Button
    Then Check that Search Result is Displayed








