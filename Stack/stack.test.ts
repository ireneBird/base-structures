import Stack from './stack';

describe('Stack testing', function () {
  it('Create empty stack', () => {
    const stack = new Stack(5);
    expect(stack.isEmpty).toBe(true)
  })
})