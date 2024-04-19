import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        const { taskID, title, description } = await req.json();

        connectMongoDB();

        await Task.findByIdAndUpdate(taskID, {
            title,
            description
        });
        return NextResponse.json(
            { message: "Task Updated Successfully!" },
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            { message: "An Error Occoured while updating the task!" },
            { status: 500 }
        )
    }
}