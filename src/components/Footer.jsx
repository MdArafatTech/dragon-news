import React from 'react';


const Footer = () => {



    
        const showAlert = () => {
          alert("Subscribed!");
        };
    return (
        <div className=''>
           
       
           <div className="p-[6%] mt-10 bg-base-200 text-base-content  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            
            <nav>
           <h3 className='text-xl mb-2 font-bold'>About Dragon News</h3>
                <p className='mb-4 text-[15px] opacity-60'>Dragon News is dedicated to delivering credible, unbiased, and timely news to the world. With a passion for truth and a commitment to excellence, we cover breaking news, in-depth reports, and thoughtful analysis across all sectors.</p>
         
                <p className=''>Email: <a href="mailto:mdalarafatabir@gmail.com"className='opacity-60 text-[15px]  hover:text-blue-500 transition duration-100' >mdalarafatabir@gmail.com</a></p>
                <p className=''>Phone: <a href="tel:+8801303180712"className='opacity-60 text-[15px]  hover:text-blue-500 transition duration-100' >+8801303180712</a></p>
                
           </nav>
           <nav>
           <div className="one flex justify-around">
                 <div className="quick">
                 <h3 className='text-xl mb-2 font-bold'>Quick Link</h3>
                 <ul className='opacity-60'>
                   <li><a className=' hover:text-blue-500 transition duration-100' href="/">Home</a></li>
                   <li><a className=' hover:text-blue-500 transition duration-100' href="/about">About</a></li>
                 
                   <li><a className=' hover:text-blue-500 transition duration-100' href="/contact">Contact</a></li>
                   

                 </ul>
         
                 </div>
         
                <div className="one flex justify-around" >
                <div className="catagory">
                 <h3 className='text-xl mb-2 font-bold'>Catagory</h3>


                <div className="flex gap-3">
                <ul className='opacity-60'>
                 <li><a className=' hover:text-blue-500 transition duration-100' href="/nationalnews">National News</a></li>
                 <li><a className=' hover:text-blue-500 transition duration-100' href="/breakingnews">Reaking News</a></li>
                   <li><a className=' hover:text-blue-500 transition duration-100' href="/regularnews">Regular News</a></li>
                  
                   <li><a className=' hover:text-blue-500 transition duration-100' href="/internationalnews">International news</a></li>
                 </ul>

                 <ul className='opacity-60'>
                 <li><a className=' hover:text-blue-500 transition duration-100' href="/sports">Sports</a></li>
                 <li><a className=' hover:text-blue-500 transition duration-100' href="/entertainment">Entertainment</a></li>
                 <li><a className=' hover:text-blue-500 transition duration-100' href="/culture">Culture</a></li>
                   
                 <li><a className=' hover:text-blue-500 transition duration-100' href="/arts">Arts</a></li>
                   
                 </ul>
                </div>



                 </div>
                </div>
               </div>
           </nav>
          
           <form className=' form flex flex-col items-center  p-4 mr-3 rounded'>
             <h6 className='text-xl font-bold'>Weekly Newsletter</h6>
             <p className='opacity-60 text-[15px] mb-5'>Get blog articles and offers via email</p>
             <fieldset className="w-full">
               <label>Your email:</label> <br />
               <div className="">
                 <input
                   type="email"
                   placeholder="enter email"
                   className="input input-bordered w-full" /> 
                  <br />
                  {/* <button onclick="myFunction()" className="btn btn-primary w-full mt-2">Subscribe</button> */}
                   
       
                  <button
                   onClick={showAlert}
                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded my-2"
                 >
                   Subscribe
                 </button>
       
       
                  <input type="text" />
                
               </div>
             </fieldset>
           </form> 

           </div>

           <div className='bg-base-200'>

           <hr className='opacity-50 mx-[5%]' />

<div className=" px-[5%] pt-2 flex justify-center ">

<div className='flex flex-col items-center'>

</div> 




<div className="policy grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-center gap-5">
<a className=' hover:text-blue-500 transition duration-100' href="">Terms of use</a>
<a className=' hover:text-blue-500 transition duration-100' href="">Privacy Policy</a>
<a className=' hover:text-blue-500 transition duration-100' href="">Cookie Policy</a>
</div>



</div>



<footer className=" flex justify-center mb-5 text-center text-sm text-gray-500">
&copy; {new Date().getFullYear()} Dragon News. All rights reserved.
</footer>
           </div>
       
        
       
      
       
       
         </div>
    );
};

export default Footer;