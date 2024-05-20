import express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandler.js';
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/error', (req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandlerMiddleware);
