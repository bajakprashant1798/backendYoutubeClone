import mongoose, { Schema, SchemaType } from "mongoose";

const playlistSchema = new Schema(
    {
        neme: {
            type: String,
            required: true
        },
        descripttion: {
            type: String,
            required: true
        },
        videos: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, { timestamps: true }
)

export const Playlist = mongoose.model("Playlist", playlistSchema)