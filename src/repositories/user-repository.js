import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getUserByEmail(data) {
        // console.log(data);
        try {
            const user = await User.findOne(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserRepository;
