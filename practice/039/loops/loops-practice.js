// calculate the summ of all numbers
const calcButtonElement = document.querySelector('#calculator button');

calcButtonElement.addEventListener('click', () => {
  const calcInputElement = calcSectionElement.querySelector('#user-number');
  const calcParagraphElement = calcSectionElement.querySelector('#calculated-sum');

  const userInputValue = calcInputElement.value;

  let result = 0;
  for (let i = 0; i <= userInputValue; i++) {
    result += i;
  }

  calcParagraphElement.textContent = result;
  calcParagraphElement.style.display = 'block';
});

// all link change bcg

const buttonBcgLinksChanging = document.querySelector('#highlight-links button');

buttonBcgLinksChanging.addEventListener('click', () => {
  const linksElements = document.getElementById('highlight-links').querySelectorAll('a');
  for (const link of linksElements) {
    link.classList.add('highlight');
  }
});

const userDemoProfile = {
  name: 'Max',
  age: 30,
  profession: 'Developer',
  salary: 3000,
};

const buttonUserOutput = document.querySelector('#user-data button');

buttonUserOutput.addEventListener('click', () => {
  const ulUserOutput = document.querySelector('#output-user-data');
  ulUserOutput.innerHTML = '';

  for (const key in userDemoProfile) {
    const liElement = document.createElement('li');
    liElement.textContent = key + ' : ' + userDemoProfile[key];
    ulUserOutput.append(liElement);
  }
});

// rolls statistic

const rollButton = document.querySelector('#statistics button');

const calculateRolls = () => {
  let outputRolls = 0;
  const enteredUserNumber = document.querySelector('#user-target-number').value;
  const ulRollResultElement = document.querySelector('#dice-rolls');
  ulRollResultElement.innerHTML = '';

  let rollValue;
  while (enteredUserNumber != rollValue) {
    randomValue = Math.floor(Math.random() * 6) + 1;
    rollValue = randomValue;
    outputRolls++;
    const liRollResultElemnt = document.createElement('li');
    const textRollResult = 'Roll ' + outputRolls + ': ' + randomValue;
    liRollResultElemnt.textContent = textRollResult;
    ulRollResultElement.append(liRollResultElemnt);
  }

  document.querySelector('#output-total-rolls').textContent = outputRolls;
  document.querySelector('#output-target-number').textContent = enteredUserNumber;
};
rollButton.addEventListener('click', calculateRolls);
