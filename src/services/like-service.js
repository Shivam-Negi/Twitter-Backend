import LikeRepository from "../repositories/like-repository.js";
import TweetRepository from "../repositories/tweet-repository.js";

const likeRepository = new LikeRepository();
const tweetRepository = new TweetRepository();

export async function toggleLike(modelId, modelType, userId) {
    let likeable;
    if (modelType === 'Tweet') {
        likeable = await tweetRepository.getTweet(modelId);  // Fetch the tweet to be liked
    }
    else if (modelType === 'Comment') {
        // Todo: Fetch the comment to be liked
    }

    // Check whether the user has already liked the tweet or comment
    const likeExists = await likeRepository.findByUserAndLikeable({
        user: userId,
        onModel: modelType,
        likeable: modelId
    });

    if (!likeExists) {
        const newLike = await likeRepository.create({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });  
        likeable.likes.push(newLike);  // Add the new like to the tweet or comment
        await likeable.save();  // Save the updated tweet or comment with the new like
        return 'like added';  
    }

    else {
        likeable.likes.pull(likeExists.id);  // Remove the like from the tweet or comment
        await likeable.save();  
        likeRepository.destroy(likeExists.id);  // Delete the like object from the database
        return 'like removed';  
    }
}
