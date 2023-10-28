



// Function to retrieve all users
const getAllProducts= async () => {
    try {
        // const users = await Users.find({});
        // return users;
        
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
};

const productsService = {
    getAllProducts
}