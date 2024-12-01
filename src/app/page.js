import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='md:flex justify-between gap-4 px-3 md:px-12 py-4'>
      <div className='md:w-2/3'>
        <LatestNews></LatestNews>
      </div>
      <div className=' md:w-1/3'>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default HomePage;