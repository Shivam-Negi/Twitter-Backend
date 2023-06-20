import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    noOfRetweets: {
        type: Number
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;