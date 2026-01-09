import React from 'react';

const AboutSection = () => {
    return (
       <div>
         <div className='w-11/12 mx-auto mb-15'>
            <div className='mx-auto mt-5 mb-10'>
                 <p>All You Need To Know</p>
                <p className='font-bold text-xl'>About Akij Group</p>
            </div>
            <div className='grid grid-cols-4 gap-8'>
               
                <div className='border border-blue-500 rounded-xl p-5 hover:scale-110 hover:shadow-2xl cursor-pointer ease-in-out duration-800'>
                    <img className='mx-auto mb-3' src="/src/assets/images/about1.svg" alt="" />
                    <div className='text-center'>
                        <h3>Since</h3>
                        <p>1950</p>
                    </div>
                </div>
                <div className='border border-blue-500 rounded-xl p-5 hover:scale-110 hover:shadow-2xl cursor-pointer ease-in-out duration-800'>
                    <img className='mx-auto mb-3' src="/src/assets/images/about2.svg" alt="" />
                    <div className='text-center'>
                        <h3>Units</h3>
                        <p>31</p>
                    </div>
                </div>
                <div className='border  border-blue-500 rounded-xl p-5 hover:scale-110 hover:shadow-2xl cursor-pointer ease-in-out duration-800'>
                    <img className='mx-auto mb-3' src="/src/assets/images/about3.svg" alt="" />
                    <div className='text-center'>
                        <h3>Employees</h3>
                        <p>35053</p>
                    </div>
                </div>
                <div className='border  border-blue-500 rounded-xl p-5 hover:scale-110 hover:shadow-2xl cursor-pointer ease-in-out duration-800'>
                    <img className='mx-auto mb-3' src="/src/assets/images/about4.png" alt="" />
                    <div className='text-center'>
                        <h3>National Achievements</h3>
                        <p>25</p>
                    </div>
                </div>
            </div>
        </div>

            <div className='bg-blue-100 text-black p-10'>
                <div className='flex justify-between items-center w-11/12 mx-auto'>
                    {/* image div  */}
                    <div className='w-[50%] relative'>
                        <img className='' src="/src/assets/images/akijUddin.jpg" alt="" />
                        <div className='flex justify-between items-center absolute w-55 rounded shadow-2xl top-105 right-5 px-5 py-1 bg-white  '>
                            <img src="/src/assets/images/logo.png" alt="" />
                            <div>
                                <p className='font-bold'>SK.AKIJ UDDIN</p>
                                <p className='font-bold text-sm text-yellow-600'>FOUNDER</p>
                            </div>
                        </div>
                    </div>
                    {/* text div  */}
                    <div className='w-[50%]'>
                        <h1 className='text-xl font-bold my-6'>One of the biggest conglomerates in Bangladesh.</h1>
                        <p className='mb-6'>The legacy of AKIJ GROUP is over half a century old and over the years Akij has established itself as the full of confidence and much revered industrial family of Bangladesh. It consists of 24 big concerns with diverse activities & different products.
Akij Group launched its venture as a small jute trader more than 50 years ago.</p>
                        <button className='btn border-none rounded-3xl'>View Details</button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default AboutSection;