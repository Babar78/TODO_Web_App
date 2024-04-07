'use client'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  const token = Cookies.get('token');

  if (!token) {
    router.replace('/login'); // If no token is found, redirect to login page
    return;
  }

  useEffect(() => {
    // Validate the token by making an API call
    const validateToken = async () => {
      try {
        const res = await fetch('/api/validation', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) throw new Error('Token validation failed')
      } catch (error) {
        console.error(error)
        router.replace('/login') // Redirect to login if token validation fails
      }
    }

    validateToken();
  }, [router]);


  return (
    <section className='flex gap-5'>
      <div className='w-fit p-4'>
          
      </div>

      <div className='flex-grow bg-red-100'>
        safa
      </div>

    </section>
  );
}
