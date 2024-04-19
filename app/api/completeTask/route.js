import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";

export async function PUT(req) {


    try {
        const { taskID, taskStatus } = await req.json();

        connectMongoDB();

        await Task.findByIdAndUpdate(taskID, {
            taskStatus
        });

        return NextResponse.json(
            { message: "Task Completed Successfully!" },
            { status: 200 }
        );
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occoured while updating the task!" },
            { status: 500 }
        )
    }
}