import Image from 'next/image';
import React from 'react';

const LatestNews = () => {
    return (
        <div>
            {/* main news */}
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image className='w-full'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" height={10} width={100} />
                </figure>
                <div className="card-body p-4">

                    <div>
                        <p className='my-3 bg-red-500 rounded-full px-4 py-2 text-white inline-block'>technology</p>
                    </div>

                    <h2 className="card-title text-3xl">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <h3 className='text-xl'>by john smith 3-8-2021</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias obcaecati iste iure ratione, deserunt totam veniam. At iste eos mollitia in totam veniam possimus eum, a consectetur aliquam. Debitis illo nesciunt veniam ipsa autem quo officiis quod facilis reprehenderit nemo!</p>

                </div>
            </div>

            {/* sub news section 2 */}
            <div className='grid md:grid-cols-2 gap-5 mt-4'>
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

            </div>
        </div>
    );
};

export default LatestNews;