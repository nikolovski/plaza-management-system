export default class Utils {
  static getKeysForPage(keys: Array<any>, pageNumber: number, pageSize: number) {
    const start = pageNumber * pageSize;
    const end = start + pageSize;
    return keys.slice(start, end);
  }

  static getKeyBoundariesForPage(keys: Array<any>, pageNumber: number, pageSize: number) {
    const start = pageNumber * pageSize;
    const end = !keys[start + pageSize] ? keys.length : start + pageSize;
    return Array.of(keys[start], keys[end - 1]);
  }

  static isNumber(input: any): boolean {
    return Number(input) ? true : false;
  }

  static compareStrings(a, b, ascending) {
    return ascending ? a.localeCompare(b) : b.localeCompare(a);
  }

  static swap(array: Array<any>, source: number, target: number): Array<any> {
    if (source != target){
      const temp = array[source];
      array[source] = array[target];
      array[target] = temp;
    }
    return array;
  }
}
