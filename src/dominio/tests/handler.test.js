import Handler from '../objects/handler.mjs';
import User from '../objects/user.mjs';
import Transaction from '../objects/transaction.mjs';

let handler;
let testUser;
let testTransaction;
let name;
let age;
let email;
let password;
let transactionName;
let category;
let amount;
let date;
let type;
let anotherTransactionName;
let anotherCategory;
let anotherAmount;
let anotherDate;
let anotherType;

describe('test constructor handler', () => {
  beforeEach(() => {
    handler = new Handler();
  });

  test('should create a new Handler', () => {
    expect(handler.users).toEqual([]);
    expect(handler.transactions).toEqual([]);
    expect(handler.activeUser).toEqual(undefined);
  });
});

describe('User methods tests', () => {
  beforeEach(() => {
    name = 'name';
    age = 20;
    email = 'test@test.com';
    password = 'password';
    handler = new Handler();
    testUser = new User(name, age, email, password);
    User.USER_ID = 1;
  });

  test('should return the active User', () => {
    handler.setActiveUser(testUser);

    expect(handler.getActiveUser()).toEqual(testUser);
  });

  test('should return the active User undefined', () => {
    expect(handler.getActiveUser()).toEqual(undefined);
  });

  test('should add new user and should be in the user lis', () => {
    handler.addUser(testUser);

    expect(handler.users[0]).toEqual(testUser);
  });

  test('should add new user list should have one item', () => {
    handler.addUser(testUser);

    expect(handler.getUsers().length).toEqual(1);
  });

  test('checks if added user exists, checking by email', () => {
    handler.addUser(testUser);

    expect(handler.existsUser(email)).toEqual(true);
  });

  test('checks if not added user exists, checking by email', () => {
    expect(handler.existsUser(email)).toEqual(false);
  });

  test('should create an User correctly and save it', () => {
    handler.createUser(name, age, email, password);

    expect(handler.getUsers().length).toEqual(1);
    expect(handler.getActiveUser()).toEqual(testUser);
  });

  test('should try to create a User that already exists', () => {
    handler.createUser(name, age, email, password);

    expect(() => {
      handler.createUser(name, age, email, password);
    }).toThrow('El usuario ya existe con ese email');
  });

  test('should try to create a user that has unvalid empty name', () => {
    expect(() => {
      handler.createUser('', age, email, password);
    }).toThrow('El nombre ingresado no es valido');
  });

  test('should login a user correctly', () => {
    handler.createUser(name, age, email, password);
    handler.loginUser(testUser.email, testUser.password);
    expect(handler.getActiveUser()).toEqual(testUser);
  });

  test('should not login a user correctly, using wrong email', () => {
    const wrongEmail = 'test1@test.com';
    handler.createUser(name, age, wrongEmail, password);

    expect(() => {
      handler.loginUser(testUser.email, test.password);
    }).toThrow('El usuario no existe o la contraseña es incorrecta');
  });

  test('should not login a user correctly, using wrong password', () => {
    const wrongPassword = 'password1';
    handler.createUser(name, age, email, wrongPassword);

    expect(() => {
      handler.loginUser(testUser.email, testUser.password);
    }).toThrow('El usuario no existe o la contraseña es incorrecta');
  });

  test('should log out the active user correctly', () => {
    handler.createUser(name, age, email, password);
    handler.logoutUser();

    expect(handler.getActiveUser()).toEqual(null);
    expect(handler.activeUser).toEqual(null);
  });

  test('should edit user password with a valid one', () => {
    const newPassword = 'newPassword';

    handler.createUser(name, age, email, password);
    handler.setActiveUser(testUser);
    handler.editUserPassword(newPassword);

    expect(handler.activeUser.password).toEqual(newPassword);
  });

  test('should edit user password with an invalid one', () => {
    const invalidPassword = '';

    handler.createUser(name, age, email, password);
    handler.setActiveUser(testUser);

    expect(() => {
      handler.editUserPassword(invalidPassword);
    }).toThrow('La contraseña ingresada no es valida, debe tener un largo minimo de 8 caracteres sin espacios');
  });
});

describe('Transaction methods tests', () => {
  beforeEach(() => {
    transactionName = 'transactionName';
    category = 'category';
    amount = 1000;
    date = '10/11/2021';
    type = 'expense';

    handler = new Handler();
    testUser = new User(name, age, email, password);
    handler.addUser(testUser);
    handler.setActiveUser(testUser);
    testTransaction = new Transaction(testUser, transactionName, category, amount, date, type);
    User.USER_ID = 1;
    Transaction.TRANSACTION_ID = 1;
  });

  test('should add a transaction correctly', () => {
    handler.addTransaction(testTransaction);
    expect(handler.getTransactionsByUser(testUser).length).toEqual(1);
  });

  test('should get all transactions by the active user', () => {
    handler.addTransaction(testTransaction);
    expect(handler.getTransactionsByUser()).toEqual([testTransaction]);
  });

  test('should get 0 transactions for the active user', () => {
    expect(handler.getTransactionsByUser().length).toEqual(0);
  });

  test('should get a transaction by id', () => {
    handler.addTransaction(testTransaction);
    expect(handler.getTransactionById(testTransaction.id)).toEqual(testTransaction);
  });

  test('should get 0 transaction by id', () => {
    expect(handler.getTransactionById(testTransaction.id)).toEqual(undefined);
  });

  test('should update balance correctly', () => {
    const oldBalance = testUser.balance;
    const updatedBalance = oldBalance + testTransaction.amount;

    handler.addTransaction(testTransaction);
    handler.updateBalance(testTransaction);

    expect(handler.getActiveUser().balance).toEqual(updatedBalance);
  });

  test('should create a transaction correctly', () => {
    handler.createTransaction(transactionName, category, amount, date, type);

    expect(handler.getTransactionsByUser().length).toEqual(1);
  });

  test('should create a transaction correctly', () => {
    handler.createTransaction(transactionName, category, amount, date, type);

    expect(handler.getTransactionsByUser().length).toEqual(1);
  });

  test('should try to create a transaction that has unvalid empty name', () => {
    expect(() => {
      handler.createTransaction('', category, amount, date, type);
    }).toThrow('El nombre ingresado no es valido');
  });

  test('should return a transaction list sorted by date', () => {
    const anotherDate = '13/11/2021';
    const anotherTransaction = new Transaction(testUser, transactionName, category, amount, anotherDate, type);
    testTransaction.id = 2;
    anotherTransaction.id = 3;
    const sortedList = [testTransaction, anotherTransaction];

    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransaction.name, anotherTransaction.category, anotherTransaction.amount, anotherTransaction.date, anotherTransaction.type);

    expect(handler.sortTransactionsByDate()).toEqual(sortedList);
  });

  test('should return an empty transaction list sorted by date', () => {
    const sortedList = [];

    expect(handler.sortTransactionsByDate()).toEqual(sortedList);
  });
});

describe('charts methods tests', () => {
  beforeEach(() => {
    transactionName = 'transactionName';
    category = 'category';
    amount = 1000;
    date = '10/11/2021';
    type = 'expense';
    anotherTransactionName = 'anotherTransactionName';
    anotherCategory = 'anotherCategory';
    anotherAmount = 5000;
    anotherDate = '13/11/2021';
    anotherType = 'income';

    handler = new Handler();
    testUser = new User(name, age, email, password);
    handler.addUser(testUser);
    handler.setActiveUser(testUser);
  });

  test('should get the expense and income', () => {
    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransactionName, anotherCategory, anotherAmount, anotherDate, anotherType);
    const testResult = [amount, anotherAmount];

    expect(handler.getExpenseAndIncome()).toEqual(testResult);
  });

  test('should get no expense and income', () => {
    const testResult = [0, 0];

    expect(handler.getExpenseAndIncome()).toEqual(testResult);
  });

  test('should get the transactions by category', () => {
    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransactionName, anotherCategory, anotherAmount, anotherDate, anotherType);
    const testResultCategories = [category, anotherCategory];
    const testResultAmounts = [-amount, anotherAmount];

    expect(handler.getTransactionsByCategory()).toEqual([testResultCategories, testResultAmounts]);
  });

  test('should get no transactions by category', () => {
    const testResultCategories = [];
    const testResultAmounts = [];

    expect(handler.getTransactionsByCategory()).toEqual([testResultCategories, testResultAmounts]);
  });

  test('should get the transactions by date', () => {
    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransactionName, anotherCategory, anotherAmount, anotherDate, anotherType);
    const testResultDates = [date, anotherDate];
    const testResultAmounts = [-amount, anotherAmount];

    expect(handler.getTransactionsByDate()).toEqual([testResultDates, testResultAmounts]);
  });

  test('should get no transactions by date', () => {
    const testResultDates = [];
    const testResultAmounts = [];

    expect(handler.getTransactionsByDate()).toEqual([testResultDates, testResultAmounts]);
  });

  test('should get transactions by date with invalid type', () => {
    const notExpenseOrIncomeType = 'notExpenseOrIncomeType';
    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransactionName, anotherCategory, anotherAmount, date, notExpenseOrIncomeType);
    const testResultDates = [date];
    const testResultAmounts = [4000];

    expect(handler.getTransactionsByDate()).toEqual([testResultDates, testResultAmounts]);
  });

  test('should get transactions by date with invalid type', () => {
    const notExpenseOrIncomeType = 'notExpenseOrIncomeType';
    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransactionName, anotherCategory, anotherAmount, date, notExpenseOrIncomeType);
    handler.createTransaction(transactionName, category, amount, date, type);
    handler.createTransaction(anotherTransactionName, anotherCategory, anotherAmount, date, notExpenseOrIncomeType);
    const testResultCategories = [category, anotherCategory];
    const testResultAmounts = [-2000, 10000];

    expect(handler.getTransactionsByCategory()).toEqual([testResultCategories, testResultAmounts]);
  });
});
