import Category from './category';

const MIN_AGE = 1;
const MAX_AGE = 99;
export default class Handler {
  constructor() {
    this.users = [];
    this.transactions = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  editUser(user) {
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  removeTransaction(transaction) {
    const index = this.transactions.findIndex((t) => t.id === transaction.id);
    this.transactions.splice(index, 1);
  }

  getTransactionsByUser(user) {
    return this.transactions.filter((t) => t.user.id === user.id);
  }

  getTransactionById(id) {
    return this.transactions.find((t) => t.id === id);
  }

  editTransaction(transaction) {
    const index = this.transactions.findIndex((t) => t.id === transaction.id);
    this.transactions[index] = transaction;
  }

  updateBalance(transaction) {
    const index = this.users.findIndex((u) => u.id === transaction.userId);
    this.users[index].balance += transaction.amount;
  }

  // metodo al que llama el front para crear un usuario
  createUser(name, age, email, password) {
    try {
      verifyUser(age, email);
    } catch (e) {
      return e.Error;
    }
    const id = calculateIdUser();
    const user = new User(id, name, age, email, password);
    this.addUser(user);
    return 'El Usuario ha sido registrado con exito';
  }

  verifyUser(age, email) {
    if (!this.validateEmail(email)) {
      throw new Error('El email que ha ingresado no es valido');
    }

    if (!this.validateAge(age)) {
      throw new Error('La edad que ha ingresado no es valida');
    }
  }

  calculateIdUser() {
    const users = this.getUsers();
    return 1 + users.length();
  }

  validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  validateAge(age) {
    return age >= MIN_AGE && age <= MAX_AGE;
  }
  // es metodo devuelve una lista de cuanto se gasto por categoria
  getCategories(user) {
    const transactionList = getTransactionsByUser(user);
    let categories = [];
    for (let i = 0; i < transactionList.length()-1; i++) {
      categories = addTransactionToCategory(transactionList[i], categories);
    }
    return categories;
  }
  addTransactionToCategory(transaction, categories) {
    if (isCategoryAlreadyOnList(transaction.category, categories)) {
      for (let i = 0; i < categories.length()-1; i++) {
        if (categories[i].name.toLowerCase() == category.toLowerCase()) {
          categories[i].ammount += transaction.amount;
          return categories;
        }
      }
    } else {
      return addTransaccionToCategory(transaction, addCategoryToList(transaction.category, categories));
    }
  }
  isCategoryAlreadyOnList(category, categories) {
    for (let i = 0; i < categories.length()-1; i++) {
      if (categories[i].name.toLowerCase() == category.toLowerCase()) {
        return True;
      }
    }
    return False;
  }
  addCategoryToList(category, categories) {
    const toAdd = new Category(category);
    return categories.push(toAdd);
  }
}
