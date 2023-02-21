Feature: Navigate to Career section and verify user can apply

  Scenario: Verify I can navigate to 'Software Test Engineer' application
    Given Go to the playwright website
    When I visit the careers page
    And I navigate to the open positions
    Then I should be able to see the application for 'Software Test Engineer'