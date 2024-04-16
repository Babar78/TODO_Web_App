import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        connectMongoDB();
        const tasks = await Task.find().exec();
        return NextResponse.json(tasks);
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occurred while fetching the tasks!" },
            { status: 500 }
        )
    }
}