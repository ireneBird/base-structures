import { Fn } from './interfaces';

export default class Node<T> {
  readonly value: T;

  next: Node<T> | null = null;
  previous: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  public toString(callback?: Fn): string {
    return callback
      ? callback(this.value as { [ket: string]: any })
      : `${this.value}`;
  }
}
