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
  profile_image: string;
  cover_image: string;
  present_address: string;
  extra_phone_number: number;
  permanent_address: string;
  post_code: string;
  city: string;
  division: string;
};

export type UserModel = Model<IUsers, Record<string, unknown>>;



