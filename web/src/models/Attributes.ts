export class Attributes<T> {
  constructor(private data: T) {}
  
  //returning the same type as as the 'key' argument, so it will return
  //number if the key argument is number, string if the key argument is string ..
  get = <K extends keyof T>(key: string): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}