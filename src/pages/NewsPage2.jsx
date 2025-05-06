import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import news1 from '../assets/demo-card-thumbnail.png';
import zone1 from '../assets/swimming.png';
import zone2 from '../assets/playground.png';
import zone3 from '../assets/class.png';


const Newspage1 = () => {
  return (
    <div>
      <div className="singlenews grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-[5%] gap-8">
        
        {/* Left: Main News Content */}
        <div className='col-span-2'>
          <a href="/newspage1">
            <p className="text-xl font-bold mb-3">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </p>
            <img className="w-full" src={news1} alt="Biden Ukraine Aid" />
            <p className="opacity-75 my-4">
                              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.
                              </p>
          </a>
        </div>

        {/* Right: Social & Extras */}
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-xl font-bold my-1">Find Us on</h1>

          {/* Social Media Links */}
          <div className="border border-zinc-200 rounded my-4">
            <a className="flex items-center gap-3 py-2 text-xl text-blue-500 px-3 hover:bg-neutral-200" href="https://www.facebook.com/">
              <FaFacebook /> Facebook
            </a>
            <hr className="opacity-40" />
            <a className="flex items-center gap-3 py-2 text-xl text-pink-500 px-3 hover:bg-neutral-200" href="https://www.instagram.com/">
              <FaInstagram /> Instagram
            </a>
            <hr className="opacity-40" />
            <a className="flex items-center gap-3 py-2 text-xl text-blue-500 px-3 hover:bg-neutral-200" href="https://twitter.com/">
              <FaTwitter /> Twitter
            </a>
          </div>

          {/* Q-Zone */}
          <div className="zone bg-neutral-200 py-5 px-3 my-5 rounded">
            <h1 className="text-xl font-bold mb-4">Q-Zone</h1>
            <div className="flex flex-col items-center gap-5">
              <a href="https://youtu.be/aXWFqBG-02w?si=K4kBi8PjQ98yk5RC">
                <img src={zone1} className="hover:scale-103 duration-500" alt="Swimming Zone" />
              </a>
              <a href="https://youtu.be/NIk1-ck4c6Q?si=Wf7aWgrvOFQtqXeJ">
                <img src={zone2} className="hover:scale-103 duration-500" alt="Playground Zone" />
              </a>
              <a href="https://youtu.be/f5Ov_n0crZ8?si=NilNMITj93rPGu_q">
                <img src={zone3} className="hover:scale-103 duration-500" alt="Class Zone" />
              </a>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Newspage1;