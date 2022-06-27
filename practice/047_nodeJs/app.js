const userName = 'Max';
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('first item');
  }, 4000);
});
// use: node app.js   in terminal
console.log(userName);
promise.then(
  setTimeout(() => {
    console.log('secod');
  }, 2000),
);
window.addEventListener('click', console.log('[fj'))