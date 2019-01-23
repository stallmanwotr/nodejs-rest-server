// imports
const express = require('express');
const router = express.Router();

import { appJson, logRequest } from '../utils/ServerUtils';

/**
 * GET - For testing the server is up.
 */
router.get('/', (req, res) => {
    logRequest(req);

    const responseObj = {
        text: 'Please send a POST request with a JSON body.'
    }
    res.json(responseObj)
});

/**
 * POST
 */
router.post('/hello', appJson, (req, res) => {
    logRequest(req);
    const bodyObj = req.body;   // parsed JSON

    const responseObj = { hello: 'world' };
    res.json(responseObj)
});

export default router;
