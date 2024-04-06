'use client'
import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import Image from 'next/image';
import { PasswordInput } from '@mantine/core';
import Link from 'next/link';

import bcrypt from "bcryptjs";
import { useRouter } from 'next/navigation';
import LoadingBackdrop from '@/components/LoadingBackdrop';

const Signup = () => {

    // Gloabls
    const router = useRouter();

    // Loading Backdrop
    const [loading, setLoading] = React.useState(false);

    const form = useForm({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: {
            username: (value) => (value.length > 0 ? null : 'Username is required!'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email!'),
            password: (value) => (value.length >= 8 ? null : 'Password should contain at least 8 characters'),
            confirmPassword: (value, values) =>
                value.length < 1 ? 'Confirm password is required!' : (value === values.password ? null : 'Passwords do not match'),
        },
    });

    const handleSubmit = async (values) => {

        if (form.isValid) {
            const hashedPassword = await bcrypt.hash(values.password, 10);
            const data = {
                ...values,
                password: hashedPassword
            };
            setLoading(true);

            try {
                const res = await fetch(`/api/signup`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                // if user already exists show aleat based on response status
                if (res.status === 400) {
                    const resData = await res.json();
                    alert(resData.message);
                }

                if (res.ok) {
                    const resData = await res.json();

                    // save data in local storage
                    if (typeof window !== "undefined") {
                        localStorage.setItem("username", resData.data.username);
                        localStorage.setItem("isLoggedin", resData.data.isLoggedin);
                    }
                    router.replace("/");
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false); // Set loading state to false when the fetch operation is complete
            }

        }
        else {
            console.log('Form is invalid')
        }

    }

    return (
        <>
            <LoadingBackdrop loading={loading} />

            <div className='w-screen h-screen flex justify-center items-center'>
                <Box maw={340} mx="auto" className='w-full space-y-4'>
                    <div className='w-full flex flex-col items-center pb-4'>
                        <Image
                            src="/assets/logo/logo-icon.png"
                            alt="TaskTrek"
                            width={200}
                            height={200}
                            priority
                            className='w-[80px] m-auto'
                        />
                        <h1 className='text-[#162A3A] font-bold text-[30px] text-center -mt-[5px]'>
                            Signup
                        </h1>

                        <span className='text-gray-400 text-center w-full'>
                            Add your details to create an account
                        </span>
                    </div>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput mt="md" label="Username" placeholder="Username" {...form.getInputProps('username')} />
                        <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                        <PasswordInput
                            mt="md"
                            label="Password"
                            placeholder="Password"
                            {...form.getInputProps('password')}

                        />
                        <PasswordInput
                            mt="md"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            {...form.getInputProps('confirmPassword')}
                        />
                        <Group justify="center" mt="xl">
                            <Button
                                color='#A53860'
                                type="submit"
                            >
                                Create Account
                            </Button>
                        </Group>
                    </form>
                    <div className='w-full flex justify-center'>
                        <span className='text-gray-400 text-center w-full text-[14px]'>
                            Already have an account?{' '}
                            <Link href="/" className="hover:text-[#A53860] text-black">Login</Link>
                        </span>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default Signup