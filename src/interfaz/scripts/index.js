import {MDCRipple} from '@material/ripple';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSnackbar} from '@material/snackbar';
import {MDCMenu} from '@material/menu';
import Handler from '../../dominio/objects/handler.mjs';
import {INCOME_TYPE, EXPENSE_TYPE} from './constants';
import {drawBalanceChart, drawChartBarCategory, drawCharByDate} from './charts';

const handler = new Handler();

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.content').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('content--hidden');
    } else {
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

const textFieldUserNewPassword = new MDCTextField(document.getElementById('userNewPassword'));

const addNewPasswordButton = new MDCRipple(document.getElementById('addNewPasswordButton'));
const loginButton = new MDCRipple(document.getElementById('loginButton'));
const signupButton = new MDCRipple(document.getElementById('signupButton'));
const addExpenseButton = new MDCRipple(document.getElementById('addExpenseButton'));
const addIncomeButton = new MDCRipple(document.getElementById('addIncomeButton'));
const userMenuButton = new MDCRipple(document.getElementById('user-menu'));

const logoutSpan = new MDCRipple(document.getElementById('logout'));
const editPasswordSpan = new MDCRipple(document.getElementById('edit-password'));

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

editPasswordSpan.listen('click', () => {
  document.querySelectorAll('.content').forEach((element) => {
    element.classList.add('content--hidden');
  });
  document.querySelectorAll('.edit-password').forEach((element) => {
    element.classList.remove('edit-password--hidden');
  });
});

addNewPasswordButton.listen('click', () => {
  const userNewPassword = textFieldUserNewPassword.value;

  try {
    handler.editUserPassword(userNewPassword);
    clearEditPasswordFormFields();
    showMessage('Contraseña modificada exitosamente');

    document.querySelectorAll('.home').forEach((element) => {
      element.classList.remove('content--hidden');
    });

    document.querySelectorAll('.edit-password').forEach((element) => {
      element.classList.add('edit-password--hidden');
    });
  } catch (error) {
    showMessage(error.message);
  }
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

loginButton.listen('click', () => {
  try {
    const userEmail = textFieldUserEmail.value;
    const userPassword = textFieldUserPassword.value;

    handler.loginUser(userEmail, userPassword);
    displayMainContentAfterLogin();

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

    drawAllCharts();
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

function clearEditPasswordFormFields() {
  textFieldUserNewPassword.value = '';
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
