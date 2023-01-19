let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({

    //id mongodb
   
    // id utiliser a present
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le premier param est le nom de la connexion pas la base 
// il accepte les vairations légéres du nom de la collection
// ca fonctionne par exemple avec 'Assignment' ou 'assignment'
// ou 'Assignments'
module.exports = mongoose.model('assignments', AssignmentSchema);
