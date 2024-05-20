import express from 'express';
import loggerMiddleware from './middlewares/logger.js';
import errorHandlerMiddleware from './middlewares/errorHandler.js';
import keysRouter from './routing/keys.js';
import todosRouter from './routing/todos.js';

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api/keys', keysRouter);
app.use('/api/todos', todosRouter);

app.get('/', (req, res) => {
    res.send('Success');
});

app.get('/error', (req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

// Middleware för felhantering
app.use(errorHandlerMiddleware);
