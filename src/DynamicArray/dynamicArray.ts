import { LinkedList } from '../LinkedList';

export default class DynamicArray<T>{
  protected capacity: number = 3;
  protected lengthStore: number = 0;

  protected list: LinkedList<T[]> = new LinkedList();

  constructor(size: number) {
    this.capacity = size;
  }

  public get lenght(): number {
    return this.lengthStore
  }

  public get(index: number): T | undefined {
    const listIndex = this.getIndex(index);
    const arr = this.getArrByIndex(listIndex);
    const innerIndex = this.getInnerIndex(index);

    return arr ? arr[innerIndex] : undefined
  }

  public set(index: number, value: T): void {
    const listIndex = this.getIndex(index);
    const arr = this.getArrByIndex(listIndex);
    const innerIndex = this.getInnerIndex(index);

    if (arr?.length) arr[innerIndex] = value;
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  public values(): IterableIterator<T> {
    const capacity = this.capacity;
    const lenght = this.lengthStore;
    const listLenght = this.list.length;
    let current = this.list.first;
    let curret = 0;
    const list = this.list

    return {
      [Symbol.iterator]() {
        return this;
      },

      next(): IteratorResult<T> {
        const data = current;

        current = data ? data.next : null;

        if (data) {
          for (let j = curret; j < lenght; j++) {

            for (let i = 0; i < capacity; i++) {
              curret++
              return { done: false, value: data.value[i] }
            }
          }
        }


        return { done: true, value: undefined };

      }
    }
  }




  add(value: T) {
    if (this.list.isEmpty) {
      this.createElement(value);

    } else {
      const listIndex = this.getIndex(this.lengthStore);
      const arrIndex = this.getInnerIndex(this.lengthStore);

      const element = this.getArrByIndex(listIndex);

      if (element) {
        element[arrIndex] = value;
      } else {
        this.createElement(value);
      }
    }
    this.lengthStore++;
  }

  private createElement(value: T): void {
    const arr = new Array<T>(this.capacity);
    arr[0] = value;
    this.list.add(arr);
  }

  public getArrByIndex(index: number): T[] | null {
    let itemCount = 0;

    for (let item of this.list) {
      if (itemCount === index) {
        return item;
      }
      itemCount++
    }

    return null;
  }

  public getInnerIndex(arrIndex: number): number {
    return (arrIndex > (this.capacity - 1)) ? (arrIndex % this.capacity) : arrIndex
  }

  public getIndex(arrIndex: number): number {
    return Math.floor(arrIndex / this.capacity)
  }
};
