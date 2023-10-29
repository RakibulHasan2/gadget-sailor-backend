import config from "../../../../config";
import { IMonitor } from "./monitor.interface";
import { Monitor } from "./monitor.model";


const createMonitor = async (payload: IMonitor): Promise<IMonitor | null> => {
    const min = 100000;
    const max = 999999;
    if (!payload.status) {
        payload.status = config.default_status as string;
    }
    if (!payload.product_code) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        payload.product_code = randomNumber
    }
    const result = await Monitor.create(payload);
    return result;
};

const getAllMonitor = async (): Promise<IMonitor[]> => {

        const result = await Monitor.find({});
        return result;
  
};
const getMonitorById = async (id: string): Promise<IMonitor | null> => {

    const result = await Monitor.findById(id);
    return result;

};

const updateMonitor = async (id: string,payload: Partial<IMonitor>): Promise<IMonitor | null> => {
    const result = await Monitor.findOneAndUpdate({ _id: id }, payload, {new: true});
    return result;
  };
  
  const deleteMonitor = async (id: string): Promise<IMonitor | null> => {
  
        const result = await Monitor.findByIdAndDelete(id);
        return result;
};


export const MonitorService = {
createMonitor,
getAllMonitor,
getMonitorById,
updateMonitor,
deleteMonitor
};