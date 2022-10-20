
export function binarySearch(searchVal: any, arr: Array<any>): number {
  let lowerValue = 0;
  let upperValue = arr.length - 1;

  while (true) {
    let current = Math.floor((lowerValue + upperValue) / 2);

    if (arr[current] == searchVal) return current;

    if (lowerValue > upperValue) {
      return -1
    }

    if (arr[current] < searchVal) {
      lowerValue = current + 1;
    } else {
      upperValue = current - 1;
    }
  }
}

console.log(binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 78]))