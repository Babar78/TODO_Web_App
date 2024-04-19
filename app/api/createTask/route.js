import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/taskModel";

export async function POST(req) {

    try {
        const { title, description, creationDate } = await req.json();

        connectMongoDB();

        await Task.create({ title, description, creationDate, taskStatus: 'pending' });
        return NextResponse.json(
            { message: "Task Created Successfully!" },
            { status: 200 }
        )
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occoured while creating the task!" },
            { status: 500 }
        )
    }
}