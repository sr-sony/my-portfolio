import React from 'react';
import resume from '../../Assets/Resume/Sharzan_Resume.pdf'
import img from '../../Assets/Image/1.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                    <img src={img} alt='' className="max-w-sm rounded-full shadow-2xl" />
                    <div className='flex flex-col place-items-center'>
                        <h1 className="text-3xl lg:text-5xl font-bold my-10">Enthusiast Web Developer</h1>
                        <a href={resume} download className="btn btn-primary">Resume</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;