import { User } from './models/User';

//testing new way of creating users:
const user = User.buildUser({id:1});
user.on('change', () => console.log(user));
user.fetch();

