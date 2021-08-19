import { User } from './models/User';
import axios from 'axios';


//testing if backend/databse is working fine:
/* const user = {
  name: 'Ronald',
  age: 25
}

axios.post('http://localhost:3000/users', user); */

//testing if fetching is working fine:
const user = new User({ id: 1});
user.fetch();

setTimeout(() => console.log(user), 4000);