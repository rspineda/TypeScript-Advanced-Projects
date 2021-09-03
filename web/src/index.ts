import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

//testing new way of creating users:
/* const user = User.buildUser({id:1});
user.on('change', () => console.log(user));
user.fetch(); */

//testing collection (fetch all users):
const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
  );

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();



