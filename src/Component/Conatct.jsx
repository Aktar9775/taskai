import React from "react";
import Features from "./Features";
function Conatct() {
  return (
    <div className="mt-40">
      <div className="text-center">
        
        <button
          className="border-[1px] px-5 py-2 text-sm border-[#2d3748] rounded-2xl"
          style={{ fontSize: "11px", background: "rgba(255, 255, 255, 0.07)" }}
        >
          CONTACT US
        </button>
      </div>
      <div className="grid grid-flow-col grid-cols-4 p-20">
        <div className="col-span-2 relative">
          <div className="mt-5 relative z-10">
            <span className="text-4xl mt-4">Ask whatever you have</span>
            <br />
            <p className="text-4xl text-gradient">in your mind now</p>
          </div>
          <span className="mt-7 text-sm relative z-10">
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today
          </span>
          <br />
          <br />
          <span className="flex gap-2 h-5 mt-5 text-sm relative z-10">
            <img src="/Mail.png" alt="Mail" />
            <u>contact@adtask.ai</u>
          </span>
          <span className="flex gap-2 h-5 mt-5 text-sm relative z-10">
            <img src="/Phone.png" alt="Phone" />
            (969) 819-8061
          </span>
          <span className="flex gap-2 h-5 mt-5 text-sm relative z-10">
            <img src="/Address.png" alt="Address" />
            San Francisco Bay Area
          </span>

          <div className=" mt-[-320px] z-0">
            <img
              src="/Ellipse 9.png"
              alt="Decorative Ellipse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

  <div className="col-span-2 relative px-10 text-sm ">
  {/* Name Field */}
  <div className="mb-4">
    <label htmlFor="name" className="block mb-1">
      Name
    </label>
    <input
      type="text"
      id="name"
    
      className="w-full border border-[#7687B5] py-2 px-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7687B5]"
    />
  </div>

  {/* Email Field */}
  <div className="mb-4">
    <label htmlFor="email" className="block mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      className="w-full border border-[#7687B5] py-2 px-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7687B5]"
    />
  </div>

  {/* Message Field */}
  <div className="mb-4">
    <label htmlFor="message" className="block mb-1">
      Message
    </label>
    <textarea
      id="message"
      rows="4"
      
      className="w-full border border-[#7687B5] py-2 px-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7687B5]"
    ></textarea>
  </div>

  {/* Submit Button */}
     <button
          className="border-[1px] px-9 py-2 border-[#2d3748] bg-[#7687B5]/50 rounded-2xl"
          
        >
          Submit
        </button>
    </div>

      </div>
    </div>
  );
}

export default Conatct;
