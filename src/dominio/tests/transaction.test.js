import User from '../objects/user.mjs';
import moment from 'moment';
import Transaction from '../objects/transaction.mjs';

let name;
let category;
let amount;
let date;
let type;
let testUser;

describe('constructor Transaction tests', () => {
  beforeEach(() => {
    name = 'name';
    category = 'category';
    amount = 1000;
    date = moment(date, 'DD/MM/YYYY', true);
    type = 'expense';
    testUser = new User('Francisco', 34, 'unmail@mail.com', 'contraseña123');
  });

  test('should create a new Transaction with correct user, name, category, amount, date and type', () => {
    const testTransaction = new Transaction(testUser, name, category, amount, date, type);

    expect(testTransaction.name).toBe(name);
    expect(testTransaction.category).toBe(category);
    expect(testTransaction.amount).toBe(amount);
    expect(testTransaction.date).toBe(date);
    expect(testTransaction.type).toBe(type);
  });
});

describe('transaction validation tests', () => {
  beforeEach(() => {
    name = 'name';
    category = 'category';
    amount = 1000;
    date = moment(moment(), 'DD/MM/YYYY');
  });

  test('should validate a Transaction with correct name, category, amount, date', () => {
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, date);

    expect(testValidationMessage).toEqual(undefined);
  });

  test('should validate a Transaction with invalid empty name', () => {
    const emptyNameTest = '';
    const testValidationMessage = Transaction.validateTransaction(emptyNameTest, category, amount, date);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a Transaction with invalid null name', () => {
    const nullNameTest = null;
    const testValidationMessage = Transaction.validateTransaction(nullNameTest, category, amount, date);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a Transaction with invalid all whitespaces name', () => {
    const whitespacesNameTest = '      ';
    const testValidationMessage = Transaction.validateTransaction(whitespacesNameTest, category, amount, date);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a Transaction with invalid with special chars name', () => {
    const specialCharsNameTest = '...,,,*';
    const testValidationMessage = Transaction.validateTransaction(specialCharsNameTest, category, amount, date);

    expect(testValidationMessage).toEqual('El nombre ingresado no es valido');
  });

  test('should validate a Transaction with invalid empty category', () => {
    const emptyCategoryTest = '';
    const testValidationMessage = Transaction.validateTransaction(name, emptyCategoryTest, amount, date);

    expect(testValidationMessage).toEqual('La categoria ingresada no es valida');
  });

  test('should validate a Transaction with invalid null category', () => {
    const nullCategoryTest = null;
    const testValidationMessage = Transaction.validateTransaction(name, nullCategoryTest, amount, date);

    expect(testValidationMessage).toEqual('La categoria ingresada no es valida');
  });

  test('should validate a Transaction with invalid all whitespaces category', () => {
    const whitespacesCategoryTest = '      ';
    const testValidationMessage = Transaction.validateTransaction(name, whitespacesCategoryTest, amount, date);

    expect(testValidationMessage).toEqual('La categoria ingresada no es valida');
  });

  test('should validate a Transaction with invalid with special chars category', () => {
    const specialCharsCategoryTest = '...,,,*';
    const testValidationMessage = Transaction.validateTransaction(name, specialCharsCategoryTest, amount, date);

    expect(testValidationMessage).toEqual('La categoria ingresada no es valida');
  });

  test('should validate a Transaction with invalid amount equals 0', () => {
    const amountTest = 0;
    const testValidationMessage = Transaction.validateTransaction(name, category, amountTest, date);

    expect(testValidationMessage).toEqual('El monto ingresado no es valido');
  });

  test('should validate a Transaction with invalid amount equals -1', () => {
    const amountTest = -1;
    const testValidationMessage = Transaction.validateTransaction(name, category, amountTest, date);

    expect(testValidationMessage).toEqual('El monto ingresado no es valido');
  });

  test('should validate a Transaction with invalid amount with any char', () => {
    const amountTest = 'test';
    const testValidationMessage = Transaction.validateTransaction(name, category, amountTest, date);

    expect(testValidationMessage).toEqual('El monto ingresado no es valido');
  });

  test('should validate a Transaction with invalid null amount', () => {
    const amountTest = null;
    const testValidationMessage = Transaction.validateTransaction(name, category, amountTest, date);

    expect(testValidationMessage).toEqual('El monto ingresado no es valido');
  });

  test('should validate a Transaction with invalid date format, wrong day format', () => {
    const formattedDateTest = '1/11/2021';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid date format, wrong month format', () => {
    const formattedDateTest = '01/1/2021';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid date format, missing /', () => {
    const formattedDateTest = '01112021';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid date format, replacing / for -', () => {
    const formattedDateTest = '01-11-2021';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid null date', () => {
    const formattedDateTest = null;
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid empty date', () => {
    const formattedDateTest = '';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid any chars date', () => {
    const formattedDateTest = 'testing date';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, formattedDateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el formato valido DD/MM/YYYY');
  });

  test('should validate a Transaction with invalid date, previous month', () => {
    const dateTest = '01/10/2021';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, dateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el mes y año actual');
  });

  test('should validate a Transaction with invalid date, next month', () => {
    const dateTest = '01/12/2021';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, dateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el mes y año actual');
  });

  test('should validate a Transaction with invalid date, previous year', () => {
    const dateTest = '01/11/2020';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, dateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el mes y año actual');
  });

  test('should validate a Transaction with invalid date, next year', () => {
    const dateTest = '01/11/2022';
    const testValidationMessage = Transaction.validateTransaction(name, category, amount, dateTest);

    expect(testValidationMessage).toEqual('La fecha ingresada no se encuentra en el mes y año actual');
  });
});
