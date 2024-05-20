import apiKeys from '../config/apikeys.js';

// Middleware för att kontrollera en giltig API nyckel
const checkApiKey = (req, res, next) => {
    if(req.query.apikey && apiKeys.includes(req.query.apikey)) {
        next();
    } else {
        res.status(401).json({error : "Unauthorized access, a valid API key is required"});
    }
}

export default checkApiKey;