import { Schema, model } from 'mongoose';
import { IUsers, UserModel } from './user.interface';


const userSchema = new Schema<IUsers>(
    {
        name: {
            required: true,
            type: {
                firstName: {
                    type: String,
                    required: true,
                },
                lastName: {
                    type: String,
                    required: true,
                },
            },
        },
        email: {
            unique: true,
            required: true,
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,
        }  
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Users = model<IUsers, UserModel>('Users', userSchema);
