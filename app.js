let words = [
  "amor", "amistad", "alegría", "aventura", "belleza", "bondad", "cariño", "compasión", "confianza", "creatividad",
  "dicha", "dignidad", "esperanza", "felicidad", "fortaleza", "generosidad", "gratitud", "honestidad", "humildad", "ilusión",
  "inspiración", "inteligencia", "libertad", "luz", "maravilla", "optimismo", "paciencia", "paz", "perseverancia", "placer",
  "positividad", "prosperidad", "pureza", "respeto", "sabiduría", "serenidad", "sinceridad", "solidaridad", "ternura", "tranquilidad",
  "valentía", "verdad", "vitalidad", "voluntad", "abundancia", "admiración", "afecto", "alegría", "altruismo", "armonía",
  "benevolencia", "bienestar", "calma", "compañerismo", "comprensión", "conocimiento", "crecimiento", "dedicación", "determinación", "dicha",
  "disciplina", "empatía", "energía", "entusiasmo", "equilibrio", "esfuerzo", "esperanza", "estabilidad", "éxito", "felicidad",
  "fidelidad", "fuerza", "generosidad", "gratitud", "honor", "humor", "imaginación", "integridad", "justicia", "lealtad",
  "logro", "motivación", "optimismo", "paciencia", "pasión", "perfección", "perseverancia", "plenitud", "positividad", "progreso",
  "prosperidad", "pureza", "realización", "respeto", "sabiduría", "satisfacción", "serenidad", "solidaridad", "ternura", "tranquilidad"
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
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      sectionSpan.children[i].innerText = letter;
      isError = false;
    } 
  }
  if (isError) {
    numErrors++;
    document.getElementById('idImg').src = `./assets/error${numErrors}.png`;
  }

  console.log(letter);
  console.log(word);
}