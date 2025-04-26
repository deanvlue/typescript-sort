const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}`;
}


const a: number[] = [9, 4, 5, 7, 3];

function binaryInsertionSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    // Find location to insert using binary search
    let left = 0, right = i - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Move elements to the right to make space for the key
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    // Insert the key at its correct position
    arr[left] = key;
  }


  return arr;
}

console.log(binaryInsertionSort(a));
