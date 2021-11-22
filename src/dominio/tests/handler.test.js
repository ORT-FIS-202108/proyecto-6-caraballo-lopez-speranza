import Handler from '../objects/handler.mjs';
import User from '../objects/user.mjs';
import Transaction from '../objects/transaction.mjs';
import moment from 'moment';

let handler;


beforeEach(() => {
  handler = new Handler();
});

describe('test constructor handler', () => {
  test('test create handler variable users', () => {
    expect(handler.users).toEqual([]);
  });

  test('test create handler variable transactions', () => {
    expect(handler.transactions).toEqual([]);
  });

  test('test create handler variable activeUser', () => {
    expect(handler.activeUser).toEqual(undefined);
  });
});


describe('Active User tests', () => {
  let testUser;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    User.USER_ID = 1;
  });

  test('test set a new Active User', () => {
    handler.setActiveUser(testUser);
    expect(handler.activeUser).toEqual(testUser);
  });

  test('test get the actual Active User', () => {
    handler.setActiveUser(testUser);
    expect(handler.getActiveUser()).toEqual(testUser);
  });
});

describe('ABM User tests', () => {
  let testUser;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    User.USER_ID = 1;
  });

  test('test add valid user', () => {
    handler.addUser(testUser);
    expect(handler.users[0]).toEqual(testUser);
  });

  test('get Users list from handler', () => {
    handler.addUser(testUser);
    expect(handler.users).toEqual(handler.getUsers());
  });

  test('test existsUser function with existing user', () => {
    handler.addUser(testUser);
    expect(handler.existsUser('unMail@mail.com')).toEqual(true);
  });

  test('test existsUser function without existing user', () => {
    handler.addUser(testUser);
    expect(handler.existsUser('unMasdasail@mail.com')).toEqual(false);
  });

  test('test edit user with valid password', () => {
    handler.setActiveUser(testUser);
    const newPassword = 'unaPassword';
    handler.editUserPassword(newPassword);
    expect(handler.activeUser.password).toEqual(newPassword);
  });
  test('test edit user with invalid password', () => {
    handler.setActiveUser(testUser);
    const newPassword = '';
    expect(() => {
      handler.editUserPassword(newPassword);
    }).toThrow('La contraseña ingresada no es valida');
  });
});

describe('ABM transaction tests', () => {
  let testUser;
  let testTransaction;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    handler.addUser(testUser);
    handler.setActiveUser(testUser);
    testTransaction = new Transaction(testUser, 'transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'expense');
    User.USER_ID = 1;
  });

  test('test add transaction in handler', () => {
    handler.addTransaction(testTransaction);
    expect(handler.transactions[0]).toEqual(testTransaction);
  });

  test('test get transaction by existing user', () => {
    handler.addTransaction(testTransaction);
    expect(handler.getTransactionsByUser()).toEqual([testTransaction]);
  });

  test('test get transaction by id', () => {
    handler.addTransaction(testTransaction);
    expect(handler.getTransactionById(testTransaction.id)).toEqual(testTransaction);
  });

  test('test update balance', () => {
    const oldBalance = testUser.balance;
    handler.addTransaction(testTransaction);
    handler.updateBalance(testTransaction);
    expect(handler.getActiveUser().balance).toEqual(oldBalance + testTransaction.amount);
  });
});

describe('Log in & register', () => {
  let testUser;
  beforeEach(() => {
    User.USER_ID = 1;
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    User.USER_ID = 1;
  });

  test('test create User correctly and save it', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    expect(handler.users[0]).toEqual(testUser);
  });

  test('test create User correctly and set as active User', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    expect(handler.activeUser).toEqual(testUser);
  });

  test('test create User that already exists', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    expect(() => {
      handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    }).toThrow('El usuario ya existe con ese email');
  });

  test('test create User that is unvalid', () => {
    expect(() => {
      handler.createUser('', testUser.age, testUser.email, testUser.password);
    }).toThrow('El nombre ingresado no es valido');
  });

  test('test log in user correctly', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    handler.loginUser(testUser.email, testUser.password);
    expect(handler.activeUser).toEqual(testUser);
  });

  test('test log in user wrong email', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    expect(() => {
      handler.loginUser('testUser.email', testUser.password);
    }).toThrow('El usuario no existe o la contraseña es incorrecta');
  });

  test('test log in user wrong password', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    expect(() => {
      handler.loginUser(testUser.email, 'testUser.password');
    }).toThrow('El usuario no existe o la contraseña es incorrecta');
  });

  test('test log out user correctly', () => {
    handler.createUser(testUser.name, testUser.age, testUser.email, testUser.password);
    handler.logoutUser();
    expect(handler.activeUser).toEqual(null);
  });
});

describe('create transaction tests', () => {
  const correctName = 'name';
  const correctCategory = 'category';
  const correctAmount = 1000;
  const date = moment();
  const correctDate = moment(date, 'DD/MM/YYYY', true);
  const correctType = 'expense';
  beforeEach(() => {
    handler.setActiveUser(handler.createUser('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe'));
    User.USER_ID = 1;
  });

  test('test create transaction correctly', () => {
    const testTransaction = new Transaction(handler.getActiveUser(), correctName, correctCategory, correctAmount, correctDate, correctType);
    Transaction.TRANSACTION_ID--;
    handler.createTransaction(correctName, correctCategory, correctAmount, correctDate, correctType);
    expect(handler.transactions[0]).toEqual(testTransaction);
  });

  test('test create unvalid transaction', () => {
    expect(() => {
      handler.createTransaction('', correctCategory, correctAmount, correctDate, correctType);
    }).toThrow('El nombre ingresado no es valido');
  });
});

describe('metodos para interactuar con los charts tests', () => {
  beforeEach(() => {
    handler.createUser('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
  });

  test('test get expense and income', () => {
    expect(handler.getExpenseAndIncome()).toEqual([5000, 1000]);
  });

  test('test get expense and income update balance', () => {
    handler.getExpenseAndIncome();
    expect(handler.getActiveUser().balance).toEqual(-4000);
  });

  test('test transactions by category', () => {
    expect(handler.getTransactionsByCategory()).toEqual([['unaCategoria', 'otraCategoria'], [1000, -5000]]);
  });

  test('test transactions by category', () => {
    expect(handler.getTransactionsByDate()).toEqual([['10/11/2021'], [-4000]]);
  });
});

describe('metodos para interactuar con los charts branches alternativas tests', () => {
  beforeEach(() => {
    handler.createUser('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    // handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    // handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
  });

  test('test get expense and income only expense', () => {
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
    expect(handler.getExpenseAndIncome()).toEqual([5000, 0]);
  });
  test('test get expense and income only income', () => {
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'income');
    expect(handler.getExpenseAndIncome()).toEqual([0, 5000]);
  });
  test('test get expense and income with invalid type', () => {
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expse');
    expect(handler.getExpenseAndIncome()).toEqual([5000, 2000]);
  });
  test('test transactions by category invalid type', () => {
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expse');
    expect(handler.getTransactionsByCategory()).toEqual([['unaCategoria', 'otraCategoria'], [1000, 0]]);
  });
  test('test transactions by date invalid type', () => {
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expse');
    expect(handler.getTransactionsByDate()).toEqual([['10/11/2021'], [1000]]);
  });
  test('test transactions by category', () => {
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
    handler.createTransaction('transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'income');
    handler.createTransaction('transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
    expect(handler.getTransactionsByCategory()).toEqual([['unaCategoria', 'otraCategoria'], [2000, -10000]]);
  });
});
