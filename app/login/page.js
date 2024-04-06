'use client'
import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import Image from 'next/image';
import { Checkbox } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoadingBackdrop from '@/components/LoadingBackdrop';

import { toast } from 'react-toastify';

const Login = () => {

    // Globals
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const form = useForm({
        initialValues: {
            password: '',
            email: '',
            keepLoggedIn: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length >= 8 ? null : 'Password should contain at least 8 characters'),
        },
    });

    // Call Login API
    const handleSubmit = async (values) => {

        setLoading(true);

        try {
            const res = await fetch(`/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            // if user already exists show aleat based on response status
            if (res.status === 400) {
                const resData = await res.json();
                toast.error(resData.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }

            if (res.ok) {
                const resData = await res.json();

                // Tocken Management
                const { token } = resData;
                document.cookie = `token=${token}; path=/`;
                router.replace("/");
            }
        } catch (err) {
            toast.error('An error occurred while loggin in the user!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            console.log(err);
        } finally {
            setLoading(false); // Set loading state to false when the fetch operation is complete
        }

    };

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
                            className='w-[80px] m-auto'
                        />
                        <h1 className='text-[#162A3A] font-bold text-[30px] text-center -mt-[5px]'>
                            Login
                        </h1>

                        <span className='text-gray-400 text-center w-full'>
                            {/* Line about login */}
                            Welcome back! Login to your account
                        </span>
                    </div>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput mb="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                        <div>
                            <PasswordInput
                                label="Password"
                                placeholder="Password"
                                {...form.getInputProps('password')}
                            />
                            <span className='flex justify-end'>
                                <a href="#" className="text-gray-400 hover:text-black text-[12px] mt-[5px]">Forgot password?</a>
                            </span>
                        </div>
                        <Checkbox
                            {...form.getInputProps('keepLoggedIn')}
                            label="Remember me"
                            color="#A53860"
                        />
                        <Group justify="center" mt="xl">
                            <Button
                                color='#A53860'
                                type="submit"
                            >
                                Login
                            </Button>
                        </Group>
                    </form>
                    <div className='w-full flex justify-center'>
                        <span className='text-gray-400 text-center w-full text-[14px]'>
                            Don't have an account?{' '}
                            <Link href="/signup" className="hover:text-[#A53860] text-black">Sign up</Link>
                        </span>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default Login;
