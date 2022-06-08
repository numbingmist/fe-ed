interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
}

const obj1: Partial<User> = { id: 1, name: 'John Doe' }; // email не указан
// const obj2: Required<User> = {
//   id: 1,
//   name: 'John Doe',
//   email: 'johndoe@example.com'
// }; // Property 'phone' is missing in type '{ id: number; name: string; email: string; }' but required in type 'Required<User>'
const obj3: Readonly<User> = { id: 1, name: 'John Doe', email: 'john@email.com' };
// obj.name = 'Bill'; // Cannot assign to 'name' because it is a read-only property
const id1: Omit<User, 'name' | 'email'> = { id: 1 }; // OK
const id2: Pick<User, 'id'> = { id: 1 }; // OK

type Role = 'GUEST' | 'USER' | 'ADMIN';
type Authorized1 = Extract<Role, 'USER' | 'ADMIN'>;
type Authorized2 = Exclude<Role, 'GUEST'>;

const f1 = () => 'Hello';
const f2 = (name: string) => `Hello, ${name}`;

type T0 = Parameters<typeof f1>; // T0 = []
type T1 = Parameters<typeof f2>; // T1 = [string]

type T2 = ReturnType<typeof f2>; // string