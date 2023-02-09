import express from 'express';
const router = express.Router();

import {
    getAllOptions,
    getAllProsCons,
    addNewOption,
    addNewProCon
} from '../models/index.js'

// GET
router.get('/', async function(req, res) {
    // get all options
    if (req.query.type === "options") {
        const result = await getAllOptions();
        console.log(`getAllOptions`);
        res.json({ success: true, payload: result });
    }
    // get all pros/cons
    if (req.query.type === "procon") {
        const result = await getAllProsCons();
        console.log(`getAllProsCons`);
        res.json({ success: true, payload: result });
    }
})
// TODO if time: get all previous results

// POST
router.post('/', async function(req, res) {
    // post a new option
    if (req.query.type === "options") {
        const result = await addNewOption(req.body);
        res.json({ success: true, payload: result });
    }
    // post a new pro/con
    if (req.query.type === "procon") {
        const result = await addNewProCon(req.body);
        res.json({ success: true, payload: result });
    }
})

export default router;