import Vector from './vector';

const createVector = () => {
  const arr = new Vector(3);
  arr.add(1);
  arr.add(2);
  arr.add(3);
  arr.add(4);
  arr.add(5);

  return arr;
}

describe('Vector testing', () => {
  it('Should get lenght', () => {
    const vector = createVector();

    expect(vector.length).toStrictEqual(5)

    vector.add(6);

    expect(vector.length).toStrictEqual(6)
  });


  it('Should get value and set', () => {
    const vector = createVector();
    expect(vector.get(2)).toStrictEqual(3)

    vector.set(2, 10);
    expect(vector.get(2)).toStrictEqual(10);
  });

})