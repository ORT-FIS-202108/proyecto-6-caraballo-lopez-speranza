const MIN_AGE = 1;
const MAX_AGE = 99;

export default class User {
  static USER_ID = 1;

  constructor(name, age, email, password) {
    this.id = User.USER_ID;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.balance = 0;
    User.USER_ID++;
  }

  static validateUser(name, age, email, password) {
    const nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    const passwordRegex = /^\S{8,}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!nameRegex.test(name)) {
      return 'El nombre ingresado no es valido';
    }
    if (!(age >= MIN_AGE && age <= MAX_AGE)) {
      return 'La edad ingresada no es valida';
    }
    if (!emailRegex.test(email)) {
      return 'El correo ingresado no es valido';
    }
    if (!passwordRegex.test(password)) {
      return 'La contraseña ingresada no es valida';
    }
  }
}
