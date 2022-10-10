import Queue from './queue';

describe('Queue work', function () {

  it("should create empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it("should create empty queue, add elements and check method popFront", () => {

    const queue = new Queue();

    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();

    queue.pushBack('Hi');
    queue.pushBack('my');

    expect(queue.first?.value).toStrictEqual('Hi');

    queue.pushBack('name');

    expect(queue.popFront()?.value).toStrictEqual('Hi');
  });

  it("should implement the iterable API", () => {

    const queue = new Queue();

    queue.pushBack(1);
    queue.pushBack(2);
    queue.pushBack(3);

    expect([...queue.values()]).toEqual([1, 2, 3]);
  });
});