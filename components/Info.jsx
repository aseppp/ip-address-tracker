import React from 'react';

const Info = ({ ip, city, region, postal, timezone, isp }) => {
  return (
    <div className='grid text-center md:text-left md:grid-cols-4 place-content-center'>
      <div>
        <p className='uppercase mb-3 text-grayy'>ip address</p>
        <h1 className='text-darkGray text-2xl font-medium'>{ip}</h1>
      </div>

      <div>
        <p className='uppercase mb-3 text-grayy'>Location</p>
        <h1 className='text-darkGray text-2xl font-medium'>
          {city} {region} {postal}
        </h1>
      </div>

      <div>
        <p className='uppercase mb-3 text-grayy'>timezone</p>
        <h1 className='text-darkGray text-2xl font-medium'>{timezone}</h1>
      </div>

      <div>
        <p className='uppercase mb-3 text-grayy'>isp</p>
        <h1 className='text-darkGray text-2xl font-medium'>{isp}</h1>
      </div>
    </div>
  );
};

export default Info;
