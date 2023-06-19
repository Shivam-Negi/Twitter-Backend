import express from 'express';
import * as TweetController from '../controllers/tweet-controller.js';

const router = express.Router();

router.post('/tweet', TweetController.createTweet);
router.get('/tweet/:id', TweetController.getTweet);

export default router;