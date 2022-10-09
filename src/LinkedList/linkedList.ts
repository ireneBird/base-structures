import Node from './node';

export default class DoubleLinkedList<T> {

  protected head: Node<T> | null = null;
  protected tail: Node<T> | null = null;
  protected lengthStore: number = 0;


  get length(): number {
    return this.lengthStore;
  }

  get first(): Node<T> | null {
    return this.head;
  }

  get last(): Node<T> | null {
    return this.tail;
  }

  get isEmpty(): boolean {
    return this.lengthStore == 0;
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  add(value: T): number {
    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
    }

    node.previous = this.tail;

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;

    this.lengthStore++;

    return this.lengthStore;
  }

  pop(): Node<T> | null {
    if (!this.tail) {
      return null
    }

    this.lengthStore--;

    const deletedTail = this.tail;

    if (deletedTail == null) {
      return null
    }

    if (this.head == this.tail) {
      this.clear;

      return deletedTail;
    }


    this.tail = deletedTail.previous;

    if (this.tail) this.tail.next = null;

    deletedTail.previous = null;

    return deletedTail
  }

  shift(): Node<T> | null {
    if (this.lengthStore === 0) return null;

    const firstNode = this.head;

    if (firstNode === null) return null;

    this.head = firstNode.next;

    if (this.head === null) {
      this.clear();
      return firstNode;
    }

    this.lengthStore--;

    firstNode.next = null
    return firstNode;
  }

  unshift(...data: T[]): number {
    data.forEach((d) => {
      const node = new Node(d);

      if (this.first) {
        this.first.previous = node;
      }

      if (this.tail == null) {
        this.tail = node
      }

      node.next = this.first;
      this.head = node;
      this.lengthStore++;

    })

    return this.lengthStore;
  }

  toArray(): T[] {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }


  clear(): void {
    this.lengthStore = 0;
    this.head = null;
    this.tail = null;
  }

  includes(value: T): boolean {
    if (Number.isNaN(value)) {
      for (const el of this) {
        if (Number.isNaN(el)) {
          return true;
        }
      }
    } else {
      for (const el of this) {
        if (el === value) {
          return true;
        }
      }
    }

    return false;
  }

  values(): IterableIterator<T> {
    const length = this.lengthStore;
    let current = this.head;
    let curret = 0;

    return {
      [Symbol.iterator]() {
        return this;
      },

      next(): IteratorResult<T> {
        const done = length <= curret++;
        const data = current;

        current = data ? data.next : null;

        if (done || data == null) {
          return { done: true, value: undefined };
        }

        return { done, value: data.value }
      }
    }

  }

  reverse(): DoubleLinkedList<T> {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      prevNode = currNode.previous;
      nextNode = currNode.next;

      currNode.next = prevNode;
      currNode.previous = nextNode;

      prevNode = currNode;

      currNode = nextNode;
    }

    this.tail = this.head;

    this.head = prevNode;

    return this;
  }
}