class User {
    constructor(nom, email) {
      this.nom = nom;
      this.email = email;
      this.messagesEnvoyes = [];
    }

    send(otherUser, message) {
        this.messagesEnvoyes.push({ to: otherUser.nom, message });
        return `Message envoyé de ${this.nom} à ${otherUser.nom}`;
    }
    
    getMessagesEnvoyes() {
        return this.messagesEnvoyes;
    }
  }
  
  export default User;