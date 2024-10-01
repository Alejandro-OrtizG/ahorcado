let words = [
  "amor", "amistad", "alegria", "aventura", "belleza", "bondad", "carino", "compasion", "confianza", "creatividad",
  "dicha", "dignidad", "esperanza", "felicidad", "fortaleza", "generosidad", "gratitud", "honestidad", "humildad", "ilusion",
  "inspiracion", "inteligencia", "libertad", "luz", "maravilla", "optimismo", "paciencia", "paz", "perseverancia", "placer",
  "positividad", "prosperidad", "pureza", "respeto", "sabiduria", "serenidad", "sinceridad", "solidaridad", "ternura", "tranquilidad",
  "valentia", "verdad", "vitalidad", "voluntad", "abundancia", "admiracion", "afecto", "alegria", "altruismo", "armonia",
  "benevolencia", "bienestar", "calma", "companierismo", "comprension", "conocimiento", "crecimiento", "dedicacion", "determinacion", "dicha",
  "disciplina", "empatia", "energia", "entusiasmo", "equilibrio", "esfuerzo", "esperanza", "estabilidad", "exito", "felicidad",
  "fidelidad", "fuerza", "generosidad", "gratitud", "honor", "humor", "imaginacion", "integridad", "justicia", "lealtad",
  "logro", "motivacion", "optimismo", "paciencia", "pasion", "perfeccion", "perseverancia", "plenitud", "positividad", "progreso",
  "prosperidad", "pureza", "realizacion", "respeto", "sabiduria", "satisfaccion", "serenidad", "solidaridad", "ternura", "tranquilidad"
];

let sectionSpan = document.getElementById('idLetters');

let numErrors = 0;

let chooseWord = () => {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

let word = chooseWord();

for (let i = 0; i < word.length; i++) {
  const element = document.createElement("span");
  element.classList.add('letra');
  sectionSpan.append(element);
}

function checkLetter(){
  let isError = true;
  let letter = document.getElementById('valueLetter').value;
  let letterLower = letter.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letterLower) {
      sectionSpan.children[i].innerText = letterLower;
      isError = false;
    }
  }
  if (isError) {
    numErrors++;
    document.getElementById('idImg').src = `./assets/error${numErrors}.png`;
  }
  if (numErrors == 7) {
    alert('Perdiste');
  }

  valueLetter.value = '';

  console.log(letterLower);
  console.log(word);
}

