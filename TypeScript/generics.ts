function generalIdentity(arg: number): number;
function generalIdentity(arg: any): any;
function generalIdentity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = generalIdentity;
let myIdentitySignature: { <MyType>(arg: MyType): MyType } = generalIdentity;

interface GenericIdentityFn {
  <Type>(arg: Type): Type
}
let myIdentityInterface: GenericIdentityFn = generalIdentity;

interface TypedGenericIdentityFn<Type> {
  (arg: Type): Type
}
let myIdentityInterfaceTyped: TypedGenericIdentityFn<number> = generalIdentity;

const getLength = <T extends {length: number}>(something: T) => {
  return something.length
};

getLength('hello'); // OK
getLength([1, 2, 3, 4]); // OK
// getLength(false); // Error

interface TwoD<X = number, Y = number> {
  x: X;
  y: Y;
}
const point1: TwoD = { x: 1, y: 2};
const point2: TwoD<string, string> = { x: '1.01', y: '2.02' };