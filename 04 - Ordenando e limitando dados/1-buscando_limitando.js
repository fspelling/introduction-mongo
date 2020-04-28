// Listando todos os documentos que tenham alguma nota igual a 7
db.alunos.find({ "notas" : 7 });

// Listando todos os documentos que tenham alguma nota maior que 7
db.alunos.find({ "notas" : { $gt : 7 } });

// Listando o primeiro documento que tenha alguma nota maior que 7
db.alunos.findOne({ "notas" : { $gt : 7 } });