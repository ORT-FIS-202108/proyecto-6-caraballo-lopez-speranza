/* eslint-disable require-jsdoc */
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSnackbar} from '@material/snackbar';
import Handler from '../../dominio/objects/handler.mjs';
import Transaction from '../../dominio/objects/transaction.mjs';
import User from '../../dominio/objects/user.mjs';
import {INCOME_TYPE, EXPENSE_TYPE} from './constants';
import {drawBalanceChart, drawCategoryChart} from './charts';

const handler = new Handler();

// Dummy data // TODO: Eliminar al finalizar el proyecto
const testUser = new User(2, 'test', 20, 'email@emnail.com', 'password**', 100);
handler.addTransaction(new Transaction(2, testUser, 'Ingres', 'Categoria 1', 1000, 'Hoy', INCOME_TYPE));
handler.addTransaction(new Transaction(2, testUser, 'Ingreso dos', 'Categoria 4', 3000, 'Ayer', INCOME_TYPE));
handler.addTransaction(new Transaction(2, testUser, 'Ingreso tres', 'Categoria 2', 2000, 'Anted de ayer', INCOME_TYPE));
handler.addTransaction(new Transaction(2, testUser, 'Gasto', 'Categoria 1', 2300, 'Hoy', EXPENSE_TYPE));

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

// Agregar gasto //
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

// Agregar Ingreso //
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
  document.querySelectorAll('.main-hidden').forEach((element) => {
    element.classList.remove('main-hidden');
  });
  document.querySelectorAll('.login').forEach((element) => {
    element.classList.add('initial-content-hidden');
  });
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
  switch (index) {
    case 0:
      return 'Mis Gastos';
    case 1:
      return 'Agregar Gasto';
    case 2:
      return 'Agregar Ingreso';
    case 3:
      return 'Ver Reporte';
    default:
      return 'Mis Gastos';
  }
}

// Testin graficas//
const transactions2 = handler.getTransactionsByUser(testUser);
console.log('Aca van las del test user');
// new Transaction(2, testUser, 'Ingreso tres', 'Categoria 2', 2000, 'Anted de ayer', INCOME_TYPE);

function getExpenseAndIncome(userTransactions) {
  // recibe un array con las trasnaciones del usuario
  // retorna un array con los gastos y ingresos para eleborar el grafico
  let userIncome = 0;
  let userExpense = 0;
  for (const elem of transactions2) {
    if (elem.type === INCOME_TYPE) {
      userIncome += elem.amount;
    } else if (elem.type === EXPENSE_TYPE) {
      userExpense += elem.amount;
    }
  }
  const data = [userExpense, userIncome];
  return data;
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

function showMessage(message) {
  const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  snackbar.labelText = message;
  snackbar.open();
}


const datos = getExpenseAndIncome(transactions2);
// Tengo que armar una funcion para el setup de la grafica
// le necesito pasar, username, expenses, incomes.
// retorna un cofig y llamo una funcion que actualiza la grafica

// el razonamiento es similar para el setup de la grafica por categorias
// le necesito pasar username transaciones. la fecha viene //Dd/Mm/Yyyy
drawBalanceChart('Test User', datos[0], datos[1]);
