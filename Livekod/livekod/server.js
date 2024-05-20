import express from 'express';
import loggerMiddleware from './middlewares/logger.js';
import errorHandlerMiddleware from './middlewares/errorHandler.js';
const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(loggerMiddleware);

app.get('/error', (req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Middleware som måste ligga längst ner i dokumentet för att fånga upp fel
app.use(errorHandlerMiddleware);
