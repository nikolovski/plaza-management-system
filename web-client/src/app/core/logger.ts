import {environment} from '../../environments/environment';

const noop = () => undefined;

export default class Logger {

  public static get log(): any {
    return !environment.production ? console.log.bind(console) : noop;
  }

  public static get info(): any {
    return !environment.production ? console.info.bind(console) : noop;
  }

  public static get warn(): any {
    return !environment.production ? console.warn.bind(console) : noop;
  }

  public static get error(): any {
    return !environment.production ? console.error.bind(console) : noop;
  }

  private constructor() {
  }
}
