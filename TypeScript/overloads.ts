function identity(arg: string[]): string[];
function identity(arg: number[]): number[];
function identity(arg: unknown[]): unknown[] {
  return arg;
}

function minus(a: number): number;
function minus(a: number, b?: number): number {
  if (b === undefined) {
    return -a;
  }
  return a - b;
}

