import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    priority: {type: String, enum: ["Low", "Medium", "High"], default: "Low"},
    status: {type: String, enum: ["Open", "In Progress", "Closed"], default: "Open"},
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.model("Bug", bugSchema);