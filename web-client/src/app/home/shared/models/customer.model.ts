import {Employee} from './employee.model';

export class Customer {
  id?: string;
  type: string; //buyer or seller
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  address: Array<{
    street: string;
    apt: string;
    city: string;
    state: string;
    zip: string
  }>;
  date_created: number;
  recorded_by: Employee;

  constructor(){
    this.date_created = Date.now();
  }
}
