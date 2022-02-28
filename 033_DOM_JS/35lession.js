let spanElement = document.querySelector('#inputLenght');
let inputElement = document.querySelector('input');
const maxLength = inputElement.maxLength;
function changeParagraphText(value) {
  spanElement.textContent = value;
}

const changePText = (value) => {
  spanElement.textContent = value;
};

function getInputText(e) {
  //   let value = inputElement.value;
  let remainedValue = maxLength - e.target.value.length;
  //   let value = e.data;

  changeParagraphText(remainedValue);

  if (remainedValue < 5) {
    inputElement.classList.add('warning');
    spanElement.classList.add('warning');
  } else {
    inputElement.classList.remove('warning');
    spanElement.classList.remove('warning');
  }
}

spanElement.addEventListener('input', changePText);
inputElement.addEventListener('input', getInputText);
