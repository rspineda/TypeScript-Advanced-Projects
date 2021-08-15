import { User } from './models/User';

const user = new User({name: 'Ronald', age: 20});

//updating UserInfo
user.set({name: 'Ronnie'});

//testing events registration
user.on('change', () => {});
user.on('click', () => {});
user.on('change', () => {});

console.log(user);


/* console.log(user.get('name'));
console.log(user.get('age')); */

//Run cod => pracel index.html