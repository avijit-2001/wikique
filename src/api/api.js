import axios from "axios";
import { WBK } from "wikibase-sdk";
const wdk = WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

export const getGenreA = async (id) => {
  let listofGenre = new Set();
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
    LIMIT 1000
    `;

  const [url, body] = wdk.sparqlQuery(sparql).split("?");
  const { data } = await axios.post(url, body);
  var len = data["results"]["bindings"].length;
  for (let i = 0; i < len; i++) {
    listofGenre.add(data["results"]["bindings"][i]["genreName"]["value"]);
  }
  return listofGenre;
};

export const getGenreD = async (id) => {
  let listofGenre = new Set();
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
  }LIMIT 1000
  `

  const [url, body] = wdk.sparqlQuery(sparql).split("?");
  const { data } = await axios.post(url, body);
  var len = data["results"]["bindings"].length;
  console.log('xxxy', len);
  for (let i = 0; i < len; i++) {
    listofGenre.add(data["results"]["bindings"][i]["genreName"]["value"]);
  }
  return listofGenre;
};
