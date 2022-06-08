interface Eq<T> {
  equal: (f: T, s: T) => boolean;
}

class IntEq implements Eq<number> {
  equal(f: number, s: number): boolean {
    return f === s;
  }
}

class StrEq implements Eq<string> {
  equal(f: string, s: string): boolean {
    return f.toLowerCase() === s.toLowerCase();
  }
}

const lookup = <KeyType, FnType extends Eq<KeyType>, ValueType>(fn: FnType, key: KeyType, map: [KeyType, ValueType][]): ValueType | undefined => {
  let result: ValueType | undefined;
  map.forEach(([_key, _value]) => {
    if(fn.equal(key, _key)) {
      result = _value;
    }
  })
  return result;
}

lookup(new IntEq(), 5, [[5, "user"], [1, 'world']]); // "user"

type fnT = <T>(v: T & { x: number }) => T & { x: number };

// type A = {};
// type B = A & { x: number };

// let a: A = {};
// const b: B = { x: 1 };

// a = b;
// a.x; // Error: Property 'x' does not exist on type 'A'.