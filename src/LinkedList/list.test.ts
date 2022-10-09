import DoubleLinkedList from './linkedList';


describe('DoubleLinkedList work', function () {

  it("should create empty linked list", () => {
    const linkedList = new DoubleLinkedList();
    expect(linkedList.toArray()).toStrictEqual([]);
  });

  it("should create empty linked list, add elements", () => {

    const linkedList = new DoubleLinkedList();

    expect(linkedList.first).toBeNull();
    expect(linkedList.last).toBeNull();

    linkedList.add('Hi');
    linkedList.add('my');

    expect(linkedList.first?.next?.value).toStrictEqual('my');
    expect(linkedList.last?.previous?.value).toStrictEqual('Hi');
    expect(linkedList.toArray()).toStrictEqual(['Hi', 'my']);
  });

  it("should implement the iterable API", () => {

    const linkedList = new DoubleLinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect([...linkedList.values()]).toEqual([1, 2, 3]);
  });

  it("should add elements to start of list", () => {

    const linkedList = new DoubleLinkedList();

    linkedList.add(1);
    expect([...linkedList.values()]).toEqual([1]);

    linkedList.unshift(2);
    expect([...linkedList.values()]).toEqual([2, 1]);

    linkedList.unshift(4, 5, 6);
    expect([...linkedList.values()]).toEqual([6, 5, 4, 2, 1]);
  });
});