let paragraphElement = document.querySelector('p');
let inputElement = document.querySelector('input');

function changeParagraphText(value) {
  paragraphElement.textContent = value;
}

const changePText = () => {
  paragraphElement.textContent = 'clicked';
};

function getInputText(e) {
  //   let value = inputElement.value;
  let value = e.target.value;
  //   let value = e.data;
  console.log(e);
  changeParagraphText(value.length);
}

paragraphElement.addEventListener('input', changePText);
inputElement.addEventListener('input', getInputText);
