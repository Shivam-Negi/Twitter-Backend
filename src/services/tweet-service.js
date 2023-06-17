import TweetRepository from "../repositories/tweet-repository.js";
import HashtagRepository from "../repositories/hashtag-repository.js";

const tweetRepository = new TweetRepository();
const hashtagRepository = new HashtagRepository();

export async function createTweet(data) {
    const content = data.content;
    const tags = content.match(/#+[a-zA-Z0-9(_)]+/g)
                        .map((tag) => tag.substring(1).toLowerCase());

    // storing the tweet
    const tweet = await tweetRepository.createTweet(data);

    // storing the hashtags
    let alreadyPresentTags = await hashtagRepository.getHashtagByName(tags);
    let textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag))
    newTags.map((tag) => {
        return {
            text: tag,
            tweets: [tweet.id]
        }
    })
    await hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
        tag.tweet.push(tweet.id);
        tag.save();
    });
    return tweet;
}

export async function getTweet(tweetId) {
    const tweet = await tweetRepository.getTweet(tweetId);
    return tweet;
}