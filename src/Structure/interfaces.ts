export type InnerKey = string

export interface InnerStructure<T> {
  set(key: InnerKey, value: T): void;
  get(key: InnerKey): T;
}