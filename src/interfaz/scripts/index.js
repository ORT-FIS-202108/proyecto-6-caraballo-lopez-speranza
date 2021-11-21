/* eslint-disable require-jsdoc */
import {MDCRipple} from '@material/ripple';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSnackbar} from '@material/snackbar';
import {MDCMenu} from '@material/menu';
import Handler from '../../dominio/objects/handler.mjs';
import {INCOME_TYPE, EXPENSE_TYPE} from './constants';
import {drawBalanceChart, drawChartBarCategory, drawCharByDate} from './charts';
import User from '../../dominio/objects/user.mjs';
import Transaction from '../../dominio/objects/transaction.mjs';

const handler = new Handler();

// Dummy data // TODO: Eliminar al finalizar el proyecto
const testUser = new User('test', 20, 'test@test.com', '12345678', 100);
handler.addTransaction(new Transaction(testUser, 'Ingres', 'Categoria 1', 1000, '01/11/2021', INCOME_TYPE));
handler.addTransaction(new Transaction(testUser, 'Ingreso dos', 'Categoria 4', 3000, '21/11/2021', INCOME_TYPE));
handler.addTransaction(new Transaction(testUser, 'Ingreso tres', 'Categoria 2', 2000, '20/11/2021', INCOME_TYPE));
handler.addTransaction(new Transaction(testUser, 'Gasto', 'Categoria 1', 2300, '21/11/2021', EXPENSE_TYPE));
handler.addTransaction(new Transaction(testUser, 'Gasto', 'Categoria 5', 1000, '21/11/2021', INCOME_TYPE));
handler.addTransaction(new Transaction(testUser, 'Gasto', 'Categoria 3', 1300, '05/11/2021', EXPENSE_TYPE));
handler.addUser(testUser);

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('content--hidden');
    } else {
      document.getElementById('title').innerHTML = getTitleByIndex(activatedEvent.detail.index);
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
const userMenuButton = new MDCRipple(document.getElementById('user-menu'));

const logoutSpan = new MDCRipple(document.getElementById('logout'));
const signupLink = new MDCRipple(document.getElementById('signupLink'));

const byCategoryReportButton = new MDCRipple(document.getElementById('byCategoryReportButton'));
const byDateReportButton = new MDCRipple(document.getElementById('byDateReportButton'));

byCategoryReportButton.listen('click', () => {
  document.getElementById('section-category-report').classList.remove('content--hidden');
  document.getElementById('section-by-date-report').classList.add('content--hidden');
});

byDateReportButton.listen('click', () => {
  document.getElementById('section-by-date-report').classList.remove('content--hidden');
  document.getElementById('section-category-report').classList.add('content--hidden');
});

userMenuButton.listen('click', () => {
  const menu = new MDCMenu(document.querySelector('.mdc-menu'));
  menu.open = true;
});

logoutSpan.listen('click', () => {
  hideMainContent();
  handler.logoutUser();
  resetApp();
});

addExpenseButton.listen('click', () => {
  const expenseName = textFieldExpenseName.value;
  const expenseCategory = textFieldExpenseCategory.value;
  const expenseAmount = parseInt(textFieldExpenseAmount.value);
  const expenseDate = textFieldExpenseDate.value;

  try {
    handler.createTransaction(expenseName, expenseCategory, expenseAmount, expenseDate, EXPENSE_TYPE);
    clearExpenseFormFields();
    drawAllCharts();
    showMessage('Gasto agregado exitosamente');
  } catch (error) {
    showMessage(error.message);
  }
});

// Agregar Ingreso //
addIncomeButton.listen('click', () => {
  const incomeName = textFieldIncomeName.value;
  const incomeCategory = textFieldIncomeCategory.value;
  const incomeAmount = parseInt(textFieldIncomeAmount.value);
  const incomeDate = textFieldIncomeDate.value;

  try {
    handler.createTransaction(incomeName, incomeCategory, incomeAmount, incomeDate, INCOME_TYPE);
    clearIncomeFormFields();
    drawAllCharts();
    showMessage('Ingreso agregado exitosamente');
  } catch (error) {
    showMessage(error.message);
  }
});

// LOG IN
loginButton.listen('click', () => {
  try {
    const userEmail = textFieldUserEmail.value;
    const userPassword = textFieldUserPassword.value;

    handler.loginUser(userEmail, userPassword);
    displayMainContentAfterLogin();

    // Dibujar el chart de balance de usuario activo
    drawAllCharts();
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

function drawAllCharts() {
  drawBalanceChart(handler.getActiveUser(), handler.getExpenseAndIncome());
  drawChartBarCategory(handler.getTransactionsByCategory());
  drawCharByDate(handler.getTransactionsByDate());
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

function hideMainContent() {
  document.querySelectorAll('.main').forEach((element) => {
    element.classList.add('main-hidden');
  });
  document.querySelectorAll('.login').forEach((element) => {
    element.classList.remove('initial-content-hidden');
  });
}

function resetApp() {
  // TODO: llamar a function logout en handler que borra el current user
  clearLoginFormFields();
  clearSignupFormFields();
  clearExpenseFormFields();
  clearIncomeFormFields();
}

function showMessage(message) {
  const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  snackbar.labelText = message;
  snackbar.open();
}

function clearLoginFormFields() {
  textFieldUserEmail.value = '';
  textFieldUserPassword.value = '';
}

function clearSignupFormFields() {
  textFieldUserSignupName.value = '';
  textFieldUserSignupAge.value = '';
  textFieldUserSignupEmail.value = '';
  textFieldUserSignupEmailConfirmation.value = '';
  textFieldUserSignupPassword.value = '';
  textFieldUseSignuprPasswordConfirmation.value = '';
}

function clearExpenseFormFields() {
  textFieldExpenseName.value = '';
  textFieldExpenseCategory.value = '';
  textFieldExpenseAmount.value = '';
  textFieldExpenseDate.value = '';
}

function clearIncomeFormFields() {
  textFieldIncomeName.value = '';
  textFieldIncomeCategory.value = '';
  textFieldIncomeAmount.value = '';
  textFieldIncomeDate.value = '';
}
