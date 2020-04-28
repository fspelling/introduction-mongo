// Atualizando o primeiro documento com a propriedade "nome" igual a "Thiago" para o documento { "idade" : 24 }
// vale lembrar que o update do mongodb atualiza o documento inteiro e nao apenas a propriedade "idade" informada
db.alunos.update({ "nome" : "Thiago" }, { "idade" : 24 });

// Atualizando parcialmente o primeiro documento na propriedade "idade" com valor "24" onde o "nome" for igual a "Thiago"
// nesse caso estamos atualizando pacialmente atravez so "$set" e nao o documento inteiro
db.alunos.update({ "nome" : "Thiago" }, { $set : { idade : 24 } });

// Atualizando parcialmente "todos os documentos" na propriedade "idade" com valor "24" onde o "nome" for igual a "Thiago"
// com o novo parametro "{ "multi" : true }" estamos definindo que o update sera feito em todos os documentos onde a
// query seja verdadeira
db.alunos.update({ "nome" : "Thiago" }, { $set : { idade : 24 } }, { "multi" : true });