import React from 'react';
import { Rubik } from 'next/font/google';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Map from '@/components/Map';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
});

export default function Home() {
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
              className='py-3 px-4 rounded-l-lg w-full '
            />
            <button className='bg-black rounded-r-lg p-3'>
              <MdKeyboardArrowRight size='1.5em' color='white' />
            </button>
          </div>
        </div>

        <div className='rounded-xl shadow-xl p-5 top-0 mt-40 md:mt-56 absolute left-0 right-0 mx-3 md:m-auto md:w-info h-36 bg-gray-100'>
          <h1>Info</h1>
        </div>
      </div>

      <div>
        <Map />
      </div>
    </main>
  );
}
