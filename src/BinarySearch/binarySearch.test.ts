import { binarySearch } from './binarySearch'

describe('BinarySerach testing', () => {

  it('Should find elements', () => {
    expect(binarySearch(5, [-233, 2, 4, 4, 4, 5, 6, 7, 8, 75, 203, 658, 3999, 7282])).toStrictEqual(5)
    expect(binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])).toStrictEqual(8)
    expect(binarySearch(2, [-432, 0, 1, 4, 5, 6, 98])).toStrictEqual(-1)
  })

})