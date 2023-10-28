import axios from "axios";

// Function to retrieve all users
const getAllProducts = async () => {
    try {
        // Fetch data from the "iMacs" endpoint
        const imacsResponse = await axios.get('http://localhost:5000/api/v1/all-Imacs');
        const imacsData = imacsResponse.data;

        // Fetch data from the "Processors" endpoint
        const processorsResponse = await axios.get('http://localhost:5000/api/v1/all-processor');
        const processorsData = processorsResponse.data;

        const mergedData = [...imacsData.data, ...processorsData.data];
        return mergedData;

    } catch (error) {
        console.error('Error getting all products:', error);
        throw error;
    }
};



export const productsService = {
    getAllProducts
}

