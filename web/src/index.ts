import { User } from './models/User';

//testing
const user = new User({ name: 'Manolete', age: 28 });

const name = user.get('name');
console.log(`user's name is: ${name}`);

user.on('change', () => console.log('user was changed !!'));
//user.trigger('change');
user.set({ name: 'Manolitus' });

