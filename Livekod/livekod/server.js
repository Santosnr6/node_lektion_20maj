import express from 'express';
import cors from 'cors';
import loggerMiddleware from './middlewares/logger.js';
import errorHandlerMiddleware from './middlewares/errorHandler.js';
import postsRouter from './routes/posts.js';

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(express.static('public'));

// Routers
app.use('/api/posts', postsRouter);

app.get('/', (req, res) => {
    res.sendFile('./index.html');
})

app.get('/error', (req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Middleware som måste ligga under våra routes för att fånga upp fel
app.use(errorHandlerMiddleware);
