/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log("ESERCIZIO A");

console.log("---------------------------------");
const sum = 10 + 20;
console.log(sum);
console.log("---------------------------------");
console.log("");

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("ESERCIZIO B");

console.log("---------------------------------");

const random = Math.floor(Math.random() * 21);
console.log(random);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("ESERCIZIO C");

console.log("---------------------------------");

const me = {
  name: "Alessandro",
  surname: "Fugazza",
  age: 26,
};

console.log(me);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("ESERCIZIO D");

console.log("---------------------------------");

delete me.age;
console.log(me);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log("ESERCIZIO E");

console.log("---------------------------------");

me.skills = ["HTML", "CSS", "JavaScript", "Python", "C", "Swift", "AutoHotkey"];

console.log(me);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("ESERCIZIO F");

console.log("---------------------------------");

me.skills.push("TypeScript");

console.log(me);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("ESERCIZIO G");

console.log("---------------------------------");

me.skills.pop();
console.log(me);

console.log("---------------------------------");
console.log("");

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("ESERCIZIO 1");

console.log("---------------------------------");

const dice = () => {
  const randNum = Math.floor(Math.random() * 7);
  return randNum;
};

console.log(dice());

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("ESERCIZIO 2");

console.log("---------------------------------");

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "The numbers are equal.";
  }
};

console.log(whoIsBigger(9, 9));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("ESERCIZIO 3");

console.log("---------------------------------");

const splitMe = string => {
  const splittedString = string.split(" ");
  return splittedString;
};

console.log(splitMe("I love coding"));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("ESERCIZIO 4");

console.log("---------------------------------");

const deleteOne = (string, bool) => {
  if (bool) {
    string = string.slice(1);
  } else {
    string = string.slice(0, -1);
  }
  return string;
};

console.log(deleteOne("coding", true));
console.log(deleteOne("coding", false));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("ESERCIZIO 5");

console.log("---------------------------------");

const onlyLetters = string => {
  const stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    const currentChar = stringArray[i];
    if (parseInt(currentChar)) {
      stringArray[i] = "";
    }
  }

  /* this part of the code removes double spaces in the final string although it wasn't specified in the assignment instructions
  stringNoNumbers = stringArray.join("");
  const stringArrayNoNumbers = stringNoNumbers.split("");
  for (let i = 0; i < stringArrayNoNumbers.length; i++) {
    if (stringArrayNoNumbers[i] === " " && stringArrayNoNumbers[i + 1] === " ") {
      stringArrayNoNumbers[i] = "";
      i++;
    }
  }
  return stringArrayNoNumbers.join("");
  */

  return stringArray.join("");
};

console.log(onlyLetters("11I hav2e2 444 dogs22"));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("ESERCIZIO 6");

console.log("---------------------------------");

const isThisAnEmail = string => {
  let atFound = false;
  let dotFound = false;
  let isEmail = true;
  if (
    // doesn't start or end with @ or .
    string.charAt(0) !== "@" &&
    string.charAt(0) !== "." &&
    string.charAt(string.length - 1) !== "@" &&
    string.charAt(string.length - 1) !== "."
  ) {
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === " ") {
        // doesn't contain a space
        isEmail = false;
        break;
      }
      if (string.charAt(i) === "@") {
        if (atFound === true) {
          // doesn't contain more than one @
          isEmail = false;
          break;
        }
        atFound = true;
      }
      if (string.charAt(i) === ".") {
        if (dotFound === true || string.charAt(i - 1) === "@") {
          // doesn't contain more than one . AND there are no characters between @ and .
          isEmail = false;
          break;
        }
        dotFound = true;
      }
      if (dotFound && !atFound) {
        // the . doesn't appear before a @
        isEmail = false;
        break;
      }
    }
  } else {
    isEmail = false;
  }
  return isEmail;
};

console.log(isThisAnEmail("a@a.meco"));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7");

console.log("---------------------------------");

const whatDayIsIt = () => {
  const currentDate = new Date();
  let today = currentDate.getDay();
  switch (today) {
    case 0:
      today = "Saturday";
    case 1:
      today = "Sunday";
    case 2:
      today = "Monday";
    case 3:
      today = "Tuesday";
    case 4:
      today = "Wednesday";
    case 5:
      today = "Thursday";
    case 6:
      today = "Friday";
  }
  return today;
};

console.log(whatDayIsIt());

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("ESERCIZIO 8");
console.log("---------------------------------");

const rollTheDices = num => {
  let sum = 0;
  const rolledValues = [];
  for (let i = 0; i < num; i++) {
    const rolledValue = dice();
    rolledValues.push(rolledValue);
    sum += rolledValue;
  }
  const result = {};
  result.sum = sum;
  result.values = rolledValues;
  return result;
};

console.log(rollTheDices(5));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("ESERCIZIO 9");
console.log("---------------------------------");

const howManyDays = date => {
  const currentDate = new Date();
  const currentMs = Date.parse(currentDate);
  const dateMs = Date.parse(date);
  const msDifference = currentMs - dateMs;
  const daysDifference = Math.floor(msDifference / 86400000);
  return daysDifference;
};

const testDate = new Date("2023-07-12");

console.log(howManyDays(testDate));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("ESERCIZIO 10");
console.log("---------------------------------");

const myBday = new Date("July 14");

const isTodayMyBirthday = bday => {
  const currentDate = new Date();
  if (currentDate.getMonth() === bday.getMonth() && currentDate.getDate() === bday.getDate()) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday(myBday));

console.log("---------------------------------");
console.log("");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("ESERCIZIO 11");

console.log("---------------------------------");

const deleteProp = (object, string) => {
  delete object[string];
  return object;
};

const test = {
  name: "d",
  surname: "a",
};

console.log(test);
deleteProp(test, "name");
console.log(test);

console.log("---------------------------------");
console.log("");

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log("ESERCIZIO 12");

console.log("---------------------------------");

const newestMovie = movies => {
  let newestMovieYear = parseInt(movies[0].Year);
  let newestMovieTitle = movies[0].Title;
  for (i = 1; i < movies.length; i++) {
    // index from 1 since 0 has already been analyzed
    const currentMovie = movies[i];
    const currentMovieYear = parseInt(currentMovie.Year);
    if (currentMovieYear > newestMovieYear) {
      newestMovieYear = currentMovieYear;
      newestMovieTitle = currentMovie.Title;
    }
  }
  console.log(newestMovieTitle, newestMovieYear);
};

newestMovie(movies);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("ESERCIZIO 13");

console.log("---------------------------------");

const countMovies = movies => movies.length;
console.log(countMovies(movies));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("ESERCIZIO 14");

console.log("---------------------------------");

const onlyTheYears = movies => movies.map(movie => movie.Year);

console.log(onlyTheYears(movies));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("ESERCIZIO 15");

console.log("---------------------------------");

const onlyInLastMillennium = movies => movies.filter(movie => parseInt(movie.Year) < 2000);

console.log(onlyInLastMillennium(movies));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log("ESERCIZIO 16");

console.log("---------------------------------");

const sumAllTheYears = movies => movies.reduce((sum, movie) => (sum += parseInt(movie.Year)), 0);

console.log(sumAllTheYears(movies));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("ESERCIZIO 17");

console.log("---------------------------------");

const searchByTitle = (movies, string) =>
  movies.filter(movie => movie.Title.toLowerCase().includes(string.toLowerCase()));

console.log(searchByTitle(movies, "lord"));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("ESERCIZIO 18");

console.log("---------------------------------");

const searchAndDivide = (movies, string) => {
  const object = { match: [], unmatch: [] };
  movies.forEach(movie => {
    if (movie.Title.toLowerCase().includes(string.toLowerCase())) {
      object.match.push(movie);
    } else {
      object.unmatch.push(movie);
    }
  });
  return object;
};

console.log(searchAndDivide(movies, "lord"));

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("ESERCIZIO 19");

console.log("---------------------------------");

const removeIndex = (movies, number) => {
  if (number > movies.length - 1) {
    return "Invalid index.";
  }
  return movies.filter((movie, index) => index !== number);
};

console.log(removeIndex(movies, 12));

console.log("---------------------------------");
console.log("");

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log("ESERCIZIO 20 - getElementBy version");

console.log("---------------------------------");

const getContainerWithGet = () => document.getElementById("container");

console.log(getContainerWithGet());

console.log("---------------------------------");
console.log("");

console.log("ESERCIZIO 20 - querySelector version");

console.log("---------------------------------");

const getContainerWithQuery = () => document.querySelector("#container");

console.log(getContainerWithQuery());

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log("ESERCIZIO 21 - getElementsBy version");
console.log("---------------------------------");

const getTdsWithGet = () => document.getElementsByTagName("td");
console.log(getTdsWithGet());

console.log("---------------------------------");
console.log("");

console.log("ESERCIZIO 21 - querySelector version");
console.log("---------------------------------");

const getTdsWithQuery = () => document.querySelectorAll("td");
console.log(getTdsWithQuery());

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("ESERCIZIO 22 - getElementsBy version");
console.log("---------------------------------");

const logTdsTextWithGet = () => {
  const tds = document.getElementsByTagName("td");
  for (let i = 0; i < tds.length; i++) {
    console.log(tds[i].innerText);
  }
};

logTdsTextWithGet();

console.log("---------------------------------");
console.log("");

console.log("ESERCIZIO 22 - querySelector version");
console.log("---------------------------------");

const logTdsTextWithQuery = () => {
  const tds = document.querySelectorAll("td");
  tds.forEach(td => console.log(td.innerText));
};

logTdsTextWithQuery();

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log("ESERCIZIO 23");
console.log("---------------------------------");

const backgroundToRed = () => {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
  console.log("Links background changed correctly.");
};

backgroundToRed();

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log("ESERCIZIO 24");
console.log("---------------------------------");

const addElementToMyList = () => {
  const newLi = document.createElement("li"); // create element to add
  newLi.innerText = "litext";
  const myList = document.getElementById("myList"); // get element to add it to
  myList.appendChild(newLi);
  console.log("Element added correctly.");
};

addElementToMyList();

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log("ESERCIZIO 25");
console.log("---------------------------------");

addElementToMyList();
addElementToMyList();
addElementToMyList();

const emptyMyList = () => {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
  console.log("myList emptied correctly.");
};

emptyMyList();

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log("ESERCIZIO 26");
console.log("---------------------------------");

const addClassToTr = () => {
  const trs = document.querySelectorAll("tr");
  trs.forEach(tr => tr.classList.add("test"));
  console.log("Classes added correctly.");
};

addClassToTr();

console.log("---------------------------------");
console.log("");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log("ESERCIZIO 27");
console.log("---------------------------------");

const halfTree = height => {
  console.log("");
  let width = 1;
  for (let i = 0; i < height; i++) {
    let line = "";
    for (let j = 0; j < width; j++) {
      line += "*";
    }
    console.log(line);
    width++;
  }
  console.log("");
};

halfTree(5);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("ESERCIZIO 28");
console.log("---------------------------------");

const tree = height => {
  console.log("");
  let width = 1;

  for (let i = 0; i < height; i++) {
    let line = "";
    let tree = "";
    for (let j = 0; j < width; j++) {
      tree += "*";
    }
    let air = "";
    for (let j = 0; j < Math.floor(height - width / 2); j++) {
      air += " ";
    }
    line = air + tree + air;
    width += 2;
    console.log(line);
  }
  console.log("");
};

tree(5);

console.log("---------------------------------");
console.log("");

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log("ESERCIZIO 29");
console.log("---------------------------------");

const isItPrime = num => {
  // prime number condition: not divisible by any number between 1 and the number's square root.
  const numSqrt = Math.floor(Math.sqrt(num));
  for (let i = numSqrt; i > 1; i--) {
    if (!(num % i)) {
      return "Not prime";
    }
  }
  return "Prime";
};

console.log(isItPrime(17));

console.log("---------------------------------");
