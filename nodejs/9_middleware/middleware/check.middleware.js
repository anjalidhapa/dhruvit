
const checkUser = async (req, res, next) => {
    console.log("check middlware called ")
    next(); // Call the next middleware function
}

const checkUser2 = async (req, res, next) => {
    const { id } = req.params;
    if (id % 2 === 0) {
        return res.send("even id is not allowed");
    }
    next(); // Call the next middleware function
}
const checkUser3 = async (req, res, next) => {
    const { id } = req.params;
    if (id % 2 === 0) {
        return res.send("Even id is will not can be update");
    }
    next(); // Call the next middleware function
}

const checkAllUsers = async (req, res, next) => {
    console.log("checkAllUsers middleware called");
    next(); // Call the next middleware function
}

export { checkUser, checkUser2, checkUser3, checkAllUsers };