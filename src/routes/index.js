import express from 'express';
import * as TweetController from '../controllers/tweet-controller.js';
import * as UserController from '../controllers/user-controller.js';
import * as LikeController from '../controllers/like-controller.js';

const router = express.Router();

router.post('/tweet', TweetController.createTweet);
router.get('/tweet/:id', TweetController.getTweet);

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

router.post('/likes/toggle', LikeController.toggleLike);

export default router;