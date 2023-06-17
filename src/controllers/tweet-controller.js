import * as TweetService from "../services/tweet-service.js";

export const createTweet = async (req, res) => {
    try {
        const data = req.body;
        const response = await TweetService.createTweet(data);

        return res.status(201).json({
            success: true,
            message: "successfully created a tweet",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while creating a tweet",
            data: {},
            err: error
        })
    }
}