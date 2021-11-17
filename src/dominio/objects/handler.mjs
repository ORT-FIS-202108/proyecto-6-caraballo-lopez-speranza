import User from './user.mjs';

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

  createUser(name, age, email, password) {
    try {
      User.verifyUser(name, age, email, password);
      const user = new User(name, age, email, password);
      this.addUser(user);
      return 'El usuario ha sido registrado con exito';
    } catch (err) {
      return err;
    }
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
}
