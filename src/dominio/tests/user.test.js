import User from '../objects/user.mjs';


describe('contructor User tests', () => {
  const testUser1 = new User('Francisco', 34, 'unmail@mail.com', 'contraseña123');
  test('constructor name', () => {
    expect(testUser1.name).toEqual('Francisco');
  });
  test('constructor age', () => {
    expect(testUser1.age).toEqual(34);
  });
  test('constructor email', () => {
    expect(testUser1.email).toEqual('unmail@mail.com');
  });
  test('constructor password', () => {
    expect(testUser1.password).toEqual('contraseña123');
  });
  test('constructor id', () => {
    expect(testUser1.id).toEqual(1);
  });
  test('constructor balance', () => {
    expect(testUser1.balance).toEqual(0);
  });
  test('id updater', () => {
    expect(User.USER_ID).toEqual(2);
  });
});

describe('validateUser tests', () => {
  //before each
  const correctName = 'Francisco';
  const correctAge = '38';
  const correctEmail= 'unmail@mail.com';
  const correctPassword = 'contraseña123';
  test('validateUser incorrectName', () => {
    expect(User.validateUser('', correctAge, correctEmail, correctPassword)).toEqual('El nombre ingresado no es valido');
  });
  test('validateUser incorrectAge', () => {
    expect(User.validateUser(correctName, -34, correctEmail, correctPassword)).toEqual('La edad ingresada no es valida');
  });
  test('validateUser incorrectEmail', () => {
    expect(User.validateUser(correctName, correctAge, 'no soy un email', correctPassword)).toEqual('El correo ingresado no es valido');
  });
  test('validateUser incorrectEmail', () => {
    expect(User.validateUser(correctName, correctAge, correctEmail, '123')).toEqual('La contraseña ingresada no es valida');
  });
  test('validateUser incorrectEmail', () => {
    expect(User.validateUser(correctName, correctAge, correctEmail, correctPassword)).toEqual(undefined);
  });
});
