import React from "react";
import Marqueee from "../components/Marqueee";
import one from "../assets/Rectangle 3986.png";
import two from "../assets/Rectangle 3987.png";
import three from "../assets/Rectangle 3988.png";
import author1 from "../assets/Ellipse 1.png";
import author2 from "../assets/Ellipse 2.png";
import demo1 from "../assets/demo-card-thumbnail.png";
import demo2 from "../assets/demo card 2.png";
import zone1 from "../assets/swimming.png";
import zone2 from "../assets/class.png";
import zone3 from "../assets/playground.png";
import bg from "../assets/bg.png";
import { Link } from "react-router-dom";





import { CiBookmark, CiCalendarDate } from "react-icons/ci";

import { FaFacebook, FaRegShareSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Home = () => {

  const handleShare = async (title, url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: "Check out this news!",
          url: url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser. Copy this link: " + url);
    }
  };





  return (
    <div>
      

      <div className="content grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 px-[5%] my-4">
        <div className="left-sidebar col-span-2 lg:col-span-1">
          <h1 className="text-xl font-bold my-1 ">All Catagory</h1>
          <ul className="">
            <a href="/nationalnews">
            <li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100 ">
              National News
            </li>
            </a>

            <a href="/breakingnews"><li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              Breaking News
            </li></a>

            <a href="/regularnews">
            <li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              Regular news
            </li>
            </a>
            <a href="/internationalnews">
            <li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              International News
            </li>
            </a>
           <a href="/sports">
           <li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              Sports
            </li>
           </a>
            <a href="/entertainment"><li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              Entertainment
            </li></a>
            <a href="/culture"><li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              Culture
            </li></a>
            <a href="/arts">
            <li className=" py-2 opacity-60 text-center rounded-[5px] my-2 hover:bg-neutral-200 hover:opacity-100">
              Arts
            </li>
            </a>
          </ul>

          <div className="sports">
            <div className="one hover:scale-102 duration-[.5s]">



              <a href="/Sports1">
                <img className="my-3 w-full" src={one} alt="" />

                <p className="font-bold text-xl">
                  Boyern slams authorities Over Flight Dealy to Club world Cup
                </p>

                <div className="author flex items-center justify-between mt-5 ">
                  <p>Sports</p>
                  <p className="flex opacity-80 items-center gap-1">
                    <CiCalendarDate></CiCalendarDate> May/05/2025{" "}
                  </p>
                </div>
              </a>
            </div>

            <div className="one hover:scale-102 duration-[.5s]">
              <a href="/sports2">
                <img className="my-3 w-full" src={two} alt="" />

                <p className="font-bold text-xl">
                  Boyern slams authorities Over Flight Dealy to Club world Cup
                </p>

                <div className="author flex items-center justify-between mt-5">
                  <p>Sports</p>
                  <p className="flex opacity-80 items-center gap-1">
                    <CiCalendarDate></CiCalendarDate> May/05/2025{" "}
                  </p>
                </div>
              </a>
            </div>
            <div className="one hover:scale-102 duration-[.5s]">
              <a href="/sports3">
                <img className="my-3 w-full" src={three} alt="" />

                <p className="font-bold text-xl">
                  Boyern slams authorities Over Flight Dealy to Club world Cup
                </p>

                <div className="author flex items-center justify-between mt-5">
                  <p>Sports</p>
                  <p className="flex opacity-80 items-center gap-1">
                    <CiCalendarDate></CiCalendarDate> May/05/2025{" "}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className=" col-span-2  ">
          <h1 className="text-xl font-bold my-1 ">Dragon News home</h1>

          <div className="dn hover:scale-102 duration-[.5s] border border-zinc-200 p-2 my-4 rounded">
            <div className="author bg-neutral-100 p-3 mb-3 rounded">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">

                  

                <Link to="/authorpage1" className="flex items-center gap-4">
  <img src={author1} alt="Author" />
  <p>
    Awlad hossain <br />
    2025-05-05
  </p>
</Link>


                  {/* <a href="/authorpage1" className="flex items-center gap-4">
  <img src={author1} alt="Author" />
  <p>
    Awlad hossain <br />
    2025-05-05
  </p>
</a> */}

                </div>
                <div className="flex items-center gap-3">
                  <a href="" onClick={() => handleShare("News Title", "https://yourwebsite.com/news-path")}>  
                    <FaRegShareSquare></FaRegShareSquare>
                  </a>




                  <a href="">
                    <CiBookmark></CiBookmark>
                  </a>
                </div>
              </div>
            </div>

            <a href="/newspage1">
              <p className="text-xl font-bold mb-3">
                Biden pledge Nearly $# Billion To Ukraine In Largest U.S
                Military aid Package Yet
              </p>
              <img className="w-full" src={demo1} alt="" />
              <p className="opacity-75 my-4">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a..
              </p>
              <a href="/newspage1" className="text-red-500 font-bold">
                Read more
              </a>
            </a>
          </div>

          <div className="dn hover:scale-102 duration-[.5s] border border-zinc-200 p-2 my-4 rounded">
            <div className="author bg-neutral-100 p-3 mb-3 rounded">
              <div className="flex justify-between">
                <div >

                 
                  <Link to='/authorpage2' className="flex items-center gap-4">
                  <img src={author2} alt="" />
                   <p>
                    Awlad hossain <br />
                    2025-05-05
                  </p></Link>

                  {/* <a href=""><img src={author2} alt="" /></a>
                  <p>
                    Awlad hossain <br />
                    2025-05-05
                  </p> */}


                </div>
                <div className="flex items-center gap-3">
                  <a href="" onClick={() => handleShare("News Title", "https://yourwebsite.com/news-path")}>
                    <FaRegShareSquare></FaRegShareSquare>
                  </a>
                  <a href="">
                    <CiBookmark></CiBookmark>
                  </a>
                </div>
              </div>
            </div>

            <a href="/newspage2">
              <p className="text-xl font-bold mb-3">
                Biden pledge Nearly $# Billion To Ukraine In Largest U.S
                Military aid Package Yet
              </p>
              <img className="w-full" src={demo2} alt="" />
              <p className="opacity-75 my-4">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a..
              </p>
              <a href="/newspage2" className="text-red-500 font-bold">
                Read more
              </a>
            </a>
          </div>

          <div className="dn hover:scale-102 duration-[.5s] border border-zinc-200 p-2 my-4 rounded">
            <div className="author bg-neutral-100 p-3 mb-3 rounded">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                <Link to='/authorpage2' className="flex items-center gap-4">
                  <img src={author2} alt="" />
                   <p>
                    Awlad hossain <br />
                    2025-05-05
                  </p></Link>
                </div>
                <div className="flex items-center gap-3">
                  <a href="" onClick={() => handleShare("News Title", "https://yourwebsite.com/news-path")}>
                    <FaRegShareSquare></FaRegShareSquare>
                  </a>
                  <a href="">
                    <CiBookmark></CiBookmark>
                  </a>
                </div>
              </div>
            </div>

            <a href="/newspage3">
              <p className="text-xl font-bold mb-3">
                Biden pledge Nearly $# Billion To Ukraine In Largest U.S
                Military aid Package Yet
              </p>
              <img className="w-full" src={demo2} alt="" />
              <p className="opacity-75 my-4">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a..
              </p>
              <a href="/newspage3" className="text-red-500 font-bold">
                Read more
              </a>
            </a>
          </div>

        </div>

        <div className="right-sidebar col-span-2 lg:col-span-1 ">
          <h1 className="text-xl font-bold my-1 ">Find Us on</h1>

          <div className="border border-zinc-200 rounded  my-4 ">
            <a className="flex items-center gap-3 rounder py-2 text-center text-xl text-blue-500 px-3 hover:bg-neutral-200" href="https://www.facebook.com/"><FaFacebook></FaFacebook> 
            Facebook            
            </a>
           
           
            <hr className="opacity-40"/>
            <a className="flex items-center gap-3 rounder py-2 text-center text-xl text-pink-500 px-3 hover:bg-neutral-200" href="https://www.instagram.com/"><FaInstagram />
            Instagram           
            </a>
            <hr className="opacity-40"/>
            <a className="flex items-center gap-3 rounder py-2 text-center text-xl text-blue-500 px-3 hover:bg-neutral-200" href="https://twitter.com/">
            <FaTwitter />
           Twitter           
            </a>
  
          </div>

          <div className="zone bg-neutral-200 py-5 px-3 my-5 rounded ">
            <h1 className="text-xl font-bold ">Q-Zone</h1>

            <div className="flex flex-col items-center gap-5">

            <a href="https://youtu.be/aXWFqBG-02w?si=K4kBi8PjQ98yk5RC">
              <img src={zone1} className="hover:scale-103 duration-[.5s]"  alt="" />
            </a>
            <a href="https://youtu.be/NIk1-ck4c6Q?si=Wf7aWgrvOFQtqXeJ">
              <img src={zone2} className="hover:scale-103 duration-[.5s]"  alt="" />
            </a>
            <a href="https://youtu.be/f5Ov_n0crZ8?si=NilNMITj93rPGu_q">
              <img src={zone3} className="hover:scale-103 duration-[.5s]"  alt="" />
            </a>
            </div>
          </div>

          <div>
            <a href="https://youtube.com/shorts/GbYjDX8TE9c?si=KJcLfMy8NV_sGfxU">
              <img src={bg} className="w-full rounded" alt="" />
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
