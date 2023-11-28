import { IPayment } from "./payment.interface";
import { payment } from "./payment.model";

//function to add in payment
const addToPaidList = async (payload: IPayment): Promise<IPayment | null> => {
    try {
        const result = await payment.create(payload);
        return result;
    }
    catch (error) {
        console.error('Error to do payment:', error);
        throw error;
    }
}


// Function to retrieve all data from payment list 
const getFromPaidList = async (): Promise<IPayment[]> => {
    const result = await payment.find({});
    return result;
};

export const paymentService = {
    addToPaidList,
    getFromPaidList,

}