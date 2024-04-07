import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export default function middleware(req, ev) {

    // Verify the token
    const token = req.cookies.get('token');
    let url = new URL(req.url, 'http://localhost:3000');

    // Get the pathname from the URL
    let pathname = url.pathname;

    // List of pages that require authentication
    const authRequiredPages = ['/', '/profile'];

    // Check if the request URL is in the list of pages that require authentication
    if (authRequiredPages.includes(pathname) && !token) {
        // Redirect to the login page if authentication is required and the user is not authenticated
        return NextResponse.redirect('http://localhost:3000/login');
    }


    // Check if the token is valid
    if (token) {
        try {
            console.log('Token:', token);
            const verifyToken = jwt.decode(token.value);

            if ((!verifyToken || verifyToken.exp < Math.floor(Date.now() / 1000)) && authRequiredPages.includes(pathname)) {
                return NextResponse.redirect('http://localhost:3000/login');
            }
        }
        catch (error) {
            return console.log('Token verification failed', error);
        }
    }

    // IF user is logged in then he should not be able to access login page and signup page
    if (pathname === '/login' && token) {
        return NextResponse.redirect('http://localhost:3000');
    }

    if (pathname === '/signup' && token) {
        return NextResponse.redirect('http://localhost:3000');
    }

    // If the user is authenticated or the page does not require authentication, proceed with the request
    return NextResponse.next();
}
