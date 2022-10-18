import Node from './node';
import { LinkedList } from '../LinkedList';

export default class Queue<T>{
  protected queue: LinkedList<T>;

  constructor() {
    this.queue = new LinkedList<T>();
  }

  get length(): number {
    return this.queue.length;
  }

  get first(): Node<T> | null {
    return this.queue.first;
  }

  get last(): Node<T> | null {
    return this.queue.last;
  }

  public pushBack(value: T): number {
    return this.queue.add(value);
  }

  public popFront(): Node<T> | null {
    return this.queue.shift();
  }

  public isEmpty(): boolean {
    return this.queue.isEmpty;
  }

  public values(): IterableIterator<T> {
    return this.queue.values();
  }
}