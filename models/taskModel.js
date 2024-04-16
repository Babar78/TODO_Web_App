import mongoose, { Schema, models } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
    },
    taskStatus: {
        type: String,
        default: 'pending'
    },
})


const Task = models.Task || mongoose.model('Task', taskSchema);

export default Task;