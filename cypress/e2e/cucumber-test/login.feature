Feature: login to application

As a Valid user 
I want to log into the application 

Scenario: Valid Login
Given I Opened Login page
When I submit Login
Then I Should see home page