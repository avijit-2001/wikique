const axios = require('axios')
const wdk = require('wikidata-sdk')

async function func_dir(id){
    const sparql = `
    SELECT  ?movie ?movieName ?genreName
    WHERE
    { 
    ?movie wdt:P31    wd:Q11424 ;
            wdt:P57    ${id} .
    ?movie wdt:P1476 ?movieName.
    ?movie wdt:P136 ?genre.
    ?genre rdfs:label ?genreName.
    FILTER(LANG(?genreName)="en")
    }
    `
    
    const [url, body] = wdk.sparqlQuery(sparql).split('?')
    
    const {data} = await axios.post(url, body)
    
    var len=data['results']['bindings'].length

    for (let i = 0; i < len; i++) {
        console.log(data['results']['bindings'][i]['movieName']['value'])
        console.log(data['results']['bindings'][i]['genreName']['value'])
        console.log('\n')
    }
    
}


async function func_act(id){
    const sparql = `
    SELECT  ?movie ?movieName ?genreName
    WHERE
    { 
    ?movie wdt:P31    wd:Q11424 ;
            wdt:P161    ${id} .
    ?movie wdt:P1476 ?movieName.
    ?movie wdt:P136 ?genre.
    ?genre rdfs:label ?genreName.
    FILTER(LANG(?genreName)="en")
    }
    `
    
    const [url, body] = wdk.sparqlQuery(sparql).split('?')
    
    const {data} = await axios.post(url, body)
    
    var len=data['results']['bindings'].length

    for (let i = 0; i < len; i++) {
        console.log(data['results']['bindings'][i]['movieName']['value'])
        console.log(data['results']['bindings'][i]['genreName']['value'])
        console.log('\n')
    }
    
}


//func_dir("wd:Q42574") //James Cameron
//func_dir("wd:Q25191") //Christopher Nolan
//func_dir("wd:Q8877") //Steven Spielberg
//func_dir("wd:Q192990") //Guy Ritchie
//func_dir("wd:Q4465") //Peter Jackson
//func_dir("wd:Q295964") //Jon Favreau 
//func_dir("wd:Q18519749") //Jon Watts
//func_dir("wd:Q275402") //Sam Raimi
//func_dir("wd:Q512103") //Cary Joji Fukunaga
//func_dir("wd:Q337658") //Christopher McQuarrie

//func_act("wd:Q38111") //Leonardo DiCaprio
//func_act("wd:Q37079") //Tom Cruise 
//func_act("wd:Q165219") //Robert Downey Jr.
//func_act("wd:Q37175") //Johnny Depp 
//func_act("wd:Q40096") //Will Smith 
//func_act("wd:Q54314") //Chris Hemsworth
//func_act("wd:Q178348") //Chris Evans
//func_act("wd:Q244674") //Benedict Cumberbatch 
//func_act("wd:Q43416") //Keanu Reeves 
func_act("wd:Q42101") //Denzel Washington 