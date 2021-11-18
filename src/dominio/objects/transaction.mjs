export default class Transaction {
  constructor(id, user, name, category, amount, date, type) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.category = category;
    this.amount = amount;
    this.date = date;
    this.type = type;
  }
}
