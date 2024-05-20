import express from 'express';
import cors from 'cors';
import loggerMiddleware from './middlewares/logger.js';
import errorHandlerMiddleware from './middlewares/errorHandler.js';
const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./index.html');
})

app.get('/api/posts', (req, res) => {
    res.send(posts);
});

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

const posts = [
    {
        id: 1,
        author: "Alice",
        content: "This is my first post!"
    },
    {
        id: 2,
        author: "Bob",
        content: "Hello world, excited to be here!"
    },
    {
        id: 3,
        author: "Charlie",
        content: "JavaScript is so much fun!"
    },
    {
        id: 4,
        author: "Diana",
        content: "Learning new things every day!"
    },
    {
        id: 5,
        author: "Eve",
        content: "Anyone up for a coding challenge?"
    }
];
