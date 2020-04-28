// Listando todos os registros
db.alunos.find();

// Listando todos os registros com a propriedade "nome" cadastrada como "Fernando"
db.alunos.find({ nome: "Fernando" });

// Listando todos os registros com a propriedade "nome" cadastrada como "Fernando"
// e a propeidade "idade" casdastrado como "28"
db.alunos.find({ nome: "Fernando", idade: 28 });

// Listando todos os registros com a propriedade "habilidades.nome" como "C#"(Lembrando que
// que a propriedade habilidades eh uma lista)
db.alunos.find({ "habilidades.nome" : "c#" });