/* eslint-disable require-jsdoc */
import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSnackbar } from '@material/snackbar';
import Handler from '../../dominio/objects/handler';
import Transaction from '../../dominio/objects/transaction';
import User from '../../dominio/objects/user';
import { INCOME_TYPE, EXPENSE_TYPE } from './constants';

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
      document.getElementById('spanGastos').innerHTML = returnTitleNameIndex(activatedEvent.detail.index);
      element.classList.add('content--hidden');
    }
  });
});

const textFieldExpenseName = new MDCTextField(document.getElementById('expenseName'));
const textFieldExpenseCategory = new MDCTextField(document.getElementById('expenseCategory'));
const textFieldExpenseAmount = new MDCTextField(document.getElementById('expenseAmount'));
const textFieldExpenseDate = new MDCTextField(document.getElementById('expenseDate'));

const textFieldIncomeName = new MDCTextField(document.getElementById('incomeName'));
const textFieldIncomeCategory = new MDCTextField(document.getElementById('incomeCategory'));
const textFieldIncomeAmount = new MDCTextField(document.getElementById('incomeAmount'));
const textFieldIncomeDate = new MDCTextField(document.getElementById('incomeDate'));

const addExpenseButton = new MDCRipple(document.getElementById('addExpenseButton'));
const addIncomeButton = new MDCRipple(document.getElementById('addIncomeButton'));

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

// Funciones Auxiliares //
// eslint-disable-next-line require-jsdoc
function returnTitleNameIndex(index) {
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

const datos = getExpenseAndIncome(transactions2);
// Tengo que armar una funcion para el setup de la grafica
// le necesito pasar, username, expenses, incomes.
// retorna un cofig y llamo una funcion que actualiza la grafica

// el razonamiento es similar para el setup de la grafica por categorias
// le necesito pasar username transaciones.

const data = {
  // Aca van los labels de las categorias
  labels: [
    'Gastos',
    'Ingresos',
  ],
  datasets: [{
    label: 'Balance',
    // Aca van los valores de
    data: [datos[0], datos[1]],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(46,139,87)',
    ],
    hoverOffset: 0,
  }],
};
// para home usar doughnut | para reporte por categoria y fecha 
const config = {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Balance {username}',
      },
    },
  },
};

const balanceHome = new Chart(
    document.getElementById('balanceHome'),
    config,
);
