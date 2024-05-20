import { Router } from 'express';
import apiKeys from '../config/apikeys.js';

const router = Router();

router.get('/', (req, res) => {
    res.send(apiKeys[Math.floor(Math.random() * apiKeys.length)]);
});

export default router;