import User from '../objects/user.mjs';

let name;
let age;
let email;
let password;

describe('constructor User tests', () => {
  beforeEach(() => {
    name = 'name';
    age = 20;
    email = 'test@test.com';
    password = 'password';
  });

  test('should create a new User with correct name, age, email and password', () => {
    const testUser = new User(name, age, email, password);
    expect(testUser.name).toBe(name);
    expect(testUser.age).toBe(age);
    expect(testUser.email).toBe(email);
    expect(testUser.password).toBe(password);
    expect(testUser.balance).toBe(0);
  });
});

describe('user validation tests', () => {
  beforeEach(() => {
    name = 'name';
    age = 21;
    email = 'test@test.com';
    password = 'password';
  });

  test('should validate a User with correct name, age, email and password', () => {
    const testValidationMessage = User.validateUser(name, age, email, password);

    expect(testValidationMessage).toEqual(undefined);
  });

  test('should validate a User with invalid empty name', () => {
    const emptyNameTest = '';
    const testValidationMessage = User.validateUser(emptyNameTest, age, email, password);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a User with invalid null name', () => {
    const nullNameTest = null;
    const testValidationMessage = User.validateUser(nullNameTest, age, email, password);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a User with invalid all whitespaces name', () => {
    const whitespacesNameTest = '      ';
    const testValidationMessage = User.validateUser(whitespacesNameTest, age, email, password);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a User with invalid with special chars name', () => {
    const specialCharsNameTest = '...,,,*';
    const testValidationMessage = User.validateUser(specialCharsNameTest, age, email, password);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a User with invalid null age', () => {
    const nullAgeTest = null;
    const testValidationMessage = User.validateUser(name, nullAgeTest, email, password);

    expect(testValidationMessage).toEqual('La edad ingresada no es valida, debe estar entre 12 y 99 años');
  });

  test('should validate a User with invalid empty age', () => {
    const emptyAgeTest = null;
    const testValidationMessage = User.validateUser(name, emptyAgeTest, email, password);

    expect(testValidationMessage).toEqual('La edad ingresada no es valida, debe estar entre 12 y 99 años');
  });

  test('should validate a User with invalid under 12 age', () => {
    const underAgeTest = 11;
    const testValidationMessage = User.validateUser(name, underAgeTest, email, password);

    expect(testValidationMessage).toEqual('La edad ingresada no es valida, debe estar entre 12 y 99 años');
  });

  test('should validate a User with invalid over 99 age', () => {
    const overAgeTest = 100;
    const testValidationMessage = User.validateUser(name, overAgeTest, email, password);

    expect(testValidationMessage).toEqual('La edad ingresada no es valida, debe estar entre 12 y 99 años');
  });

  test('should validate a User with invalid all whitespaces age', () => {
    const whitespacesAgeTest = '      ';
    const testValidationMessage = User.validateUser(name, whitespacesAgeTest, email, password);

    expect(testValidationMessage).toEqual('La edad ingresada no es valida, debe estar entre 12 y 99 años');
  });

  test('should validate a User with invalid with special chars age', () => {
    const specialCharsAgeTest = '...,,,*';
    const testValidationMessage = User.validateUser(name, specialCharsAgeTest, email, password);

    expect(testValidationMessage).toEqual('La edad ingresada no es valida, debe estar entre 12 y 99 años');
  });

  test('should validate a User with invalid null email', () => {
    const nullEmailTest = null;
    const testValidationMessage = User.validateUser(name, age, nullEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid empty email', () => {
    const emptyEmailTest = '';
    const testValidationMessage = User.validateUser(name, age, emptyEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid all whitespaces email', () => {
    const whitespacesEmailTest = '      ';
    const testValidationMessage = User.validateUser(name, age, whitespacesEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid with special chars email', () => {
    const specialCharsEmailTest = '...,,,*';
    const testValidationMessage = User.validateUser(name, age, specialCharsEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid missing @ email', () => {
    const missingAtEmailTest = 'testEamiltest.com';
    const testValidationMessage = User.validateUser(name, age, missingAtEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid missing . email', () => {
    const missingDotEmailTest = 'test@testcom';
    const testValidationMessage = User.validateUser(name, age, missingDotEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid missing @ and . email', () => {
    const missingAtAndDotEmailTest = 'testtest.com';
    const testValidationMessage = User.validateUser(name, age, missingAtAndDotEmailTest, password);

    expect(testValidationMessage).toEqual('El correo ingresado no es valido');
  });

  test('should validate a User with invalid null password', () => {
    const nullPasswordTest = null;
    const testValidationMessage = User.validateUser(name, age, email, nullPasswordTest);

    expect(testValidationMessage).toEqual('La contraseña ingresada no es valida, debe tener un largo minimo de 8 caracteres sin espacios');
  });

  test('should validate a User with invalid empty password', () => {
    const emptyPasswordTest = '';
    const testValidationMessage = User.validateUser(name, age, email, emptyPasswordTest);

    expect(testValidationMessage).toEqual('La contraseña ingresada no es valida, debe tener un largo minimo de 8 caracteres sin espacios');
  });

  test('should validate a User with invalid all whitespaces password', () => {
    const whitespacesPasswordTest = '      ';
    const testValidationMessage = User.validateUser(name, age, email, whitespacesPasswordTest);

    expect(testValidationMessage).toEqual('La contraseña ingresada no es valida, debe tener un largo minimo de 8 caracteres sin espacios');
  });

  test('should validate a User with invalid with special chars password', () => {
    const specialCharsPasswordTest = '...,,,*';
    const testValidationMessage = User.validateUser(name, age, email, specialCharsPasswordTest);

    expect(testValidationMessage).toEqual('La contraseña ingresada no es valida, debe tener un largo minimo de 8 caracteres sin espacios');
  });

  test('should validate a User with invalid under 8 chars password', () => {
    const under8CharsPasswordTest = 'test';
    const testValidationMessage = User.validateUser(name, age, email, under8CharsPasswordTest);

    expect(testValidationMessage).toEqual('La contraseña ingresada no es valida, debe tener un largo minimo de 8 caracteres sin espacios');
  });
});
