export type Id = number;

export type Email = string;

export type Name = 'username';

export interface Person {
    id: Id;
    email: Email;
    username: Name;
    password: string;
}

export type TwoDimensions = {
    x: number;
    y: number;
}

export interface IThreeDimensions extends TwoDimensions {
    z: number;
}

export type ThreeDIntersection = TwoDimensions & { z: number }

export type ZDimension = { z: number };

export type ThreeDType = TwoDimensions & Partial<ZDimension>;

export class ThreeDClass implements ThreeDType {
    x = 1;
    y = 2;
}

export type Admin = Person & { role: 'ADMIN' };
export type Guest = Person & { role: 'GUEST' };
export type User  = Person & { role: 'USER' };

export type RegisteredUser = Admin | User;

export type TEmail = string & { readonly __tag: unique symbol };

const emailA: TEmail = 'aaa' as TEmail;
const emailB: TEmail = 'bbb' as TEmail;

const send = async (from: TEmail, to: TEmail, subject: string = '') => {};
// send('aaa', 'bbb');
send(emailA, emailB);