import Node from './node';

export interface InnerQueue<T = unknown> {

  readonly head?: Node<T> | undefined;
  readonly tail?: Node<T> | undefined;
  readonly length: number;
  [Symbol.iterator](): IterableIterator<T>;

  pushBack(task: T): number;
  popFront(): Node<T> | null;
}

export interface InnerDoubleQueue<T> extends InnerQueue<T> {
  popBack(): Node<T> | null;
  pushFront(...data: T[]): number;
}