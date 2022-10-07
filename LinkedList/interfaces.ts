export interface INode {
  value: any,
  next: Node | null,
  previous: Node | null
};

export default class Node<T>{
  readonly value: T;

  next: Nullable<Node<T>> = null;
  previous: Nullable<Node<T>> = null;

  constructor(value: T) {
    this.value = value;
  }
}

export type Value = any;

export interface NodeList {
  head: Node | null;
  tail: Node | null;

  // [Symbol.iterator](): IterableIterator<T>;
  // prepend(value: Value): INodeList;
  add(value: Value): NodeList;
  // delete(value: Value): INode | null;
  // find(value?: Value | undefined): INode | null;
  // fromArray(values: Array<Value>): INodeList;
  toArray(): Value[];
  // toString(callback?: void): string;
}