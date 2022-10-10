# Базовые структуры

## Двусторонний двусвязный список

```
  const linkedList = new DoubleLinkedList();

  linkedList.add(1);
  linkedList.add(3);
  console.log(linkedList) // [1, 3]

  linkedList.unshift(2); 

  console.log(linkedList) // [2, 1, 3]
```

## Очередь на основе связанного списка

```
  const queue = new Queue();

  queue.pushBack('Hi');
  queue.pushBack('my');

  console.log(queue.first?.value); // Hi
  console.log(queue.first?.next?.value); // my

  queue.popFront();

  console.log(queue.first?.value); // my

```

## Двусторонняя очередь

```
  const queue = new DoubleQueue();

  queue.pushFront(1);
  queue.pushBack(2);

  console.log(queue.popBack()); // 2
  console.log(queue.popFront()); // 1

```
##  Cтек на основе массива фиксированной длины

```
  const stack = new Stack(5);

  stack.push(10);
  stack.push(11);
  stack.push(12);

  console.log(stack.peekBack());  // 12

  console.log(stack.pop()); // 12
  console.log(stack.pop()); // 11
  console.log(stack.pop()); // 10
```

##  Структура

```
  const structure = new Structure(['name', 'gender']);

  structure.set('name', 'Olivia');
  
  console.log(structure.get('name')); // Olivia

```