import { Router } from 'express';
import { users } from '../config/data.js';
import userSchema from '../models/userModel.js';

const router = Router();

// POST request to login
router.post('/login', (req, res) => {
    const { error } = userSchema.validate(req.body);

    if(error) {
        const response = {
            success : false,
            message : error.details[0].message,
            status : 400
        }
        return res.status(400).json(response);
    }

    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if(user) {
        global.currentUser = user;
        res.json({ message : 'Login successful', user : user})
    } else {
        res.status(401).json({ message : 'Invalid credentials'});
    }
});


// POST request to logout
router.post('/logout', (req, res) => {
    global.currentUser = null;
    res.json({ message : 'Logout successful' });
})

// POST request to register
router.post('/register', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if(error) {
        const response = {
            success : false,
            message : error.details[0].message,
            status : 400
        }
        return res.status(400).json(response);
    }

    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if(user) {
        res.status(400).json({ message : 'User already exists' });
    } else {
        users.push({
            id: users[users.length - 1] + 1,
            username : username,
            password : password
        });
        res.json({ message : 'User registered successfully' });
    }
});

export default router;