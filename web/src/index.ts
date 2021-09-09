import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({name: 'Mohama Ali', age: 25})
const parent = document.getElementById('root');

const userForm = new UserForm(parent, user);

userForm.render();





