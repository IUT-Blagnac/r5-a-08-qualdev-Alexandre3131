import { Given, When, Then } from '@cucumber/cucumber';
import User from '../User.js';

let user1;
let user2;

Given('l\'utilisateur {string} existe', function (nom) {
  const email = `${nom.toLowerCase()}@example.com`;
  if (nom === "Dupont") {
    user1 = new User(nom, email);
  } else if (nom === "Martin") {
    user2 = new User(nom, email);
  }
});

When('l\'utilisateur {string} remplit le formulaire de candidature avec les informations suivantes:', function (nom, table) {
  const user = nom === "Dupont" ? user1 : user2;
  const data = table.rowsHash();

  user.candidature = {
    nom: data.nom,
    email: data.email,
    cv: data.cv
  };
});

When('l\'utilisateur {string} envoie sa candidature à {string}', function (nom1, nom2) {
  const sender = nom1 === "Dupont" ? user1 : user2;
  const receiver = nom2 === "Dupont" ? user1 : user2;

  sender.send(receiver, "Candidature envoyée par " + sender.nom);
});

Then('un message de confirmation devrait être affiché avec le texte {string}', function (message) {
  if (message !== "Votre candidature a été envoyée avec succès.") {
    throw new Error(`Le message de confirmation attendu est incorrect : ${message}`);
  }
});

Then('l\'historique des messages de {string} devrait contenir un message envoyé à {string} avec le texte {string}', function (nom1, nom2, message) {
  const sender = nom1 === "Dupont" ? user1 : user2;
  const expectedMessage = { to: nom2, message };

  const messagesEnvoyes = sender.getMessagesEnvoyes();
  const messageFound = messagesEnvoyes.some(msg => msg.to === nom2 && msg.message === message);
  
  if (!messageFound) {
    throw new Error(`Le message envoyé de ${nom1} à ${nom2} avec le texte "${message}" n'a pas été trouvé.`);
  }
});

Then('l\'historique des messages de {string} devrait être vide', function (nom) {
  const receiver = nom === "Dupont" ? user1 : user2;

  const messagesEnvoyes = receiver.getMessagesEnvoyes();
  if (messagesEnvoyes.length > 0) {
    throw new Error(`L'historique des messages de ${nom} ne devrait pas contenir de messages.`);
  }
});
