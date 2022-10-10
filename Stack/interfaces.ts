export interface InnerStack<T> {
  readonly length: number;
  readonly isEmpty: boolean;

  readonly maxSize?: number;

  push(value: T): number;
  pop(): T | undefined;
  peekBack(): T | undefined;
}