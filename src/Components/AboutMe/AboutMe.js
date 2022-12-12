import React from 'react';
import img from '../../Assets/Image/1.jpg'
const AboutMe = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hello</h1>
                        <h1 className='text-3xl font-bold text-primary'>I am Sharzan Rahman</h1>
                        <p className="py-6">I am a web developer. I have expertise in MERN Stack Development. I am Enthusiast about technology. I am always looking for new technology. I have completed some projects using MERN Stack Technology. I am very interesting about learning new technology.</p>
                        <p className='mb-3'>I am now completing my graduation from Daffodil International University in the field of Computer Science & Technology.</p>
                        <a className='btn btn-primary ' href='https://github.com/sr-sony'>GitHub</a>
                        <a className='btn btn-primary mx-2' href='https://www.linkedin.com/in/sharzan/'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;