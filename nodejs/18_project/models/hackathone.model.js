import mongoose from "mongoose";

const HackathonSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Hackathon title is required"],
        trim: true,
        maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
        type: String,
        required: [true, "Hackathon description is required"],
        trim: true,
        maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    startDate: {
        type: Date,
        required: [true, "Start date is required"],
    },
    endDate: {
        type: Date,
        required: [true, "End date is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        trim: true,
        maxlength: [200, "Location cannot exceed 200 characters"],
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Organizer is required"],
    },
},

    {
        timestamps: true,
        versionKey: false,
    });


// Prevent model overwrite error
const Hackathon = mongoose.models.Hackathon || mongoose.model("Hackathon", HackathonSchema);
export default Hackathon;