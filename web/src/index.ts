import { User } from './models/User';


//testing new way of creating users:
/* const user = User.buildUser({id:1});
user.on('change', () => console.log(user));
user.fetch(); */

//testing collection (fetch all users):
const collection = User.builUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();



