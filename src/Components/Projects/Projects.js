import React from 'react';

const Projects = () => {
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Travel BD
                            <div className="badge badge-secondary">
                                <a href='https://travelbd-client.web.app/' target="_blank" rel="noreferrer">Live View</a>
                            </div>
                        </h2>
                        <p>Travel BD is a Web Application developed with React JS. It's a tourist guide or planning web site.</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-secondary badge-outline">React.js</div>
                            <div className="badge badge-secondary badge-outline">Tailwind CSS</div>
                            <div className="badge badge-secondary badge-outline">Node.js</div>
                            <div className="badge badge-secondary badge-outline">Express.js</div>
                            <div className="badge badge-secondary badge-outline">MongoDB</div>
                            <div className="badge badge-secondary badge-outline">Firebase</div>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Red Code
                            <div className="badge badge-secondary">
                                <a href='https://red-code-client.web.app/' target="_blank" rel="noreferrer">Live View</a>
                            </div>
                        </h2>
                        <p>Red Code is an online programming courses web app build with React JS.</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-secondary badge-outline">React.js</div>
                            <div className="badge badge-secondary badge-outline">React-Bootstrap</div>
                            <div className="badge badge-secondary badge-outline">Node.js</div>
                            <div className="badge badge-secondary badge-outline">Express.js</div>
                            <div className="badge badge-secondary badge-outline">MongoDB</div>
                            <div className="badge badge-secondary badge-outline">Firebase</div>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Quizzy BD
                            <div className="badge badge-secondary">
                                <a href='https://zingy-pasca-f4c1b0.netlify.app/' target="_blank" rel="noreferrer">Live View</a>
                            </div>
                        </h2>
                        <p>Quizzy BD is an online quiz taking web application where people can attempt quiz and check the answers.</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-secondary badge-outline">React.js</div>
                            <div className="badge badge-secondary badge-outline">CSS</div>
                            <div className="badge badge-secondary badge-outline">React Router</div>
                            <div className="badge badge-secondary badge-outline">Firebase</div>
                            <div className="badge badge-secondary badge-outline">Authentication</div>
                            <div className="badge badge-secondary badge-outline">Node.js</div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;