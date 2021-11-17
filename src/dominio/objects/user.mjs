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

  static verifyUser(name, age, email, password) {
    if (!this.validName(name)) {
      throw new Error('El nombre ingresado no es valido');
    }
    if (!this.validPassword(password)) {
      throw new Error('La contraseña ingresada no es valido');
    }
    if (!this.validEmail(email)) {
      throw new Error('El correo ingresado no es valido');
    }
    if (!this.validAge(age)) {
      throw new Error('La edad ingresada no es valida');
    }
  }

  validName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  }

  validPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  validEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  validAge(age) {
    return age >= MIN_AGE && age <= MAX_AGE;
  }
}
