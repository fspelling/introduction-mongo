// De inicio vamos importar na collection de alunos um array de objetos json
// mongoimport -c alunos jsonArray < alunos.json

// Buscar documentos agregados com devida aproximidade entres eles em um ponto geografico
// Ou seja, buscar os documentos com os pontos geograficos mais proximo referente as coordenadas informadas,
// atravez da propriedade "near" do operador $geoNear(aproximidade geografica)
db.alunos.aggregate([{
    $geoNear : {
        near : {
            type: "Point",
            coordinates : [-23.5177818528356, -46.5842800098471]
        }
    }
}]);

// Obviamente o script acima nao ira funcionar,
// pois nao definimos em qual campo na collection de alunos o mongo ira realizar a busca de aproximacao geografica
// Sabendo disso, vamos criar um indice de busca na collection de alunos, onde vamos definir
// que no campo "localizacao" sera a busca de aproximidade geografica que o mongo ira realizar na consulta do aggregate
// Vale destacar que o tipo de estrutura na criacao do nosso indice da busca de aproximidade, sera "2dsphere"(esfera 2d)
db.alunos.createIndex({
    localizacao : "2dsphere"
});

// Agora que o mongo sabe onde localizar os pontos das coordenadas na collection de alunos atravez do indice criado,
// precisamos definir na busca do aggregate, qual tipo de calculo que sera feito na distancia entre esses pontos,
// que nesse caso sera como esfera e NAO LINEAR, logo usamos "spherical : true"
db.alunos.aggregate([{
    $geoNear : {
        near : {
            type: "Point",
            coordinates : [-23.5177818528356, -46.5842800098471]
        },
        spherical : true
    }
}]);

// Para finalizar nossa busca de aproximidade, apos definir o tipo de calculo de distancia que vamos utilizar,
// precisamos informar um nome de campo que retorna-ra na busca dizendo qual o resultado da distancia obtida no calculo,
// atravez na propriedade "distanceField"
db.alunos.aggregate([{
    $geoNear : {
        near : {
            type: "Point",
            coordinates : [-23.5177818528356, -46.5842800098471]
        },
        spherical : true,
        distanceField : "distancia"
    }
}]);

// Caso queiramos limitar a quantidade de documentos no retorno na busca de aproximidade, 
// usamos o operador $limit apos o primeiro objeto json no array de parametro 
db.alunos.aggregate([{
    $geoNear : {
        near : {
            type: "Point",
            coordinates : [-23.5177818528356, -46.5842800098471]
        },
        distanceField : "distancia",
        spherical : true
    }
}, { $limit: 3 }]);

// Caso queiramos ignorar/skipar os primeiros documentos no retorno na busca de aproximidade, 
// usamos o operador $skip apos o primeiro objeto json no array de parametro
db.alunos.aggregate([{
    $geoNear : {
        near : {
            type: "Point",
            coordinates : [-23.5177818528356, -46.5842800098471]
        },
        distanceField : "distancia",
        spherical : true
    }
}, { $skip: 1 }, { $limit: 3 }]);