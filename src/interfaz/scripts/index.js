import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Handler from '../../dominio/objects/handler';
import Transaction from '../../dominio/objects/transaction';
import User from '../../dominio/objects/user';
import MaterialDateTimePicker from 'material-datetime-picker';


const handler = new Handler();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("content--hidden");
    } else {
      document.getElementById("spanGastos").innerHTML = retornaTitleSegunIndex(activatedEvent.detail.index);
      element.classList.add("content--hidden");
    }
  });
});

const textFieldExpenseName = new MDCTextField(document.getElementById('expenseName'));
const textFieldExpenseCategory = new MDCTextField(document.getElementById('expenseCategory'));
const textFieldExpenseAmount = new MDCTextField(document.getElementById('expenseAmount'));
const textFieldExpenseDate = new MDCTextField(document.getElementById('expenseDate'));
//TODO: agregar los inputs faltantes

const addExpenseButton = new MDCRipple(document.getElementById('addExpenseButton'));

addExpenseButton.listen('click', () => {
  //TODO: hacer funcion para el add de expense
  let expenseName = textFieldExpenseName.value;
  let expenseCategory = textFieldExpenseCategory.value;
  let expenseAmount = textFieldExpenseAmount.value;
  let expenseDate = textFieldExpenseDate.value;
  const newUser = new User(1, "test", 20, "email", "password", 100);

  try {
    let newTransaction = new Transaction(1, newUser, expenseName, expenseCategory, expenseAmount, expenseDate);
    handler.addTransaction(newTransaction);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let transactions = handler.getTransactionsByUser(newUser);
    console.log(transactions);
  }
});


// Funciones Auxiliares //
function retornaTitleSegunIndex(index){
  let title = "";
  switch (index) {
    case 0:
      title = "Mis Gastos";
      break;
    case 1:
      title = "Agregar Gasto";
      break;
    case 2: 
      title = "Agregar Ingreso";
      break;
    case 3: 
      title = "Ver Reporte";
      break;
    default:
      title = "Mis Gastos";
  }
  return title;
}