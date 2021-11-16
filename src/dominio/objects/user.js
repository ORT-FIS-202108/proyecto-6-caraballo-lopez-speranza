export default class User {
  static USER_ID = 1;

  constructor(id, name, age, email, password) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.balance = 0;
    this.USER_ID++;
  }
}
