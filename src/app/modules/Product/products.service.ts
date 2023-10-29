import axios from "axios";

// Function to retrieve all users
const getAllProducts = async () => {
    try {
        // Fetch data from the "iMacs" endpoint
        // const imacsResponse = await axios.get('http://localhost:5000/api/v1/all-imac');
        // const imacsData = imacsResponse.data;
        const imacsData = getProductsData("http://localhost:5000/api/v1/all-imac")
        console.log(imacsData)

        // Fetch data from the "Processors" endpoint
        const processorsResponse = await axios.get('http://localhost:5000/api/v1/all-processor');
        const processorsData = processorsResponse.data;

        const mergedData = [...processorsData.data,];
        return mergedData;

    } catch (error) {
        console.error('Error getting all products:', error);
        throw error;
    }
};

const getProductsData = async (url: String) => {
    const productResponse = await axios.get(`${url}`);
    console.log(productResponse.data.data)
    const productData = productResponse.data;
    return productData
}



export const productsService = {
    getAllProducts
}

