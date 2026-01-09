import React from 'react';

const Product = () => {
    return (
        <div className='py-20'>
            <div className='w-7/12 mx-auto py-15'>
                <p className='font-bold text-xl'>Our Product</p>
                <p>In this era of mass production, as it is very hard to stand out with one product,
Akij Group focuses on making the best in all sectors.</p>
            </div>
            <div className='grid grid-cols-5 mx-4 gap-5'>
                <div className='bg-green-100 rounded-xl p-2 shadow-2xl'>
                    <img className='mx-auto w-30 h-30' src="/src/assets/images/tumaric.png" alt="" />
                    <p>Mojo</p>
                </div>
                <div className='bg-green-100 rounded p-2 shadow-2xl'>
                    <img className='mx-auto w-30 h-30' src="/src/assets/images/chair2.png" alt="" />
                    <p>Chair</p>
                </div>
                <div className='bg-green-100 rounded p-2 shadow-3xl'>
                    <img className='mx-auto w-30 h-30' src="/src/assets/images/chair.png" alt="" />
                    <p>Baby Chair</p>
                </div>
                <div className='bg-green-100 rounded p-2 shadow-2xl'>
                    <img className='mx-auto w-30 h-30' src="/src/assets/images/frotika.png" alt="" />
                    <p>Frotika</p>
                </div>
                <div className='bg-green-100 rounded items-center justify-center p-2 shadow-2xl'>
                    <img className='mx-auto w-30 h-30' src="/src/assets/images/clemon.png" alt="" />
                    <p>Clemon</p>
                </div>

            </div>
        </div>
    );
};

export default Product;