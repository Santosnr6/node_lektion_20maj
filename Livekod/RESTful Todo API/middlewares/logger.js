
// Middleware för att hantera loggning vid anrop
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}], ${method} ${url}`);
    next();
}

export default logger;