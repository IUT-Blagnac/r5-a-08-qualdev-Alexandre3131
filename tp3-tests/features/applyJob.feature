Feature: Candidater pour un travail

  Scenario: Candidater pour une offre d'emploi
    Given l'utilisateur "Dupont" existe
    And l'utilisateur "Martin" existe
    When l'utilisateur "Dupont" remplit le formulaire de candidature avec les informations suivantes:
      | champ   | valeur               |
      | nom     | Dupont               |
      | email   | dupont@example.com   |
      | cv      | cv_dupont.pdf        |
    And l'utilisateur "Dupont" envoie sa candidature à "Martin"
    Then un message de confirmation devrait être affiché avec le texte "Votre candidature a été envoyée avec succès."
    And l'historique des messages de "Dupont" devrait contenir un message envoyé à "Martin" avec le texte "Candidature envoyée par Dupont"
    And l'historique des messages de "Martin" devrait être vide
    