let wordInterval;
let currentWordIndex = 0;
let words = [];
let wordArray = [];

startWords();

function startWords() {
  try {
    words = document.getElementsByClassName('animated-words');

    currentWordIndex = 0;
    wordArray = [];

    words[currentWordIndex].style.opacity = 1;
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    changeWord();
    clearInterval(wordInterval);
    wordInterval = setInterval(changeWord, 4000);
  } catch (error) {
    // Cant find word element
  }
}

function changeWord() {
  let currentWord = wordArray[currentWordIndex];
  for (let i = 0; i < currentWord.length; i++) {
    animateLetterOut(currentWord, i);
  }

  let newWord = currentWordIndex == words.length - 1 ? wordArray[0] : wordArray[currentWordIndex + 1];
  for (let i = 0; i < newWord.length; i++) {
    newWord[i].className = 'letter fall-behind';
    newWord[0].parentElement.style.opacity = 1;
    animateLetterIn(newWord, i);
  }

  currentWordIndex = (currentWordIndex == wordArray.length - 1) ? 0 : currentWordIndex + 1;
}

function animateLetterOut(letterMovingOut, i) {
  setTimeout(function() {
    letterMovingOut[i].className = 'letter move-out';
  }, i * 100);
}

function animateLetterIn(letterMovingIn, i) {
  setTimeout(function() {
    letterMovingIn[i].className = 'letter move-in';
  }, 350 + (i * 100));
}

function splitLetters(word) {
  let content = word.innerText;
  word.innerText = '';
  let lettersArray = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerText = content.charAt(i);
    word.appendChild(letter);
    lettersArray.push(letter);
  }

  wordArray.push(lettersArray);
}