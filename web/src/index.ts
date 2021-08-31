import { User } from './models/User';

//testing
/* const user = new User({ name: 'Manolete', age: 28 });

const name = user.get('name');
console.log(`user's name is: ${name}`);

user.on('change', () => console.log('user was changed !!'));
//user.trigger('change');
user.set({ name: 'Manolitus' }); */

//testing feching:
/* const user = new User({id: 1});
user.on('change', () => console.log(user));
user.fetch(); */

//testing save:
const user = new User({id:1, name: 'Roni Moloni', age: 30});
user.on('save', () => console.log(user));
user.save();

