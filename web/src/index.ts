import { User } from './models/User';

const user = new User({name: 'Ronald', age: 20});

//updating UserInfo
user.set({name: 'Ronnie'});

console.log(user.get('name'));
console.log(user.get('age'));