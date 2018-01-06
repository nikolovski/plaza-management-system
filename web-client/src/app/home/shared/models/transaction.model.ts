import {Customer} from './customer.model';
import {Item} from './item.model';

export class Transaction {
  id?: string;
  transaction_type: string; //purchase or sale
  customer: Customer;
  items_in: Array<Item>;
  items_out: Array<Item>;
  payment_type: string;
  check_number: string;
  amount: number;
  transaction_details: string;
  transaction_date: Date;
  recorded_by: string;
  picture: string;
  date_recorded: number;

  constructor(){
    this.date_recorded = Date.now();
  }

  get transactionType(): string {return this.transaction_type;}

}
