import Hackathon from "../models/hackathone.model.js";
import User from "../models/user.model.js";

const parseDate = (dateStr) => {
    if (!dateStr) return null;

    // 10 - 10 - 2010
    const [day, month, year] = dateStr.split("-");

    // Note: month is 0-based in JS Date (0 = Jan, 11 = Dec)
    const date = new Date(year, month - 1, day);
    return date;
};

const createHackathon = async (req, res) => {
    try {
        console.log(req.body)
        const { title, description, startDate, endDate, location } = req.body;

        const organizer = req.user._id;

        console.log(organizer, req.user)

        const newHackathon = new Hackathon({
            title,
            description,
            startDate: parseDate(startDate),
            endDate: parseDate(endDate),
            location,
            organizer,
        });
        await newHackathon.save();
        res.status(201).json({
            success: true,
            msg: "Hackathon created successfully",
            hackathon: newHackathon
        });
    } catch (error) {
        console.log("Error creating hackathon:", error.message);
        res.status(500).json({
            success: false,
            error: "Failed to create hackathon"
        });
    }
};

const listAllHackathons = async (req, res) => {
    try {
        const hackathons = await Hackathon.find().populate("organizer", "name email");
        res.status(200).json({
            success: true,
            hackathons
        });
    } catch (error) {
        console.log("Error fetching hackathons:", error.message);
        res.status(500).json({
            success: false,
            error: "Failed to fetch hackathons"
        });
    }
}

const getHackathonById = async (req, res) => {
    try {
        const hackathon = await Hackathon.findById(req.params.id);
        if (!hackathon) {
            return res.status(404).json({
                success: false,
                error: "Hackathon not found"
            });
        }

        res.status(200).json({
            success: true,
            hackathon
        });
    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            success: false,
            error: "Failed to fetch hackathon"
        });
    }
};

const updateHackathon = async (req, res) => {
    try {
        const { title, description, startDate, endDate, location } = req.body;

        const updatedHackathon = await Hackathon.findByIdAndUpdate(
            req.params.id,
            { title, description, startDate: parseDate(startDate), endDate: parseDate(endDate), location },
            { new: true, runValidators: true }
        );

        if (!updatedHackathon) {
            return res.status(404).json({
                success: false,
                error: "Hackathon not found"
            });
        }

        res.status(200).json({
            success: true,
            hackathon: updatedHackathon
        });
    } catch (error) {
        console.log("Error updating hackathon:", error.message);
        res.status(500).json({
            success: false,
            error: "Failed to update hackathon"
        });
    }
};


const deleteHackathon = async (req, res) => {
    try {
        const deletedHackathon = await Hackathon.findByIdAndDelete(req.params.id);

        if (!deletedHackathon) {
            return res.status(404).json({
                success: false,
                error: "Hackathon not found"
            });
        }

        res.status(200).json({
            success: true,
            msg: "Hackathon deleted successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            error: "Failed to delete hackathon"
        });
    }
};
export { createHackathon, listAllHackathons, getHackathonById, updateHackathon, deleteHackathon }



// 2020 - 10 - 19 T 18: 30:00.000 +00:00

// 24