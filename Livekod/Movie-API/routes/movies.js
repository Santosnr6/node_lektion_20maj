import { Router } from 'express';
import {movies, actors} from '../config/data.js';

const router = Router();

router.get('/', (req, res) => {
    const { category, year, actor } = req.query;
    let filteredMovies = movies;
    if(category){
        filteredMovies = filteredMovies.filter(movie => movie.category === category);
    }
    if(year){
        filteredMovies = filteredMovies.filter(movie => movie.year === parseInt(year));
    }
    if(actor){
        const foundActor = actors.find(a => a.name === actor);
        filteredMovies = filteredMovies.filter(movie => movie.actors.includes(foundActor.id));
    }

    res.json(filteredMovies);
});

router.get('/categories', (req, res) => {
    const categories = [];
    movies.forEach(movies => {
        if(!categories.includes(movies.category)){
            categories.push(movies.category);
        }
    })
    res.json(categories);
});

router.get('/:id', (req, res) => {  
    const id = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === id);
    res.json(movie);
});

export default router;