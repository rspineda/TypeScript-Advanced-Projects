import { User } from './models/User';
import axios from 'axios';

//testing if saving (user already saved in database) is working fine:
/* const user = new User({ id: 1});
user.set({ name: 'Ronaldiño', age: 30});
user.save(); */

//testing is saving (user not in database yet) is working fine:
/* const user = new User({ name: 'Pedrolo', age: 27});
user.save(); */

//testing Events refactor (eventing):
const user = new User({ name: 'Manolete', age: 28 });
user.events.on('change', () => {
  console.log('change event has been called!!');
});
user.events.trigger('change');

