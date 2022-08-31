export default class LocalStorage {
  constructor() {
    this.store = [];
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  getItem(key) {
    return this.store[key];
  }

  clear() {
    this.store = [];
  }
}