// Atualizando o primeiro documento onde o "nome" for igual a "Fernando", incrementando o valor "10" no array "notas"
db.alunos.update({ "nome" : "Fernando" }, { $push : { "notas" : 10 }});

// Atualizando o primeiro documento onde o "nome" for igual a "Fernando", incrementando o valores 
// "10" e "6" no array "notas"
// vale destacar que dessa forma estamos adicionando um novo array dentro do array de "notas", entao MUITO CUIDADO
// o resultado seria assim: 
// notas: [6, 10, [10, 6]]
db.alunos.update({ "nome" : "Fernando" }, { $push : { "notas" : [10, 6] }});

// Atualizando o primeiro documento onde o "nome" for igual a "Fernando", incrementando o valores 
// "10" e "6" no array "notas"
// vale destacar que dessa vez estamos incrementando os novos valores no array de "notas" corretamente, atraves
// do operador $each onde vai iterando para cada elemento e consequentemente o $push ira adiciona-lo
db.alunos.update({ "nome" : "Fernando" }, { $push : { "notas" : { $each : [10, 6] }}});