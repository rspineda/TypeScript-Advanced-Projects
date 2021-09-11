import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({name: 'Mohama Ali', age: 25})
const root = document.getElementById('root');

const userEdit = new UserEdit(root, user);
userEdit.render();





