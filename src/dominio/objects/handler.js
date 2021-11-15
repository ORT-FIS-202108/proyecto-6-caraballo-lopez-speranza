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
    return this.transactions.filter(t => t.user.id === user.id);
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
  //metodo al que llama el front para crear un usuario
  createUser(name, age, email, password){
    try {
      verifyUser(age, email)
    }
    catch(e){
      return e.Error;
    }
    let id = calculateIdUser();
    let user = new User(id, name, age, email, password);
    this.addUser(user);
    return "El Usuario ha sido registrado con exito";
  }
  //verificaciones antes de crear un user
  verifyUser(age, email){
    if(validateEmail(email))
    {
      if (validateAge(age)){
        return True;
      }
      else
      {
        throw new Error('La edad que ha ingresado no es valida')
      }
    }
    else{
      throw new Error('El email que ha ingresado no es valido')
    }

  }
  calculateIdUser() {
    let users = this.getUsers();
    return 1 + users.length();
  }
  validateEmail(email) {
    return email.includes('@')
  }
  validateAge(age) {
    let minAge = 0;
    let maxAge = 99;
    try {
      if(age>minAge && age < maxAge) {
        return True;
      }
      else {
        return False;
      }
    }
    catch (TypeError) {
      return False;
    }
  }
}