import { IReviews } from "./reviews.interface";
import { Reviews } from "./reviews.model";


// Function to create Reviews
const createReviews = async (payload: IReviews): Promise<IReviews | null> => {
    const result = await Reviews.create(payload);
    return result;
};

// Function to retrieve all Reviews
const getAllReviews = async (): Promise<IReviews[]> => {
    const reviews = await Reviews.find({});
    return reviews;
};


export const ReviewsService = {
    createReviews,
    getAllReviews
};