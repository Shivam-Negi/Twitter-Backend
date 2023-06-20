import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data) {
        // console.log("in like repo, data : ", data);
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default LikeRepository;