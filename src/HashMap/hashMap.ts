import { LinkedList } from '../LinkedList';

interface HashValue<T> {
  value: T;
  key: any;
}

type HashItem<T> = LinkedList<HashValue<T>>

const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

export default class HashMap<T>{
  protected buffer: Array<HashItem<T>>;
  protected capacity: number;
  protected lenghtStore: number = 0;


  constructor(size: number = 31) {
    if (!isPrime(size)) {
      throw new Error('Need prime number for capacity');
    }

    this.capacity = size;
    this.buffer = new Array(size);

  }

  private hashFunc(key: unknown, base: number = 10) {
    const keyString = String(key);
    const value = keyString.split('').reduce((sum, acc, i) => sum + (acc.charCodeAt(0) * base ** i), 0);
    return value % this.capacity;
  };

  public set(key: unknown, value: T): void {
    const hashKey = this.hashFunc(key);
    let list: HashItem<T> | undefined = this.buffer[hashKey];

    if (!list) {
      this.buffer[hashKey] = new LinkedList<HashValue<T>>();
    } else {
      if (this.get(key)) throw new Error('This key is exist')
    }

    this.buffer[hashKey].add({ value, key });
    this.lenghtStore++;
  };

  public get(key: any): T | undefined {
    const hashKey = this.hashFunc(key);
    let list: HashItem<T> | undefined = this.buffer[hashKey];

    if (list) {
      for (const el of list) {
        if (el.key == key) return el.value;
      }
    }
    return undefined;
  }

  public clear() {
    this.buffer = new Array(this.capacity);
    this.lenghtStore = 0;
  }

  //TODO: create keys()
  public keys() {


  }
}
