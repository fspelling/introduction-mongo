// Listando os registros que atendendem qualquer condicao de chave e valor relacionada no array
// utilizando o operador OR
db.alunos.find({ $or : [
    { "habilidades.nome" : "c#" },
    { "habilidades.nome" : "javascript" }
]});

// Listando os registros que atendendem qualquer condicao de chave e valor relacionada no array
// utilizando o operador IN
db.alunos.find({ "habilidades.nome" : { $in : ["c#", "javascript"] }});


// Listando os registros com a propriedade "nome" igual a "Fernando" e(AND) que atendendem a
// qualquer condicao de chave e valor relacionada no array utilizando o operador OR
db.alunos.find({
    "nome" : "Fernando", 
     $or : [
         { "habilidades.nome" : "c#" },
         { "habilidades.nome" : "javascript" }
     ]
 });

 // Listando os registros com a propriedade "nome" igual a "Fernando" e(AND) que atendendem a
// qualquer condicao de chave e valor relacionada no array utilizando o operador IN
db.alunos.find({
    "nome" : "Fernando", 
     "habilidades.nome" : { $in : [ "c#", "javascript" ] }
 });