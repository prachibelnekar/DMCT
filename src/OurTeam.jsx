import React from 'react';
import dr from '../src/images/dr_ravindra_jadhav.jpg';
import Footer from './Footer.jsx';

const OurTeam = () => {
    return (
        <>
            <div className="flex overflow-hidden flex-col bg-white select-none">
                <div className="flex flex-col items-center self-end mt-[59px] mr-16 mx-20 w-full max-w-[1285px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                    <div className="self-start w-full max-w-[1219px] max-md:max-w-full ">
                        <div className="flex shadow-lg bg-sky-50 mb-8   mt-16 border-sky-500 gap-0 max-md:flex-col bg-sate-400 relative">
                           
                            <div className="relative w-[50%] max-md:w-full  flex justify-center p-5 items-center">
                                <img
                                    src={dr}
                                    alt="Dr. Ravindra Jadhav"
                                    className="absolute -top-24 w-[300px] h-[400px] bg-cover  p-2 bg-white  shadow-sky-200 rounded-lg shadow-lg"
                                />
                            </div>

                           
                            <div className="flex flex-col ml-5 max-md:ml-0 w-[50%] max-md:w-full">
                                <div className='rounded-lg  shadow-lg bg-white ml-7 md:ml-0   p-5 relative z-10  mt-72 md:mt-10 mb-16 mr-3 md:mr-20'>
                                    <div className="flex flex-col text-3xl font-bold text-black leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                                        <h4>Dr. Ravindra Jadhav</h4>
                                        <p className="mt-5 text-lg text-gray-700 max-md:mt-3 max-md:text-base">
                                            <strong>Qualification:</strong> Ph.D. in Computer Science<br />
                                            <strong>Experience:</strong> 15+ years in teaching and research<br />
                                            <strong>Specialization:</strong> Artificial Intelligence, Data Science, Machine Learning
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Boxes for Other Professionals */}
                        <div className="grid grid-cols-5 gap-5 mt-10 mx-10 max-md:grid-cols-1">
                            {/* Box 1 */}
                            <div className="border-2 border-slate-100 shadow-xl p-4 rounded-sm text-center">
                                <h3 className="text-xl font-bold whitespace-nowrap">Dr. Surekha Jadhav</h3>
                                <p className="mt-2 text-gray-700">Admin</p>
                            </div>

                            {/* Box 2 */}
                            <div className="border-2 border-slate-100 shadow-xl p-4 rounded-sm text-center">
                                <h3 className="text-xl font-bold">Dr. Arun Chandel</h3>
                                <p className="mt-2 text-gray-700">MD, Medicine</p>
                            </div>

                            {/* Box 3 */}
                            <div className="border-2 border-slate-100 shadow-xl p-4 rounded-sm text-center">
                                <h3 className="text-xl font-bold">Munira Zoher</h3>
                                <p className="mt-2 text-gray-700">Physiotherapy</p>
                            </div>

                            {/* Box 4 */}
                            <div className="border-2 border-slate-100 shadow-xl p-4 rounded-sm text-center">
                                <h3 className="text-xl font-bold">Dr. Bhushan Patil</h3>
                                <p className="mt-2 text-gray-700">MD, Psychiatric</p>
                            </div>

                            {/* Box 5 */}
                            <div className="border-2 border-slate-100 shadow-xl p-4 rounded-sm text-center">
                                <h3 className="text-xl font-bold">Dr. Sumit Vane</h3>
                                <p className="mt-2 text-gray-700">MBBS, DVD Skin</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default OurTeam;
