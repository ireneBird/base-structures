
import assert from 'assert';
import { DoubleLinkedList } from './index';

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
});