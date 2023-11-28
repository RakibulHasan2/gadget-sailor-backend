import { Schema, model } from 'mongoose';
import { ReviewsModel, IReviews } from './reviews.interface';


const reviewsSchema = new Schema<IReviews>(
    {
        customer_name: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            type: String,
        },
        image: {
            type: String,
        },
        p_id: {
            required: true,
            type: String,
        },
        review: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const Reviews = model<IReviews, ReviewsModel>('reviews', reviewsSchema);
