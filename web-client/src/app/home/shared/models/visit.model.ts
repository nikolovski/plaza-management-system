import {Customer} from './customer.model';

export class Visit {
  id: string;
  customer: Customer;
  date_created: number;
  handled_by: string;
  reason: string;
  reply: string;

  constructor() {
    this.date_created = Date.now();
  }
}
