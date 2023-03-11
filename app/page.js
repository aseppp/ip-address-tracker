'use client';

import React, { useState } from 'react';
import { Rubik } from 'next/font/google';
import Image from 'next/image';
import { BiSearchAlt } from 'react-icons/bi';
import Map from '@/components/Map';
import Info from '@/components/Info';
import useSwr from 'swr';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
});

export default function Home() {
  const [param, setParam] = useState(null);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSwr(
    param
      ? `${process.env.BASE_URL}${process.env.API_KEY}&ipAddress=${param}`
      : null,
    fetcher
  );

  console.log(data);

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

        <div className='absolute top-0 right-0 left-0 w-96 m-auto'>
          <h1 className='text-3xl text-center mb-10 mt-5 text-gray-100 font-medium'>
            IP Address Traker
          </h1>

          <div className='flex mx-3'>
            <input
              type='text'
              placeholder='Search for any ip address or domain'
              className='py-3 px-4 rounded-l-lg w-full focus:ring-none focus:outline-none focus:border-none'
              onChange={(e) => setParam(e.target.value)}
            />
            <button disabled className='bg-black rounded-r-lg p-3'>
              <BiSearchAlt size='1.5em' color='white' />
            </button>
          </div>
        </div>

        <div className='rounded-xl shadow-xl p-5 top-0 mt-40 md:mt-60 absolute left-0 right-0 mx-3 md:m-auto md:w-info bg-gray-100'>
          <Info
            ip={data?.ip || 'No Data'}
            city={data?.location.city || 'No Data'}
            region={data?.location.region}
            postal={data?.location?.postalCode}
            timezone={data?.location?.timezone || 'No Data'}
            isp={data?.isp || 'No Data'}
          />
        </div>
      </div>

      <div>
        <Map />
      </div>
    </main>
  );
}
