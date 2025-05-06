import React from "react";
import awladImage from "../assets/reporter.jpg"; // replace with correct path
import rahimImage from "../assets/reporter.jpg"; // replace with correct path


const About = () => {
  return (
    <div className="p-[5%] md:p-12 lg:p-20 bg-white text-neutral-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">About Dragon News</h1>

      {/* 3D Animated Cube */}
      <div className="flex justify-center mb-12 my-20">
        <a href="/">

        <div className="cube">
          <div className="face front">Dragon</div>
          <div className="face back">News</div>
          <div className="face right">Breaking</div>
          <div className="face left">Truth</div>
          <div className="face top">Live</div>
          <div className="face bottom">Report</div>
        </div>
        </a>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-md leading-relaxed">
          Dragon News is dedicated to delivering credible, unbiased, and timely news to the world. With a passion for truth and a
          commitment to excellence, we cover breaking news, in-depth reports, and thoughtful analysis across all sectors.
        </p>
        <p className="text-md leading-relaxed mt-4">
          Our team is driven by the core values of transparency, public interest, and journalistic integrity. We aim to empower
          citizens through information and foster a more informed and engaged society.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Meet Our Reporters</h2>

         <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">




        <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 p-6 rounded-lg shadow mb-8">
          <img src={awladImage} alt="Awlad Hossain" className="w-40 h-40 rounded-full object-cover border-4 border-blue-300" />
          <div>
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p className="text-blue-700">Senior Reporter at Dragon News</p>
            <p className="mt-2 text-md">
              Awlad Hossain brings over a decade of experience in investigative journalism and live field reporting. Known for
              his fearless coverage and commitment to truth, Awlad has reported on everything from international conflict zones
              to local elections. His work has inspired change and set standards in ethical journalism.
            </p>
            <p className="mt-2 text-sm">Email: <a href="https://mail.google.com/mail/u/0/" className="text-blue-400 font-bold">awlad@dragonnews.com </a>| Twitter: <a href="https://twitter.com/" className="text-blue-400 font-bold">@AwladDragon</a></p>
          </div>







        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 p-6 rounded-lg shadow mb-8">
          <img src={rahimImage} alt="Awlad Hossain" className="w-40 h-40 rounded-full object-cover border-4 border-green-300" />
          <div>
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p className="text-green-700">Field Correspondent at Dragon News</p>
            <p className="mt-2 text-md">
            Rahim Hossain is a dynamic journalist known for his on-the-ground coverage of breaking news and human-interest stories.
              With a sharp eye for detail and a strong sense of empathy, Rahim delivers compelling reports that connect deeply with
              readers and viewers alike.
            </p>
            <p className="mt-2 text-sm">Email: <a href="https://mail.google.com/mail/u/0/" className="text-blue-400 font-bold">awlad@dragonnews.com </a>| Twitter: <a href="https://twitter.com/" className="text-blue-400 font-bold">@AwladDragon</a></p>
          </div>
        </div>

        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-md leading-relaxed">
          We envision a world where information is free, honest, and transformative. At Dragon News, we invest in modern technology,
          ethical training, and diverse voices to ensure our audience receives the best content across all platforms.
        </p>
        <p className="text-md leading-relaxed mt-4">
          Whether through print, web, or video journalism, our stories reflect our relentless pursuit of truth and dedication to
          the communities we serve.
        </p>
      </section>

      {/* <footer className="border-t pt-6 mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Dragon News. All rights reserved.
      </footer> */}
    </div>
  );
};

export default About;

