export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST'
}

export const r1: Role = Role.ADMIN;
// const r2: Role = 'ADMIN';
// const r3: Role = 'HACKER';

export const RoleObject = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST'
} as const;

// const arr = [1, 2];
// arr[0] = 3;
// console.log(arr);

// const arr1 = [1, 2] as const;
// arr1[0] = 3; // error because "as const"
// console.log(arr1);

export type RoleAdv = typeof RoleObject[keyof typeof RoleObject];

export const rAdv1: RoleAdv = RoleObject.ADMIN;
export const rAdv2: RoleAdv = 'ADMIN';
// const rAdv3: RoleAdv = 'HACKER';

export type RoleIntersect = 'ADMIN' | 'USER' | 'GUEST';

export const ri1: RoleIntersect = 'ADMIN';
// const ri2: RoleIntersect = 'HACKER';