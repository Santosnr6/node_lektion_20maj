import { Router } from 'express';   
import { actors } from '../config/data.js';
import actorSchema from '../models/actorModel.js';
import authenticate from '../middlewares/auth.js';

const router = Router();

router.get('/', (req, res) => {
    res.json(actors);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const actor = actors.find(actor => actor.id === id);
    res.json(actor);
});

router.post('/', authenticate, (req, res) => {
    const { error } = actorSchema.validate(req.body);

    if(error){
        const response = {
            success: false,
            message: error.details[0].message,
            status: 400
        }
        return res.status(400).json(response);
    }

    const { name } = req.body;
    console.log('actors post');
    actors.push({
        id : actors[actors.length - 1].id + 1,
        name: name
    })
    const response = {
        success: true,
        message: 'Actor added successfully',
        status: 200,
        newActor: actors[actors.length - 1],
        data : actors
    }

    res.json(response);
});

export default router;