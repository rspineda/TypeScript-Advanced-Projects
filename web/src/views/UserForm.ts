import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View {
  

  eventsMap(): {[Key: string]: () => void} {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
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

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input>
        <button id="set-name">Change name</button>
        <button id="set-age">Set Random Age</button>
      </div>
    `;
  }

  
}