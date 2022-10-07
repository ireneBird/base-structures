export default class Node<T> {
  readonly value: T;

  next: Node<T> | null = null;
  previous: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}