import React from 'react';
import nationalImg from '../assets/national.jpg'; // Replace with your actual image path

const NationalNews = () => {
  return (
    <div className="p-[5%] max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">National News</h1>
      <img src={nationalImg} alt="National News" className="w-full mb-4 rounded shadow-md" />
      
      <p className="mb-4 text-lg leading-7">
        National News covers the most crucial updates affecting the country. From government policy changes, 
        political developments, and economic trends to environmental issues, this section provides in-depth 
        coverage from every region.
      </p>

      <p className="mb-4 text-lg leading-7">
        In recent months, the country has faced significant challenges ranging from natural disasters to 
        political instability. Our team of reporters ensures that citizens remain informed with verified, 
        unbiased, and timely information sourced from government releases, independent watchdogs, and 
        local correspondents.
      </p>

      <p className="mb-4 text-lg leading-7">
        Infrastructure development projects have been launched in several states, aiming to improve roads, 
        healthcare, and digital access in rural areas. These efforts are a part of the national “Vision 2040” 
        initiative — a long-term roadmap toward modernization and economic resilience.
      </p>

      <p className="mb-4 text-lg leading-7">
        Meanwhile, nationwide protests erupted following controversial legislative proposals. Citizens and 
        advocacy groups voiced concerns about civil liberties and justice reform, prompting the government 
        to initiate a series of public consultations and reviews.
      </p>

      <p className="mb-4 text-lg leading-7">
        Stay with us for updates on elections, national holidays, security alerts, and stories that shape 
        the identity of our country. We also cover achievements in science, education, public service, 
        and national sports victories that inspire pride and unity.
      </p>

      <a href="https://www.prothomalo.com/" className="text-blue-600 text-lg font-semibold hover:underline">
        → Read more national coverage here
      </a>
    </div>
  );
};

export default NationalNews;
