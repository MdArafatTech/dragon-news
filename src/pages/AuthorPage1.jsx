import React from 'react';
import reporter from "../assets/reporter.jpg"
import { SiGmail } from 'react-icons/si';
import { FaFacebook, FaInstagram } from 'react-icons/fa';


const Author1 = () => {
    return (
        <div>
            <div className="author flex flex-col items-center my-10 p-[5%] ">
                <img src={reporter} alt="" className="w-40 rounded-full bg-red-400 p-3 mb-5" />

                <p><b>Awlad Hossain</b> is a dedicated news reporter at The <mark>Dragon News</mark>, known for his sharp reporting and on-the-ground coverage of current events. With several years of experience in journalism, Awlad covers <q>national news, political developments,</q> and social issues with accuracy and integrity. His clear communication style and ability to connect with diverse sources make him a trusted voice in the field. Awlad is committed to delivering factual, timely, and impactful stories that inform and engage the public.</p>
                <div className="icon flex items-center gap-5 text-2xl my-4">
                    <a className='bg-black text-blue-500 p-2 rounded-full hover:scale-110 duration-[.5s]' href="https://mail.google.com/mail/u/0/"><SiGmail></SiGmail></a>
                   <a  className='bg-black text-blue-500 p-2 rounded-full hover:scale-110 duration-[.5s]' href="https://www.facebook.com/"> <FaFacebook></FaFacebook></a>
                    <a  className='bg-black text-blue-500 p-2 rounded-full hover:scale-110 duration-[.5s]' href="https://www.instagram.com/"><FaInstagram> </FaInstagram></a>

                </div>
            </div>
        </div>
    );
};

export default Author1;