class Node<T>{
  data: T;
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(value: T) {
    this.data = value
  }
}

export default class BinaryTree<T = any> {
  protected root: Node<T> | null = null;

  constructor(array?: T[]) {
    array && array.forEach((item: T) => this.add(item))
  }

  public add(value: T): void {
    if (this.root == null) {
      this.root = new Node<T>(value);
    } else {
      if (this.has(value)) throw new Error('The value must be unique!');

      let current: Node<T> | null = this.root;

      while (true) {
        let parrent = current;
        if (value < current.data) {
          current = current?.left;
          if (current === null) {
            parrent.left = new Node<T>(value);
            return
          }
        } else {
          current = current?.right;
          if (current === null) {
            parrent.right = new Node<T>(value);
            return
          }
        }
      }
    }
  }

  public has(value: T): boolean {
    console.log(value)
    if (this.root === null) {
      return false;
    }

    let current: Node<T> | null = this.root;

    while (current.data !== value) {
      console.log(current.data)

      current = current.data > value ? current.left : current.right;

      if (current === null) return false
    }
    return true;

  }

  public delete(value: T): boolean {
    if (!this.root) return false;

    let current: Node<T> | null = this.root;
    let parent: Node<T> | null = this.root;
    let isLeft = true;
    while (current.data != value) {
      parent = current;

      if (value < current.data) {
        isLeft = true;
        current = current.left;
      } else {
        isLeft = false;
        current = current.right;
      }

      if (current === null) return false;
    }

    //if node don't have any child
    if (current.left === null && current.right === null) {

      if (current === this.root) this.root = null;
      if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.right === null) { //if node don't have right child
      if (current === this.root) this.root = current.left;
      if (isLeft) {
        parent.left = current.left;
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) { //if node don't have left child
      if (current === this.root) this.root = current.right;
      if (isLeft) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else {// Два потомка, узел заменяется преемником
      let successor = this.getSuccessor(current);
      if (current == this.root) {
        this.root = successor;
      } else if (isLeft) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left; // Преемник связывается с левым потомком current
    }

    return true;

  }

  getSuccessor(delNode: Node<T>) {
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.right;

    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left
    }

    if (successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right
    }

    return successor;
  }
}