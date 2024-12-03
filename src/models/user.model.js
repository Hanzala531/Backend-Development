import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        indexe: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // form of url
        required: true,
    },
    coverimage: {
        type : String
    },
    watchhistory: {
        type: Schema.Types.ObjectId,
        reff: "Video"
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken: {
        type: String
    }


},
    {
        timestamps: true

    }
)



export const User = mongoose.model("User", userSchema);