const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}`;
}

console.log(hello("madafake"));


const a: number[] = [9, 4, 5, 7, 3];

export function sort(a: number[]): number[] {

}