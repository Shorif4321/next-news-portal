import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image className='w-full'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" height={10} width={100} />
                </figure>
                <div className="card-body p-4">
                    <div>
                        <p className='my-1 bg-red-500 rounded-full px-2 py-1 text-white inline-block'>technology</p>
                    </div>

                    <h2 className="card-title text-xl">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <h3 className='text-xl font-semibold'>by john smith 3-8-2021</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  .....</p>

                </div>
            </div>

            {/* side bari repeted items  */}
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>
            <div className="flex items-center mt-3">

                <Image className='w-20 h-20 object-cover rounded-lg'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" height={100} width={100} />

                <div className="card-body p-4 shadow-sm">
                    <h2 className="font-semibold text-xl">Bitcoin - Open source P2P money for your bussiness imporovment!</h2>
                    <p className=''>by john smith 3-8-2021</p>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;