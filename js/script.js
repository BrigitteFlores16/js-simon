let randomNumbers = [];
let userInputs = [];
const numFields = 5;
// Generare 5 numeri casuali
    function generateRandomNumbers() {
      randomNumbers = [];
      for (let i = 0; i < numFields; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1); 
      }
      document.getElementById('randomNumbers').innerText = ` ${randomNumbers.join()}`;
      console.log("Numeri generati:", randomNumbers);
    }
// Nascondere i numeri dopo 30 secondi 
    function startGame() {
      generateRandomNumbers();
      setTimeout(() => {
        document.getElementById('randomNumbers').style.display = 'none';
        document.getElementById('guessForm').style.display = 'block';
      }, 30000); 
    }
// Numeri inseriti dall'utente
    function checkNumbers() {
      userInputs = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
      ];
      clearErrors();
      const userSet = new Set(userInputs);
      if (userSet.size < numFields || userInputs.includes(NaN)) {
        showError();
        alert("inserisci numeri validi e senza duplicati!");
        return;
      }
      const guessedCorrectly = userInputs.filter(num => randomNumbers.includes(num));
      console.log("Numeri inseriti dall'utente:", userInputs); 
      console.log("Numeri corretti indovinati:", guessedCorrectly); 
// Il risultato
    document.getElementById('resultMessage').innerText = `Hai indovinato ${guessedCorrectly.length} numeri! (${guessedCorrectly.join(", ")})`;
      alert(`Hai indovinato ${guessedCorrectly.length} numeri! (${guessedCorrectly.join(", ")})`);
    }
    function showError() {
      for (let i = 1; i <= numFields; i++) {
        const input = document.getElementById('num' + i);
        if (isNaN(parseInt(input.value)) || userInputs.filter(n => n === parseInt(input.value)).length > 1) {
          input.classList.add("error");
        }
      }
    }
    function clearErrors() {
      for (let i = 1; i <= numFields; i++) {
        document.getElementById('num' + i).classList.remove("error");
      }
    }
    window.onload = startGame;



    