import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  

  eventsMap(): {[Key: string]: () => void} {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
      'click:#save-model': this.onSaveClick,
    };
  }

 onSetAgeClick = (): void => {
   this.model.setRandomAge();
 }

 onSetNameClick = (): void => {
  const input = this.parent.querySelector('input');
  const name = input.value;
  this.model.set({name});
 }

 onSaveClick = (): void => {
   this.model.save();
 }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}">
        <button id="set-name">Change name</button>
        <button id="set-age">Set Random Age</button>
        <button id="save-model">Save User</button>
      </div>
    `;
  }

  
}