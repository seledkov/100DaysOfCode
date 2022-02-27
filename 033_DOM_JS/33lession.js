console.dir(window.document);

// document.body.children[1].children[0].href = 'https://google.com';
let acnhorElement = document.getElementById('external-link');
acnhorElement.href = 'https://google.com';

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
let titleElement = document.body.children[0];
console.dir(titleElement);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)

let titleParent = titleElement.parentElement;
console.dir(titleParent);
console.log(titleElement.nextElementSibling);
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let titleElementById = document.getElementById('title');
console.log(titleElementById);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let secondParagraphElement = document.querySelector('.link-item');
console.dir(secondParagraphElement.firstChild);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

secondParagraphElement.firstChild.data = 'changed data';
secondParagraphElement.firstChild.textContent = 'text content';

// lession 34

let newAnchor = document.createElement('a');
newAnchor.textContent = 'linked';
newAnchor.href = 'https://vk.com';
console.log(newAnchor);

titleElement.append(newAnchor);

// titleElementById.parentElement.append(titleElementById);
document.body.insertBefore(titleElement, secondParagraphElement);

// lession 35

secondParagraphElement.innerHTML = 'it is new inner for <strong>title</strong>';

let innerElement = document.createElement('span');
innerElement.innerHTML = ' <strong> Hi </strong> i am span ';

secondParagraphElement.append(innerElement);
secondParagraphElement.insertBefore(innerElement, secondParagraphElement.querySelector('strong'));
