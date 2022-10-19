const MAX_CAPACITY = 4294967295;

export default class Vector<T>{
  protected capacity: number;
  protected lengthStore: number = 0;

  private array: Array<T>;

  constructor(size: number) {
    if (size <= 0 || size > MAX_CAPACITY) {
      throw new Error('Incorrect capacity');
    }

    this.capacity = size;
    this.array = new Array<T>(size)
  }

  get length(): number {
    return this.lengthStore
  }

  public add(value: T): void {
    if (this.lengthStore >= this.capacity) {
      this.increaseVector()
    }

    this.array[this.lengthStore++] = value;
  }

  public pop(): T {
    const item = this.array[this.lengthStore--];

    return item;
  }

  private increaseVector(): void {
    if (this.lengthStore >= MAX_CAPACITY) {
      throw new Error('Array is full');
    }

    const buffer = this.array;
    this.capacity = Math.min(MAX_CAPACITY, this.capacity * 2);

    this.array = new Array<T>(this.capacity);

    for (let i = 0; i < this.lengthStore; i++) {
      this.array[i] = buffer[i];
    }
  }

  public get(index: number): T | undefined {
    return this.array[index] || undefined
  }

  public set(index: number, value: T): void {
    if (this.array[index]) this.array[index] = value;
  }
}