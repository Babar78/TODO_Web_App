import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";
import User from "@/models/userModel"; // Import the user model

export async function POST(req) {
    try {
        const { title, description, creationDate, userId } = await req.json(); // Assuming you receive the userId from the client

        connectMongoDB();
        // Create the task
        const task = await Task.create({ title, description, creationDate, taskStatus: 'pending', user: userId });

        // Find the user by userId and push the task's ObjectId to the user's tasks array
        await User.findByIdAndUpdate(userId, { $push: { tasks: task._id } });

        return NextResponse.json(
            { message: "Task Created Successfully!" },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            { message: "An Error Occurred while creating the task!" },
            { status: 500 }
        )
    }
}
