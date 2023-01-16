import React from 'react';
import BucketGirl from '../../Assets/Images/bucketgirl.png'

const Landing = () => {
    return (
        <div>
            <div class="hero lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row px-8 p-0">
                    <div>
                        <p className='text-xl'>Best Quality</p>
                        <h1 class="text-5xl font-bold max-w-xl">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh]'>
                        <img src={BucketGirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='bg-slate-50 w-11/12 mx-auto drop-shadow-xl mt-[-50px] p-5 rounded-lg'>
                <h1 className='text-2xl'>Get Free Estimate</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button class="btn btn-primary mt-5">REQUEST A QOUTE</button>
            </div>
        </div>
    )
}

export default Landing;