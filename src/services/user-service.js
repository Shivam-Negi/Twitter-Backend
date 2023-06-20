import UserRepository from "../repositories/user-repository.js";

const userRepository = new UserRepository();

export async function signup(data) {
    try {
        const user = userRepository.create(data);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function signin(data) {
    try {
        const email = data.email;
        const currentPassword = data.password;
        const user = await userRepository.getUserByEmail({
                email: email
            });
        // console.log(user)
        if(!user) {
            throw {
                message: 'no user found for the given email'
            }
        }
        if(!user.comparePassword(currentPassword)) {
            throw {
                message: 'incorrect password'
            }
        }
        console.log('user successfully signed in');
    } catch (error) {
        console.log(error);
        throw error;
    }
}