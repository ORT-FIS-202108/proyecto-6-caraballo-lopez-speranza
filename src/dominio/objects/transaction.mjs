import moment from 'moment';
export default class Transaction {
  static TRANSACTION_ID = 1;

  constructor(user, name, category, amount, date, type) {
    this.id = Transaction.TRANSACTION_ID;
    this.user = user;
    this.name = name;
    this.category = category;
    this.amount = amount;
    this.date = date;
    this.type = type;
    Transaction.TRANSACTION_ID++;
  }

  static validateTransaction(name, category, amount, date) {
    const nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    const formattedDate = moment(date, 'DD/MM/YYYY', true);

    if (!nameRegex.test(name)) {
      return 'El nombre ingresado no es valido';
    }
    if (!nameRegex.test(category)) { // TODO: ver como manejar las categorias
      return 'La categoria ingresada no es valida';
    }
    if (amount <= 0) {
      return 'El monto ingresado no es valido';
    }
    if (!formattedDate.isValid()) {
      return 'La fecha ingresada no es valida';
    }
    if (!moment(formattedDate).isSame(new Date(), 'month') || !moment(formattedDate).isSame(new Date(), 'year')) {
      return 'La fecha ingresada no se encuentra en el mes y año actual';
    }
  }
}
