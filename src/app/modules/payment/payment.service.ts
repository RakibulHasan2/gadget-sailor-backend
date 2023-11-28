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


// Function to retrieve data from payment by email
const getPaymentDataByEmail = async (Email: string): Promise<IPayment | IPayment[] | null> => {
    if (Email.match(/^[0-9a-fA-F]{24}$/)) {
        const result = await payment.findById(Email);
        return result;
    }
    else {
        const result = await payment.find({
            $or: [
                { email: Email },
                { product_name: Email }
            ]
        });
        return result;
    }

};

export const paymentService = {
    addToPaidList,
    getFromPaidList,
    getPaymentDataByEmail

}