import { asyncHandler } from "../Utils/asyncHandler.js";

//Controller 

const registerUser = asyncHandler(async (req , res)=>{
    res.status (200).json({
        message : "User registered"
    })
})

export {registerUser}