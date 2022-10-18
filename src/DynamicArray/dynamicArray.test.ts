import DynamicArray from './dynamicArray';

const createArray = () => {
  const arr = new DynamicArray(3);
  arr.add(1);
  arr.add(2);
  arr.add(3);
  arr.add(4);

  return arr;
};

describe('Testing DynamicArray', function () {
  it('Should create new array, add elements, check parts of list for correct data', () => {
    const arr = createArray();

    expect(arr.getArrByIndex(0)).toStrictEqual([1, 2, 3])
    expect(arr.getArrByIndex(1)).toStrictEqual([4, , ,])
  });


  it('Should get a value with index', () => {
    const arr = createArray();

    expect(arr.get(3)).toStrictEqual(4)
    expect(arr.get(0)).toStrictEqual(1)
    expect(arr.get(1)).toStrictEqual(2)
  });

  // it('Should be iterable', () => {
  //   const arr = new DynamicArray(3);
  //   arr.add(1);
  //   arr.add(2);
  //   arr.add(3);
  //   arr.add(4);
  //   arr.add(5);
  //   arr.add(6);
  //   arr.add(7);

  //   expect([...arr.values()]).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
  // });
})