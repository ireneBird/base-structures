# Динамический массив
<br>

## Методы

- `add(value)` - добавление елемента в конец массива
- `get(index)` - получение значения по индексу
- `set(index, valie)` - изменение значения по индексу

<br>

```
const arr = new DynamicArray(3);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log(arr.length);  // 5

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5

```