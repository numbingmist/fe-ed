let valueA: any;
valueA = 'str';
valueA = 21;
valueA = false;

let valueU: unknown;
console.log(typeof valueU); // undefined
valueU = 2;
valueU = 'string';
console.log(typeof valueU); // string

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while(true) {}
}

type Action = 'INCREMENT' | 'DECREMENT'; // | 'something';
type State = number;
const defaultState: State = 0;

class NeverError extends Error {
  constructor(value: never) {
    super(`Unreachable statement: ${value}`);
  }
}

const reducer = (state = defaultState, action: Action): State => {
  switch(action) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default:
      throw new NeverError(action);
  }
};





