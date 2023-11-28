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

export const paymentService = {
    addToPaidList,

}