// calculate the summ of all numbers

const calcSectionElement = document.querySelector('#calculator');
const calcInputElement = calcSectionElement.querySelector('#user-number');
const calcParagraphElement = calcSectionElement.querySelector('#calculated-sum');
const calcButtonElement = calcSectionElement.querySelector('button');

calcButtonElement.addEventListener('click', () => {
  const userInputValue = calcInputElement.value;
  let result = 0;
  console.log(userInputValue);
  for (let i = 0; i <= userInputValue; i++) {
    result += i;
  }
  console.dir(result);
  calcParagraphElement.textContent = result;
  calcParagraphElement.style.display = 'block';
});

// all link change bcg

const buttonBcgLinksChanging = document.querySelector('#highlight-links button');
console.log(buttonBcgLinksChanging);
buttonBcgLinksChanging.addEventListener('click', () => {
  const linksElements = document.getElementById('highlight-links').querySelectorAll('a');
  for (const link of linksElements) {
    link.classList.add('highlight');
  }
});
