for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}

const users = ['max', 'mila', 'anya'];
for (const user of users) {
  console.log(user);
}

const currentUser = {
  name: 'maximilian',
  age: 20,
  isAdmin: true,
};
for (const key in currentUser) {
  console.log(key);
  console.log(typeof key); // string
  console.log(currentUser[key]); // key set as string
  console.log(currentUser.name); // equal
  console.log(currentUser['name']); // equal
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm('do you want close?');
  console.log('no close');
}
console.log('done');
