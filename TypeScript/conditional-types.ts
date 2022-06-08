type StringFromType<T> = T extends string ? 'string' : never;

type lorem = StringFromType<'lorem ipsum'>; // 'string'
type ten = StringFromType<10>; // never

type AA = { x: number };
type BB = { x: number, y: number };
type CC = { y: number };

type Condition<T, V> = T extends V ? number : string;
type N = Condition<BB, AA>; // number
type F = Condition<CC, AA>; // string

// HOMEWORK
type Extract<T, V> = T extends V ? T : never;
type Exclude<T, V> = T extends V ? never : T;