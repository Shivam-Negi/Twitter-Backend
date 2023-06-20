import * as UserService from "../services/user-service.js";

export const signup = async (req, res) => {
    try {
        const data = req.body;
        const response = await UserService.signup(data);

        return res.status(201).json({
            success: true,
            message: "successfully created a user",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while creating a user",
            data: {},
            err: error
        })
    }
}

export const signin = async (req, res) => {
    try {
        const data = req.body;
        const response = await UserService.signin(data);

        return res.status(201).json({
            success: true,
            message: "successfully signed in a user",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while sign in",
            data: {},
            err: error
        })
    }
}