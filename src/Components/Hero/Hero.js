import React from 'react';
import resume from '../../Assets/Resume/Sharzan_Resume.pdf'
import img from '../../Assets/Image/1.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row lg:justify-between">
                    <img src={img} alt='' className="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Enthusiast Web Developer</h1>
                        <a href={resume} download className="btn btn-primary">Resume</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;