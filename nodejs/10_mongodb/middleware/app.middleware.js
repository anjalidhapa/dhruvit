const appMiddleware = (req, res, next) => {
    console.log("App level middleware called");

    // to test error handling middleware
    // throw new Error("Something went wrong in app middleware"); // Simulate an error
    next(); // Call the next middleware function
}

export default appMiddleware;
