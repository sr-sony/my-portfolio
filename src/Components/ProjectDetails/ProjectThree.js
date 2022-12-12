import React from 'react';
import img1 from '../../Assets/Image/2 (1).png';
import img2 from '../../Assets/Image/31.png';
import img3 from '../../Assets/Image/32.png';
const ProjectThree = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className='col-span-2'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-0'>
                            <img src={img1} alt='' className="w-xs rounded-lg shadow-2xl" />
                            <img src={img2} alt='' className="w-xs rounded-lg shadow-2xl" />
                            <img src={img3} alt='' className="w-xs rounded-lg shadow-2xl" />
                        </div>

                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">QUIZZY BD</h1>
                        <p className="py-6">MERN STACK</p>
                        <a className='btn btn-primary mx-4' href='https://github.com/sr-sony/Quizzy-Bd'>GitHub || Client Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;