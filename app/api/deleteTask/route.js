import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function DELETE(
    req
) {
    try {
        const { taskID } = await req.json();

        connectMongoDB();

        await Task.findByIdAndDelete(taskID);
        return NextResponse.json(
            { message: "Task Deleted Successfully!" },
            { status: 200 }
        )
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occoured while deleting the task!" },
            { status: 500 }
        )
    }
}