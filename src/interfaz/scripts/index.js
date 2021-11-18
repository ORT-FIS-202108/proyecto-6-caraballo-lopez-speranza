import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Handler from '../../dominio/objects/handler.mjs';
import Transaction from '../../dominio/objects/transaction.mjs';
import User from '../../dominio/objects/user.mjs';
import {INCOME_TYPE, EXPENSE_TYPE} from './constants';

const handler = new Handler();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('content--hidden');
    } else {
      document.getElementById('spanGastos').innerHTML = getTitleByIndex(activatedEvent.detail.index);
      element.classList.add('content--hidden');
    }
  });
});

const textFieldUserEmail = new MDCTextField(document.getElementById('userEmail'));
const textFieldUserPassword = new MDCTextField(document.getElementById('userPassword'));

const textFieldUserSignupName = new MDCTextField(document.getElementById('userSignupName'));
const textFieldUserSignupAge = new MDCTextField(document.getElementById('userSignupAge'));
const textFieldUserSignupEmail = new MDCTextField(document.getElementById('userSignupEmail'));
const textFieldUserSignupEmailConfirmation = new MDCTextField(document.getElementById('userSignupEmailConfirmation'));
const textFieldUserSignupPassword = new MDCTextField(document.getElementById('userSignupPassword'));
const textFieldUseSignuprPasswordConfirmation = new MDCTextField(document.getElementById('userSignupPasswordConfirmation'));

const textFieldExpenseName = new MDCTextField(document.getElementById('expenseName'));
const textFieldExpenseCategory = new MDCTextField(document.getElementById('expenseCategory'));
const textFieldExpenseAmount = new MDCTextField(document.getElementById('expenseAmount'));
const textFieldExpenseDate = new MDCTextField(document.getElementById('expenseDate'));

const textFieldIncomeName = new MDCTextField(document.getElementById('incomeName'));
const textFieldIncomeCategory = new MDCTextField(document.getElementById('incomeCategory'));
const textFieldIncomeAmount = new MDCTextField(document.getElementById('incomeAmount'));
const textFieldIncomeDate = new MDCTextField(document.getElementById('incomeDate'));

const loginButton = new MDCRipple(document.getElementById('loginButton'));
const signupButton = new MDCRipple(document.getElementById('signupButton'));
const addExpenseButton = new MDCRipple(document.getElementById('addExpenseButton'));
const addIncomeButton = new MDCRipple(document.getElementById('addIncomeButton'));

const signupLink = new MDCRipple(document.getElementById('signupLink'));

addExpenseButton.listen('click', () => {
  // TODO: hacer funcion para el add de expense
  const expenseName = textFieldExpenseName.value;
  const expenseCategory = textFieldExpenseCategory.value;
  const expenseAmount = textFieldExpenseAmount.value;
  const expenseDate = textFieldExpenseDate.value;
  const newUser = new User(1, 'test', 20, 'email', 'password', 100);

  try {
    const newTransaction = new Transaction(1, newUser, expenseName, expenseCategory, expenseAmount, expenseDate, EXPENSE_TYPE);
    handler.addTransaction(newTransaction);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    const transactions = handler.getTransactionsByUser(newUser);
    console.log(transactions);
  }
});

addIncomeButton.listen('click', () => {
  const incomeName = textFieldIncomeName.value;
  const incomeCategory = textFieldIncomeCategory.value;
  const incomeAmount = textFieldIncomeAmount.value;
  const incomeDate = textFieldIncomeDate.value;
  const newUser = new User(1, 'income user', 20, 'email', 'password', 100);

  try {
    const newTransaction = new Transaction(1, newUser, incomeName, incomeCategory, incomeAmount, incomeDate, INCOME_TYPE);
    handler.addTransaction(newTransaction);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    const transactions = handler.getTransactionsByUser(newUser);
    console.log(transactions);
  }
});

loginButton.listen('click', () => {
  try {
    const userEmail = textFieldUserEmail.value;
    const userPassword = textFieldUserPassword.value;

    handler.loginUser(userEmail, userPassword);
    displayMainContentAfterLogin();
  } catch (error) {
    showMessage(error.message);
  }
});

signupButton.listen('click', () => {
  try {
    const userName = textFieldUserSignupName.value;
    const userAge = textFieldUserSignupAge.value;
    const userEmail = textFieldUserSignupEmail.value;
    const userEmailConfirmation = textFieldUserSignupEmailConfirmation.value;
    const userPassword = textFieldUserSignupPassword.value;
    const userPasswordConfirmation = textFieldUseSignuprPasswordConfirmation.value;

    validEmailConfirmation(userEmail, userEmailConfirmation);
    validPasswordConfirmation(userPassword, userPasswordConfirmation);

    handler.createUser(userName, userAge, userEmail, userPassword);
    displayMainContent();
  } catch (error) {
    showMessage(error.message);
  }
});

signupLink.listen('click', () => {
  document.querySelectorAll('.login').forEach((element) => {
    element.classList.add('initial-content-hidden');
  });
  document.querySelectorAll('.signup').forEach((element) => {
    element.classList.remove('initial-content-hidden');
  });
});

// Funciones Auxiliares //
function getTitleByIndex(index) {
  let title = '';
  switch (index) {
    case 0:
      title = 'Mis Gastos';
      break;
    case 1:
      title = 'Agregar Gasto';
      break;
    case 2:
      title = 'Agregar Ingreso';
      break;
    case 3:
      title = 'Ver Reporte';
      break;
    default:
      title = 'Mis Gastos';
  }
  return title;
}

function validEmailConfirmation(email, emailConfirmation) {
  if (email !== emailConfirmation) {
    throw new Error('Los emails no coinciden. Por favor intenta nuevamente');
  }
}

function validPasswordConfirmation(password, passwordConfirmation) {
  if (password !== passwordConfirmation) {
    throw new Error('Las contraseñas no coinciden. Por favor intenta nuevamente');
  }
}

function displayMainContent() {
  document.querySelectorAll('.main-hidden').forEach((element) => {
    element.classList.remove('main-hidden');
  });
  document.querySelectorAll('.signup').forEach((element) => {
    element.classList.add('initial-content-hidden');
  });
}

function displayMainContentAfterLogin() {
  document.querySelectorAll('.main-hidden').forEach((element) => {
    element.classList.remove('main-hidden');
  });
  document.querySelectorAll('.login').forEach((element) => {
    element.classList.add('initial-content-hidden');
  });
}

function showMessage(message) {
  const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  snackbar.labelText = message;
  snackbar.open();
}
