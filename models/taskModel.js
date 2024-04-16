import mongoose, { Schema, models } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    taskMessage: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    taskStatus: {
        type: String,
        default: 'pending'
    },
})


const Task = models.Task || mongoose.model('Task', taskSchema);

export default Task;