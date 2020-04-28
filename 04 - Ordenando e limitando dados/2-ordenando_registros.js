// Listando e ordenando os documentos de ordem crescente referente a porpriedade "nome"
db.alunos.find().sort({ "nome" : 1 });

// Listando e ordenando os documentos de ordem decrescente referente a porpriedade "nome"
db.alunos.find().sort({ "nome" : -1 });

// Listando o 10 primeiros documentos da collection
db.alunos.find().limit(10)

// Listando o 10 primeiros documentos da collection em ordem crescente referente a porpriedade "nome"
db.alunos.find().limit(10).sort({ "nome" : 1 });