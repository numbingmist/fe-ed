type NoModifiers<T> = { -readonly [P in keyof T]-?: T[P] };

type A = { readonly x?: number; readonly y?: number };
type NoModifiersA = NoModifiers<A>;

const a: A = { x: 1 }; // OK
// a.x = 1; // Error

// const a1: NoModifiersA = { x: 1 }; // Error: Property 'y' is missing in type '{ x: number; }' but required in type 'NoModifiers<A>'
const a2: NoModifiersA = { x: 1, y: 2 }; // Ok
a2.x = 2; // Ok

type Readonly<T> = { readonly [P in keyof T]: T[P] };

type Partial<T> = { [P in keyof T]?: T[P] };

// HOMEWORK
type Required<T> = { [P in keyof T]-?: T[P] };
type Pick<T, K extends keyof T> = { [P in K]: T[P]};
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type Extract<T, V> = T extends V ? T : never;
type Exclude<T, V> = T extends V ? never : T;