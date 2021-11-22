import Transaction from './transaction.mjs';
import User from './user.mjs';

export default class Handler {
  constructor() {
    this.users = [];
    this.transactions = [];
    this.activeUser;
  }

  setActiveUser(user) {
    this.activeUser = user;
  }

  getActiveUser() {
    return this.activeUser;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  editUserPassword(newPassword) {
    const validationMsg = User.validatePassword(newPassword);
    if (!!validationMsg) {
      throw new Error(validationMsg);
    }
    this.activeUser.password = newPassword;
  }

  existsUser(email) {
    return this.users.findIndex((u) => u.email === email) !== -1;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getTransactionsByUser() {
    const activeUser = this.getActiveUser();
    return this.transactions.filter((t) => t.user.id === activeUser.id);
  }

  getTransactionById(id) {
    return this.transactions.find((t) => t.id === id);
  }

  updateBalance(transaction) {
    const index = this.users.findIndex((u) => u.id === transaction.user.id);
    this.users[index].balance += transaction.amount;
  }

  createUser(name, age, email, password) {
    const validationMsg = User.validateUser(name, age, email, password);
    if (!!validationMsg) {
      throw new Error(validationMsg);
    }

    if (this.existsUser(email)) {
      throw new Error('El usuario ya existe con ese email');
    } else {
      const user = new User(name, age, email, password);
      this.addUser(user);
      this.setActiveUser(user);
    }
  }

  loginUser(email, password) {
    const user = this.users.find((u) => u.email === email);
    if (!!user && user.password === password) {
      this.setActiveUser(user);
    } else {
      throw new Error('El usuario no existe o la contraseña es incorrecta');
    }
  }

  logoutUser() {
    this.setActiveUser(null);
  }

  createTransaction(name, category, amount, expenseDate, type) {
    const validationMsg = Transaction.validateTransaction(name, category, amount, expenseDate);
    if (!!validationMsg) {
      throw new Error(validationMsg);
    }

    const transaction = new Transaction(this.getActiveUser(), name, category, amount, expenseDate, type);
    this.addTransaction(transaction);
  }

  // ---------------  Inicio  --------------- //
  // Metodos para interactuar con los charts  //
  // ---------------------------------------- //
  getExpenseAndIncome() {
    // Usa las transacciones para obtener el gasto y el ingreso
    // retorna un array con los gastos y ingresos para eleborar el grafico
    const transaction = this.getTransactionsByUser();
    let userIncome = 0;
    let userExpense = 0;
    for (const elem of transaction) {
      if (elem.type === 'income') {
        userIncome += elem.amount;
      } else if (elem.type === 'expense') {
        userExpense += elem.amount;
      }
    }
    const data = [userExpense, userIncome];
    this.activeUser.balance = userIncome - userExpense;
    return data;
  }

  getTransactionsByCategory() {
    const transaction = this.getTransactionsByUser();
    const data = [];
    const categories = [];
    for (const elem of transaction) {
      // Armo un array con las categorias
      if (categories.indexOf(elem.category) === -1) {
        categories.push(elem.category);
        data[categories.indexOf(elem.category)] = 0;
      }
      const categoryIndex = categories.indexOf(elem.category);
      // Agrego la transaccion dependiendo del tipo en la posicion de la categoria
      if (elem.type === 'expense') {
        data[categoryIndex] -= elem.amount;
      } else if (elem.type === 'income') {
        data[categoryIndex] += elem.amount;
      }
    }
    return [categories, data];
  }

  getTransactionsByDate() {
    const transaction = this.getTransactionsByUser();
    const data = [];
    const dates = [];
    for (const elem of transaction) {
      if (dates.indexOf(elem.date) === -1) {
        dates.push(elem.date);
        data[dates.indexOf(elem.date)] = 0;
      }
      const dateIndex = dates.indexOf(elem.date);
      if (elem.type === 'expense') {
        data[dateIndex] -= elem.amount;
      } else if (elem.type === 'income') {
        data[dateIndex] += elem.amount;
      }
    }
    return [dates, data];
  }
  // ---------------  Fin  ------------------ //
  // Metodos para interactuar con los charts  //
  // ---------------------------------------- //
}

