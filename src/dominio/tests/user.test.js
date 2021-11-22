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

  test('test validateUser incorrectName empty', () => {
    const incorrectName = '';
    expect(User.validateUser(incorrectName, correctAge, correctEmail, correctPassword)).toEqual('El nombre ingresado no es valido');
  });
  test('test validateUser incorrectName null', () => {
    const incorrectName = null;
    expect(User.validateUser(incorrectName, correctAge, correctEmail, correctPassword)).toEqual('El nombre ingresado no es valido');
  });
  test('test validateUser incorrectName white spaces', () => {
    const incorrectName = '        ';
    expect(User.validateUser(incorrectName, correctAge, correctEmail, correctPassword)).toEqual('El nombre ingresado no es valido');
  });
  test('test validateUser incorrectName unvalid chars', () => {
    const incorrectName = '.%^#@$';
    expect(User.validateUser(incorrectName, correctAge, correctEmail, correctPassword)).toEqual('El nombre ingresado no es valido');
  });
  test('test validateUser incorrectAge', () => {
    const incorrectAge = -37;
    expect(User.validateUser(correctName, incorrectAge, correctEmail, correctPassword)).toEqual('La edad ingresada no es valida');
  });
  test('test validateUser null Age', () => {
    const incorrectAge = null;
    expect(User.validateUser(correctName, incorrectAge, correctEmail, correctPassword)).toEqual('La edad ingresada no es valida');
  });
  test('test validateUser less than min Age', () => {
    const incorrectAge = User.MIN_AGE -1;
    expect(User.validateUser(correctName, incorrectAge, correctEmail, correctPassword)).toEqual('La edad ingresada no es valida');
  });
  test('test validateUser more than max Age', () => {
    const incorrectAge = User.MAX_AGE +1;
    expect(User.validateUser(correctName, incorrectAge, correctEmail, correctPassword)).toEqual('La edad ingresada no es valida');
  });
  test('test validateUser incorrectEmail', () => {
    const incorrectEmail = 'no soy un email';
    expect(User.validateUser(correctName, correctAge, incorrectEmail, correctPassword)).toEqual('El correo ingresado no es valido');
  });
  test('test validateUser null Email', () => {
    const incorrectEmail = null;
    expect(User.validateUser(correctName, correctAge, incorrectEmail, correctPassword)).toEqual('El correo ingresado no es valido');
  });
  test('test validateUser all spaces Email', () => {
    const incorrectEmail = '      ';
    expect(User.validateUser(correctName, correctAge, incorrectEmail, correctPassword)).toEqual('El correo ingresado no es valido');
  });
  test('test validateUser special caracters Email', () => {
    const incorrectEmail = '#$%%@#$%%';
    expect(User.validateUser(correctName, correctAge, incorrectEmail, correctPassword)).toEqual('El correo ingresado no es valido');
  });
  test('test validateUser incorrectPassword', () => {
    const incorrectPassword = '123';
    expect(User.validateUser(correctName, correctAge, correctEmail, incorrectPassword)).toEqual('La contraseña ingresada no es valida');
  });
  test('test validateUser null Password', () => {
    const incorrectPassword = null;
    expect(User.validateUser(correctName, correctAge, correctEmail, incorrectPassword)).toEqual('La contraseña ingresada no es valida');
  });
  test('test validateUser empty Password', () => {
    const incorrectPassword = '';
    expect(User.validateUser(correctName, correctAge, correctEmail, incorrectPassword)).toEqual('La contraseña ingresada no es valida');
  });
  test('test validateUser special caracters Password', () => {
    const incorrectPassword = '#$%@#$';
    expect(User.validateUser(correctName, correctAge, correctEmail, incorrectPassword)).toEqual('La contraseña ingresada no es valida');
  });
  test('test validateUser al spaces Password', () => {
    const incorrectPassword = '        ';
    expect(User.validateUser(correctName, correctAge, correctEmail, incorrectPassword)).toEqual('La contraseña ingresada no es valida');
  });
  test('test validateUser all correct', () => {
    expect(User.validateUser(correctName, correctAge, correctEmail, correctPassword)).toEqual(undefined);
  });
});
