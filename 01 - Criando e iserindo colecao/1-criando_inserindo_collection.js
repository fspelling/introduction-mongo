// Criando uma collection
db.createCollection("alunos");

// Inserindo registros na collection
db.alunos.insert({  "nome" : "Fernando", "idade" : 28 });

// Listando registros da collection
db.alunos.find();