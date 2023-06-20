import * as LikeService from "../services/like-service.js";

export const toggleLike = async (req, res) => {
    try {
        const data = req.body;
        // console.log("inside controller : ", req.body);
        const response = await LikeService.toggleLike(data.modelId, data.modelType, data.user);
        return res.status(201).json({
            success:true,
            message:"Successfully toggled a Like",
            data: response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in toggleing a Like",
            data: {},
            err:error
        });
    }
}