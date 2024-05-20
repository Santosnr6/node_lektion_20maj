import { Router } from 'express';
import postSchema from '../models/postModel.js';

const router = new Router();

router.get('/', (req, res) => {
    res.send(posts);
});

router.post('/', (req, res) => {
    const {error, value} = postSchema.validate(req.body);
    console.log(value);

    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    posts.push({
        id : posts.length + 1,
        author : value.author,
        content : value.content
    });

    res.send("Success!!!!!");
});

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

export default router;
