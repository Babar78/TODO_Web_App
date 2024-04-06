import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

// Session Storage NEXT
import jwt from 'jsonwebtoken';

export async function POST(req) {

    try {
        const { email, password } = await req.json();

        connectMongoDB();

        const user = await User.findOne
            ({ email: email });

        if (!user) {
            return NextResponse.json(
                { message: "User does not exist" },
                { status: 400 }
            )
        }

        else {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {

                if (!process.env.JWT_SECRET) {
                    throw new Error('JWT_SECRET is not defined in the environment');
                }

                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                    expiresIn: '10m',
                });

                return NextResponse.json(
                    { message: "User logged in successfully", token },
                    { status: 200 }
                )
            }
            else {
                return NextResponse.json(
                    { message: "Invalid Password" },
                    { status: 400 }
                )
            }
        }
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occoured while logging in the user!" + err },
            { status: 500 }
        )
    }
}