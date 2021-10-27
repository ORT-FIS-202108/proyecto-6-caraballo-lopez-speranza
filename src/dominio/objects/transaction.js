export default class Transaction {

  constructor(id, user, name, category, amount, type) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.category = category;
    this.amount = amount;
    this.type = type;
  }
}