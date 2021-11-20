import Handler from '../objects/handler.mjs';
import User from '../objects/user.mjs';

test('create handler variable users', () => {
  const handler = new Handler();
  expect(handler.users).toEqual([]);
});

test('create handler variable transactions', () => {
  const handler = new Handler();
  expect(handler.transactions).toEqual([]);
});

test('create handler variable activeUser', () => {
  const handler = new Handler();
  expect(handler.activeUser).toEqual(undefined);
});

test('setActiveUser', () => {
  const handler = new Handler();
  const testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
  handler.setActiveUser(testUser);
  expect(handler.activeUser).toEqual(testUser);
});

test('getActiveUser', () => {
  const handler = new Handler();
  const testUser = new User('Fran', 16, 'unMail@mail.com', 'sads32sasdwasdwe');
  handler.setActiveUser(testUser);
  expect(handler.getActiveUser()).toEqual(testUser);
});

