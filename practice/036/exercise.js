// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstButton = document.querySelector('button');
//    - Select the second button by using an "id"
const secondButton = document.getElementById('second-button');
console.log(firstButton, secondButton);
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
firstButton.addEventListener('click', () => {
  console.dir(firstButton);
});
//    - Output the second button WITHOUT using the variable in which it's stored
secondButton.addEventListener('click', (e) => {
  console.dir(e.target);
});

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const sectionElement = document.body.children[2];
const firstParagraphElement = sectionElement.children[1];
let thirdParagraphElement = sectionElement.querySelectorAll('p')[2];
// thirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;

console.dir(firstParagraphElement);
console.log(thirdParagraphElement);
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
firstButton.addEventListener('click', () => {
  thirdParagraphElement.remove();
});
//    - The second button changes the background color of the first paragraph to blue
secondButton.addEventListener('click', () => {
  //   firstParagraphElement.style.backgroundColor = 'blue';
  firstParagraphElement.classList.add('active');
});
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
