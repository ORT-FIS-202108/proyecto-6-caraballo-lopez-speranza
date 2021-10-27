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
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  removeTransaction(transaction) {
    const index = this.transactions.findIndex(t => t.id === transaction.id);
    this.transactions.splice(index, 1);
  }

  getTransactionsByUser(user) {
    return this.transactions.filter(t => t.userId === user.id);
  }

  getTransactionById(id) {
    return this.transactions.find(t => t.id === id);
  }

  editTransaction(transaction) {  
    const index = this.transactions.findIndex(t => t.id === transaction.id);
    this.transactions[index] = transaction;
  }

  updateBalance(transaction) {
    const index = this.users.findIndex(u => u.id === transaction.userId);
    this.users[index].balance += transaction.amount; 
  }
}