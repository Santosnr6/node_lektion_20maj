import express from 'express';
import moviesRouter from './routes/movies.js';
import actorsRouter from './routes/actors.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = 8080;

global.currentUser = null;

// Middleware
app.use(express.json());

// Routes
app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});