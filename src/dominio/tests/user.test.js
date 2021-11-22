import User from '../objects/user.mjs';

describe('contructor User tests', () => {
  let testUser1;
  beforeEach(() => {
    testUser1 = new User('Francisco', 34, 'unmail@mail.com', 'contraseña123');
    User.USER_ID = 1;
  });
  test('test if user name is equal', () => {
    expect(testUser1.name).toEqual('Francisco');
  });
  test('test constructor age', () => {
    expect(testUser1.age).toEqual(34);
  });
  test('test constructor email', () => {
    expect(testUser1.email).toEqual('unmail@mail.com');
  });
  test('test constructor password', () => {
    expect(testUser1.password).toEqual('contraseña123');
  });
  test('test constructor id', () => {
    expect(testUser1.id).toEqual(1);
  });
  test('test constructor balance', () => {
    expect(testUser1.balance).toEqual(0);
  });
  test('id updater', () => {
    testUser1 = new User('Francisco', 34, 'unmail@mail.com', 'contraseña123');
    expect(User.USER_ID).toEqual(2);
  });
});

describe('validateUser tests', () => {
  let correctName;
  let correctAge;
  let correctEmail;
  let correctPassword;
  beforeEach(() => {
    correctName = 'Francisco';
    correctAge = '38';
    correctEmail= 'unmail@mail.com';
    correctPassword = 'contraseña123';
  });

  test('test validateUser incorrectName', () => {
    expect(User.validateUser('', correctAge, correctEmail, correctPassword)).toEqual('El nombre ingresado no es valido');
  });
  test('test validateUser incorrectAge', () => {
    expect(User.validateUser(correctName, -34, correctEmail, correctPassword)).toEqual('La edad ingresada no es valida');
  });
  test('test validateUser incorrectEmail', () => {
    expect(User.validateUser(correctName, correctAge, 'no soy un email', correctPassword)).toEqual('El correo ingresado no es valido');
  });
  test('test validateUser incorrectEmail', () => {
    expect(User.validateUser(correctName, correctAge, correctEmail, '123')).toEqual('La contraseña ingresada no es valida');
  });
  test('test validateUser incorrectEmail', () => {
    expect(User.validateUser(correctName, correctAge, correctEmail, correctPassword)).toEqual(undefined);
  });
});
