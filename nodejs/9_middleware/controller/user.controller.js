const createUser = async (req, res) => {
    // Logic to create a user
    console.log(req.body)
    res.send("User created successfully");
};
const getUser = async (req, res) => {

    // Logic to get a user by ID
    res.send("User details");
}

const getUserWithId = async (req, res) => {
    // Logic to get a user by ID
    const { id } = req.params;
    res.send(`User details for ID ${id}`);
}

const updateUser = async (req, res) => {
    // Logic to update a user by ID
    const { id } = req.params;
    res.send(`User with ID ${id} updated successfully`);
}

const deleteUser = async (req, res) => {
    // Logic to delete a user by ID
    const { id } = req.params;
    res.send(`User with ID ${id} deleted successfully`);
}

export { createUser, getUser, getUserWithId, updateUser, deleteUser };