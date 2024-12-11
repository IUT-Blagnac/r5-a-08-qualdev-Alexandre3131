# language: en
Feature: Reviewing a Ph.D. Thesis
    Every PhD thesis review has some recurrent steps

Scenario: A reviewer, being an expert on the field, should be cited somewhere
    Given A PhD thesis to review
    And a reviewer Bruel
    Then The thesis should cite the reviewer's work

Scenario: A Ph.D. thesis should be an original work
    Given A PhD thesis to review
    Then The PhD thesis should be checked against plagiarism