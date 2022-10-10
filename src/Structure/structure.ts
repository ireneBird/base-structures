import { InnerKey, InnerStructure } from './interfaces';

export default class Structure<T> implements InnerStructure<T>{
  protected structure: {
    [key: InnerKey]: any
  } = {};

  constructor(data: Array<InnerKey>, values?: Array<T>) {
    if (!data.length) throw new Error('Needs add keys');

    data.forEach((item: InnerKey, index: number) => {
      this.structure[item] = values?.length ? values[index] : null
    })
  }

  public set(key: InnerKey, value: T) {
    if (typeof this.structure[key] === "undefined") {
      throw new Error('This key isn\'t exist')
    }

    this.structure[key] = value;
  }

  public get(key: InnerKey) {
    return this.structure[key]
  }
}
