function describePerson(person: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
}) {
  return `${person.name} is ${person.age} years old and love ${person.hobbies.join(" and  ")}.`;
}

const alex = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking'] // type string[] != [string, string]
}

// describePerson(alex); // Error: Target requires 2 element(s) but source may have fewer

type GetFirstArgument<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never;

type Person = GetFirstArgument<typeof describePerson>;
const alex1: Person = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking'],
};
describePerson(alex1); // OK

type Person1 = Parameters<typeof describePerson>[0];
const alex2: Person1 = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking'],
};
describePerson(alex2); // OK


// HOMEWORK
// GetSecondArgument<(x:string, y:boolean) => void> => boolean
type GetSecondArgument<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
) => any
  ? SecondArgument
  : never;

// PromiseReturnType<Promise<string>> => string
type PromiseReturnType<T> = Awaited<T>;

// ArrayType<[string, number]> => string | number
// ?? type ArrayType<E extends any[]> = typeof infer E; ??