import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        connectMongoDB();
        const tasks = await Task.find({ user: userId }).exec();
        return NextResponse.json(tasks);
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occurred while fetching the tasks!" },
            { status: 500 }
        )
    }
}