import { InnerStack } from './interfaces';

export default class Stack<T> implements InnerStack<T> {
  protected stack: Array<T>;
  current: number = -1;
  maxSize: number = 0;
  lengthStore: number = 0;

  constructor(limit: number) {
    this.maxSize = limit;
    this.stack = new Array<T>(limit);
  }

  get length(): number {
    return this.lengthStore;
  }

  get isEmpty(): boolean {
    return this.lengthStore == 0;
  }

  public push(value: T): number {
    if (this.current + 1 >= this.maxSize)
      this.current++;
    this.stack[this.current] = value;

    return this.lengthStore;
  }

  public pop(): T | undefined {

    if (this.isEmpty) {
      return;
    }

    const data = this.stack[this.current];
    delete this.stack[this.current];

    this.current--;

    return data;
  }

  public peekBack(): T {
    return this.stack[this.current];
  }
}