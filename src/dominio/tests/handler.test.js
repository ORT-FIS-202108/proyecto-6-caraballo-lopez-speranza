import Handler from '../objects/handler.mjs';
import User from '../objects/user.mjs';
import Transaction from '../objects/transaction.mjs';

let handler;


beforeEach(() => {
  handler = new Handler();
});
//decribe aca, constructor
test('create handler variable users', () => {
  expect(handler.users).toEqual([]);
});

test('create handler variable transactions', () => {
  expect(handler.transactions).toEqual([]);
});

test('create handler variable activeUser', () => {
  expect(handler.activeUser).toEqual(undefined);
});

describe('Active User tests', () => {
  let testUser;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
  });

  test('setActiveUser', () => {
    handler.setActiveUser(testUser);
    expect(handler.activeUser).toEqual(testUser);
  });

  test('getActiveUser', () => {
    handler.setActiveUser(testUser);
    expect(handler.getActiveUser()).toEqual(testUser);
  });
});

describe('ABM User tests', () => {
  let testUser;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
  });
  test('addUser', () => {
    handler.addUser(testUser);
    expect(handler.users[0]).toEqual(testUser);
  });
  test('getUsers', () => {
    handler.addUser(testUser);
    expect(handler.users).toEqual(handler.getUsers());
  });
  test('editUser', () => {
    handler.addUser(testUser);
    testUser.name = 'francisco';
    handler.editUser(testUser);
    expect(handler.users[0].name).toEqual('francisco');
  });
  test('existsUser', () => {
    handler.addUser(testUser);
    expect(handler.existsUser('unMail@mail.com')).toEqual(true);
  });
  test('not existsUser', () => {
    handler.addUser(testUser);
    expect(handler.existsUser('unMasdasail@mail.com')).toEqual(false);
  });
});

describe('ABM User tests', () => {
  let testUser;
  let testTransaction;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    handler.addUser(testUser);
    handler.setActiveUser(testUser);
    testTransaction = new Transaction(testUser, 'transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'expense');
  });
  test('add transaction', () => {
    handler.addTransaction(testTransaction);
    expect(handler.transactions[0]).toEqual(testTransaction);
  });
  test('add transaction', () => {
    handler.addTransaction(testTransaction);
    expect(handler.getTransactionsByUser()).toEqual([testTransaction]);
  });
});

/* describe('metodos para interactuar con los charts tests', () => {
  let testUser;
  let testTransaction;
  let testTransaction2;
  beforeEach(() => {
    testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
    testTransaction = new Transaction(testUser, 'transaccion prueba', 'unaCategoria', 1000, '10/11/2021', 'expense');
    testTransaction2 = new Transaction(testUser, 'transaccion prueba2', 'otraCategoria', 5000, '10/11/2021', 'expense');
    handler.addTransaction(testTransaction);
    handler.addTransaction(testTransaction2);
  });
}); */
