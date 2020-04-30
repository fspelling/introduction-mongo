// Atualizando o documento com a sua nova localizacao referente ao "_id" informado 
db.alunos.update(
    { "_id" : ObjectId("5ea650f00f0f8cfbe79f7a41") }, 
    { $set : { 
        "localizacao" : { 
            "cidade" : "Sao Paulo",
            "endereco" : "rua cantagalo, 2353" 
        }
    }
});

// Atualizando o documento para que possamos realizar a busca de aproximidade do mongodb
// Por padrao o mongodb realiza a busca de aproximidade com base em duas informacoes:
// "type" : "Point" -> Representa tipo de ponto geografico
// "coordinates" : [-23.542529, -46.551462] -> Representa as coordenadas de latitude e longitude
db.alunos.update(
    { "_id" : ObjectId("5ea650f00f0f8cfbe79f7a41") }, 
    { $set : { 
        "localizacao" : { 
            "cidade" : "Sao Paulo",
            "endereco" : "rua cantagalo, 2353",
            "type" : "Point",
            "coordinates" : [-23.542529, -46.551462]
        }
    }
});