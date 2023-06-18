import TweetRepository from "../repositories/tweet-repository.js";
import HashtagRepository from "../repositories/hashtag-repository.js";

const tweetRepository = new TweetRepository();
const hashtagRepository = new HashtagRepository();

export async function createTweet(data) {
   try {
        const content = data.content;
        console.log(content);
        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g)
                            .map((tag) => tag.substring(1).toLowerCase());
        console.log("tags given by user : ", tags);
        // storing the tweet
        const tweet = await tweetRepository.createTweet(data);
        console.log("tweet of the user : ", tweet);
        // storing the hashtags
        let alreadyPresentTags = await hashtagRepository.getHashtagByName(tags);
        console.log("already present tags are : ", alreadyPresentTags);
        let textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);
        let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag))
        newTags = newTags.map((tag) => {
            return {
                text: tag,
                tweets: [tweet.id]
            }
        })
        console.log("new Tags are : ", newTags)
        await hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
   } catch (error) {
        console.log(error);
        throw error;
   }
}

export async function getTweet(tweetId) {
    const tweet = await tweetRepository.getTweet(tweetId);
    return tweet;
}