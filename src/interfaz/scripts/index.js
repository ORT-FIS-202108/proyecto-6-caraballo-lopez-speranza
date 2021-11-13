import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
// import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
// import Pelicula from '../../dominio/pelicula.mjs';

// const listaPeliculas = new ListaPeliculas();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("content--hidden");
    } else {
      element.classList.add("content--hidden");
    }
  });
});

const textFieldExpenseName = new MDCTextField(document.getElementById('expenseName'));
const textFieldExpenseCategory = new MDCTextField(document.getElementById('expenseCategory'));
const textFieldExpenseAmount = new MDCTextField(document.getElementById('expenseAmount'));
const textFieldExpenseDate = new MDCTextField(document.getElementById('expenseDate'));
//TODO: agregar los inputs faltantes

// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   // let title = textFieldTitle.value;
//   // let year = textFieldYear.value;
//   // let genre = selectGenre.value;
//   try {
//     // let newPelicula = new Pelicula(title, genre, year);
//     // listaPeliculas.agregar(newPelicula);
//   } catch (error) {
//     // const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     // snackbar.labelText = error.message;
//     // snackbar.open();
//   } finally {
//     // let peliculas = listaPeliculas.getPeliculas();
//     // console.log(peliculas);
//   }
// })