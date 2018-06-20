import express from 'express';

const router = express.Router();

// GET v1/status
router.get('/status', (req, res) => res.send('OK'));

// GET v1/docs
router.get('/docs', express.static('docs'));

export default router;