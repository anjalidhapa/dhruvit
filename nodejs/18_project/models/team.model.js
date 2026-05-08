import mongoose from "mongoose"

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Team name is required"],
        trim: true,
        unique: true,
        maxlength: [100, "Team name cannot exceed 100 characters"],
    },
    leader: { // automatic when we create a team, the creator will be the leader
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Team leader is required"],
    },
    team_members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    old_comp_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hackathon",
            default: ""
        }
    ],
    curr_comp_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hackathon",
            default: ""
        }
    ],

    description: {
        type: String,
        trim: true,
        maxlength: [500, "Description cannot exceed 500 characters"],
        default: "",
    },
})

const Team = mongoose.models.Team || mongoose.model("Team", TeamSchema)

export default Team