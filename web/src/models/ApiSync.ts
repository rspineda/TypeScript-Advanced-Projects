import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if(id) {
      // user is already on database
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // user is not on database yet
      return axios.post(this.rootUrl, data);
    }
  }
}
