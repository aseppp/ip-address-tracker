'use client';

import React, { useEffect, useState } from 'react';
import { Rubik } from 'next/font/google';
import Image from 'next/image';
import { BiSearchAlt } from 'react-icons/bi';
import dynamic from 'next/dynamic';
import Info from '@/components/Info';
import useSwr from 'swr';
import { useForm } from 'react-hook-form';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
});

export default function Home() {
  const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
    ssr: false,
  });

  const [param, setParam] = useState('8.8.8.8');
  const [location, setLocation] = useState([51.505, -0.09]);
  const { register, watch, handleSubmit } = useForm();

  const onSubmit = () => {
    setParam(watch('ip'));
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSwr(
    `${process.env.BASE_URL}${process.env.API_KEY}&ipAddress=${param}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setLocation([data?.location?.lat, data?.location?.lng]);
    }
  }, [data, setLocation]);

  return (
    <main className={`${rubik.variable} font-sans`}>
      <div className='relative'>
        <Image
          src='/pattern-bg-desktop.png'
          alt='bg'
          width={500}
          height={500}
          className='w-full h-64 md:h-72'
        />

        <div className='absolute top-0 right-0 left-0 w-96 m-auto '>
          <h1 className='text-3xl text-center mb-5 mt-5 md:mb-5 md:mt-16 text-gray-100 font-medium'>
            IP Address Traker
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex mx-4'>
              <input
                {...register('ip')}
                type='text'
                placeholder='Search for any ip address or domain'
                className='py-3 px-4 rounded-l-lg w-full focus:ring-none focus:outline-none focus:border-none'
              />
              <button type='submit' className='bg-black rounded-r-lg p-3'>
                <BiSearchAlt size='1.5em' color='white' />
              </button>
            </div>

            <h1 className='mx-3 my-2 text-gray-100'>
              {isLoading ? 'Loading ...' : null}
            </h1>
          </form>
        </div>

        <div className='rounded-xl shadow-xl p-5 top-0 mt-40 md:mt-60 absolute left-0 right-0 mx-3 md:m-auto md:w-info bg-gray-100 z-30'>
          <Info
            ip={data?.ip || 'No Data'}
            city={data?.location?.city || 'No Data'}
            region={data?.location?.region}
            postal={data?.location?.postalCode}
            timezone={data?.location?.timezone || 'No Data'}
            isp={data?.isp || 'No Data'}
          />
        </div>
      </div>

      <div className='m-0 p-0 h-map absolute w-full z-10'>
        <MapWithNoSSR location={location} popup={data?.isp} />
      </div>
    </main>
  );
}
