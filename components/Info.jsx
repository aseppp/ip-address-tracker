import React from 'react';

const Info = ({ ip, city, region, postal, timezone, isp }) => {
  return (
    <div className='grid gap-2 grid-cols-2 md:gap-5 text-center md:text-left md:grid-cols-4 place-content-center'>
      <div>
        <p className='uppercase md:mb-3 text-grayy font-medium'>ip address</p>
        <p className='text-darkGray md:text-xl font-medium'>{ip}</p>
      </div>

      <div>
        <p className='uppercase md:mb-3 text-grayy font-medium'>Location</p>
        <p className='text-darkGray md:text-xl font-medium'>
          {city}, {region}, {postal}
        </p>
      </div>

      <div>
        <p className='uppercase md:mb-3 text-grayy font-medium'>timezone</p>
        <p className='text-darkGray md:text-xl font-medium'>UTC {timezone}</p>
      </div>

      <div>
        <p className='uppercase md:mb-3 text-grayy font-medium'>isp</p>
        <p className='text-darkGray md:text-xl font-medium'>{isp}</p>
      </div>
    </div>
  );
};

export default Info;
