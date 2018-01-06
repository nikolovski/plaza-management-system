import {environment} from '../../environments/environment';

export const DB_BASE_URL:string = environment.firebase.databaseURL;

export const DB_PURCHASES_URL: string = DB_BASE_URL.concat('/purchases.json');

export const DB_WALKINS_URL: string = DB_BASE_URL.concat('/walk_ins.json');
export const DB_CUSTOMERS_URL: string = DB_BASE_URL.concat('/customers.json');
