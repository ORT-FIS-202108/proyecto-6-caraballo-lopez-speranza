import User from '../objects/user.mjs';
import Transaction from '../objects/transaction.mjs';
const correctName = 'name';
const correctCategory = 'category';
const correctAmount = 1000;
const correctDate = '20/11/2021';
const correctType = 'expense';

describe('contructor Transaction tests', () => {
  const testUser1 = new User('Francisco', 34, 'unmail@mail.com', 'contraseña123');
  const testTransaction = new Transaction(testUser1, correctName, correctCategory, correctAmount, correctDate, correctType);
  test('constructor id', () => {
    expect(testTransaction.id).toEqual(1);
  });
  test('constructor user', () => {
    expect(testTransaction.user).toEqual(testUser1);
  });
  test('constructor name', () => {
    expect(testTransaction.name).toEqual(correctName);
  });
  test('constructor category', () => {
    expect(testTransaction.category).toEqual(correctCategory);
  });
  test('constructor amount', () => {
    expect(testTransaction.amount).toEqual(correctAmount);
  });
  test('constructor date', () => {
    expect(testTransaction.date).toEqual(correctDate);
  });
  test('constructor type', () => {
    expect(testTransaction.type).toEqual(correctType);
  });
  test('constructor nextID', () => {
    expect(Transaction.TRANSACTION_ID).toEqual(2);
  });
});

describe('validateTransaction tests', () => {
  test('unvalidName', () => {
    expect(Transaction.validateTransaction('$^$%', correctCategory, correctAmount, correctDate)).toEqual('El nombre ingresado no es valido');
  });
  test('unvalidCategory', () => {
    expect(Transaction.validateTransaction(correctName, '*^%%#', correctAmount, correctDate)).toEqual('La categoria ingresada no es valida');
  });
  test('unvalidAmount', () => {
    expect(Transaction.validateTransaction(correctName, correctCategory, -36, correctDate)).toEqual('El monto ingresado no es valido');
  });
  test('unvalidDate', () => {
    expect(Transaction.validateTransaction(correctName, correctCategory, correctAmount, 'dsfse')).toEqual('La fecha ingresada no es valida');
  });
  test('unvalidMonth', () => {
    expect(Transaction.validateTransaction(correctName, correctCategory, correctAmount, '07/06/2021')).toEqual('La fecha ingresada no se encuentra en el mes y año actual');
  });
  test('unvalidYear', () => {
    expect(Transaction.validateTransaction(correctName, correctCategory, correctAmount, '07/11/2020')).toEqual('La fecha ingresada no se encuentra en el mes y año actual');
  });
  test('allValid', () => {
    expect(Transaction.validateTransaction(correctName, correctCategory, correctAmount, correctDate)).toEqual(undefined);
  });
});
