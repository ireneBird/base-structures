import { InnerDoubleQueue } from './interfaces';
import Node from './node';
import Queue from './queue';

export default class DoubleQueue<T> extends Queue<T> implements InnerDoubleQueue<T>{
  constructor() {
    super();
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.queue.values();
  }

  pushFront(...data: T[]): number {
    return this.queue.unshift(...data);
  }

  popBack(): Node<T> | null {
    return this.queue.pop();
  }
}