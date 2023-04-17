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
    LIMIT 10000
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
  }LIMIT 10000
  `;

  const [url, body] = wdk.sparqlQuery(sparql).split("?");
  const { data } = await axios.post(url, body);
  var len = data["results"]["bindings"].length;
  for (let i = 0; i < len; i++) {
    listofGenre.add(data["results"]["bindings"][i]["genreName"]["value"]);
  }
  return listofGenre;
};

//Function to get the movies of a particular director and a particular genre
export const fetchMoviesByDirector = async (directorId, givenGenre) => {
  const sparql = `
    SELECT  ?movie ?movieName ?genreName
    WHERE
    { 
    ?movie wdt:P31    wd:Q11424 ;
            wdt:57    ${directorId} .
    ?movie wdt:P1476 ?movieName.
    ?movie wdt:P136 ?genre.
    ?genre rdfs:label ?genreName.
    FILTER(LANG(?genreName)="en")
    FILTER(REGEX(?genreName, "${givenGenre}", "i"))
    }
    `;

  const [url, body] = wdk.sparqlQuery(sparql).split("?");

  const { data } = await axios.post(url, body);

  var len = data["results"]["bindings"].length;

  let listofMovies = new Set();
  for (let i = 0; i < len; i++) {
    var temp = data["results"]["bindings"][i]["movie"]["value"].split("/");
    listofMovies.add(temp[temp.length - 1]);
  }
  console.log(listofMovies);
  return listofMovies;
};

//Function to get the movies of a particular actor and a particular genre
export const fetchMoviesByActor = async (actorId, givenGenre) => {
  const sparql = `
    SELECT  ?movie ?movieName ?genreName
    WHERE
    { 
    ?movie wdt:P31    wd:Q11424 ;
            wdt:P161    ${actorId} .
    ?movie wdt:P1476 ?movieName.
    ?movie wdt:P136 ?genre.
    ?genre rdfs:label ?genreName.
    FILTER(LANG(?genreName)="en")
    FILTER(REGEX(?genreName, "${givenGenre}", "i"))
    }
    `;

  const [url, body] = wdk.sparqlQuery(sparql).split("?");

  const { data } = await axios.post(url, body);

  var len = data["results"]["bindings"].length;

  var listofMovies = new Set();
  for (let i = 0; i < len; i++) {
    var temp = data["results"]["bindings"][i]["movie"]["value"].split("/");
    listofMovies.add(temp[temp.length - 1]);
  }
  console.log(listofMovies);
  return listofMovies;
};

//Function to get movieNames, Movie logo link and duration by the movie ids
export const fetchMovies = async (ids) => {
  //ids --> set of movie ids
  let movies = [];
  for (const id of ids) {
    const sparql = `
     SELECT  ?movieName ?link ?duration
     WHERE
     { 
       wd:${id} wdt:P1476 ?movieName;
             wdt:P154 ?link;
             wdt:P2047 ?duration.
     }`;

    const [url, body] = wdk.sparqlQuery(sparql).split("?");

    const { data } = await axios.post(url, body);
    if (data["results"]["bindings"].length === 0) continue;
    const temp = data["results"]["bindings"][0];
    const movieName = temp["movieName"]["value"];
    const link = temp["link"]["value"];
    const duration = temp["duration"]["value"];
    const movie = {
      wid: id,
      name: movieName,
      logoURL: link,
      duration: duration,
    };
    movies.push(movie);
  }
  return movies;
};
