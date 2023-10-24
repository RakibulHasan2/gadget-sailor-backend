import { Model } from 'mongoose';

export type IUserName = {
  firstName: string;
  lastName: string;
};

export type IUsers = {
  name: IUserName;
  email: string;
  password: string;
  phoneNumber: number;
};

export type UserModel = Model<IUsers, Record<string, unknown>>;



