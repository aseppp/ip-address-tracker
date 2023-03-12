import React from 'react';

const Info = ({ ip, city, region, postal, timezone, isp }) => {
  return (
    <div className='grid gap-5 text-center md:text-left md:grid-cols-4 place-content-center'>
      <div>
        <p className='uppercase mb-3 text-grayy font-medium'>ip address</p>
        <h1 className='text-darkGray text-xl font-medium'>{ip}</h1>
      </div>

      <div>
        <p className='uppercase mb-3 text-grayy font-medium'>Location</p>
        <h1 className='text-darkGray text-xl font-medium'>
          {city}, {region}, {postal}
        </h1>
      </div>

      <div>
        <p className='uppercase mb-3 text-grayy font-medium'>timezone</p>
        <h1 className='text-darkGray text-xl font-medium'>UTC {timezone}</h1>
      </div>

      <div>
        <p className='uppercase mb-3 text-grayy font-medium'>isp</p>
        <h1 className='text-darkGray text-xl font-medium'>{isp}</h1>
      </div>
    </div>
  );
};

export default Info;
