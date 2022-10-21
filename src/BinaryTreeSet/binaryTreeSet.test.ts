import BinaryTree from './binaryTreeSet'

const createTree = () => {
  return new BinaryTree([50, 20, 70, 10, 30, 80, 55])
}

describe('Binary Tree', () => {

  it('Should add keys and chech exist', () => {
    const tree = new BinaryTree();

    tree.add('name');
    tree.add('age');

    expect(tree.has('name')).toStrictEqual(true);
  })

  it('Should delete elements', () => {
    const tree = createTree();

    expect(tree.has(30)).toStrictEqual(true);
    expect(tree.delete(30)).toStrictEqual(true);
    expect(tree.has(30)).toStrictEqual(false);
  })
})