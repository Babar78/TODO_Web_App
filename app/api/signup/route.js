import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/userModel";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { username, email, password } = await req.json();

        // check if user already exists
        const user = await User.findOne
            ({ email: email });

        console.log("In signup route", user);

        if (user) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            )
        }
        else {
            await User.create({ username, email, password })
            return NextResponse.json(
                { message: "User registered successfully!", data: { username: username, isLoggedin: true } },
                { status: 200 }
            )
        }

    }
    catch (err) {
        console.log("Catch block", err);
        return NextResponse.json(
            { message: "An error occurred while registering the user" + err },
            { status: 500 }
        )
    }
}