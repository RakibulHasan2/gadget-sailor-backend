import config from "../../../../config";
import { IGraphics_card } from "./graphics_card.interface";
import { Graphics_Card } from "./graphics_card.model";



// Function to add a Graphics_Card
const createGraphics_Card = async (payload: IGraphics_card): Promise<IGraphics_card|null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    console.log();
    const result = await Graphics_Card.create(payload);
    return result;
};

// Function to retrieve all Graphics_Cards
const getAllGraphics_Card = async (): Promise<IGraphics_card[]> => {
        const Graphics_Cards = await Graphics_Card.find({});
        return Graphics_Cards;
};

//get products by id
const getGraphics_CardById = async (id: string): Promise<IGraphics_card | null> => {
    const Graphics_card = await Graphics_Card.findById(id);
    return Graphics_card;
};

//update products by Id
const UpdateGraphics_Card = async (id: string,payload: Partial<IGraphics_card>): Promise<IGraphics_card | null> => {
const result = await Graphics_Card.findOneAndUpdate({ _id: id }, payload, {new: true});
return result;
};

// delete products by id
const getDeleteGraphics_Card = async (id: string): Promise<IGraphics_card | null> => {
const result = await Graphics_Card.findByIdAndDelete(id);
return result;
}

export const Graphics_CardService = {
    createGraphics_Card,
    getAllGraphics_Card,
    getGraphics_CardById,
    UpdateGraphics_Card,
    getDeleteGraphics_Card
};