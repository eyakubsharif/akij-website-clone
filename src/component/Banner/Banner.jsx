import React from 'react';

const Banner = () => {
    return (
        <div className='text-white'>
            <div className=' h-screen relative '>
                <img className='mx-auto' src="/src/assets/images/banner1.jpg" alt="" />
            </div>
            <div className=' '>
                <div className='w-7/12 mx-auto absolute top-110 left-60 '>
                    <h1 className='font-bold text-3xl'>Akij Group</h1>
                <h3 className='text-xl'>THE LARGEST GROUP OF COMPANY IN BANGLADESH</h3>
                <p className='mt-5'>Akij Group is one of the largest Bangladeshi industrial conglomerates. The industries under this conglomerate include textiles, tobacco, food & beverage, cement, ceramics, printing and packaging, pharmaceuticals, consumer products et</p>
                <button className='btn outline-none border-none rounded-3xl mt-2 bg-white text-black'>Our Companies</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;