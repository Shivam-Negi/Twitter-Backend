import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository{

    constructor() {
        super(Hashtag);
    }
    
    async create(data) {
        try {
            let hashtag = await Hashtag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkCreate(data) {
        console.log("inside bulk create data is : ", data);
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
        //    console.log(error);
            throw error;
        }
    }

    async getHashtagByName(tags) {
        try {
          let hashtags = await Hashtag.find({ 
            text: { $in: tags } 
        });
        //   console.log(hashtags);
          return hashtags;
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
      

    async getHashtag(id) {
        try {
            let hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHashtag(data) {
        try {
            let response = await Hashtag.deleteOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;