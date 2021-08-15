import { User } from './models/User';

const user = new User({name: 'Ronald', age: 20});

//updating UserInfo
user.set({name: 'Ronnie'});

//testing events registration
user.on('change', () => {
  console.log('Change #1');
});
user.on('click', () => {
  console.log('Click event was triggered');
});
user.on('change', () => {
  console.log('Change #2');
});

//console.log(user);
user.trigger('click');

//Run cod => pracel index.html