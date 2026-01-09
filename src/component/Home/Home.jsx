import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import AboutSection from "../AboutSection/AboutSection";
import Companies from "../Companies/Companies";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div className="bg-white text-black">
      <div className="w-11/12 mx-auto ">
      <div className="flex justify-between items-center  p-2 bg-gray-50  ">
        {/* left div  */}
        <div className="left-div flex gap-5 items-center">
          Follow Us
          <div className="flex items-center gap-2">
            <FaFacebookF color="blue" />
            <FaTwitter color="blue" />
            <CiInstagram color="blue" />
            <ImLinkedin color="blue" />
          </div>
        </div>
        {/* right div  */}
        <div className="right-div">
          <div className="flex items-center gap-3">
            <TfiEmail  color="blue"/>
            Web Mail
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 mb-5">
        {/* left div  */}
        <div className="flex items-center gap-2 ">
          <img className="h-10 " src="/src/assets/images/logo.png" alt="" />
          <h1 className="text-2xl">Akij Group</h1>
        </div>
        {/* right div  */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="border border-gray-300 rounded-full p-3 shadow-xl">
              {" "}
              <IoCall color="blue"/>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">Toll Free: 08000016609</p>
              <p className="font-bold text-sm ">Hot Line:16609</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-gray-200 rounded-full p-3 shadow-xl">
              <TfiEmail color="blue"/>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">Toll Free: 08000016609</p>
              <p className="font-bold text-sm ">Hot Line:16609</p>
            </div>
          </div>
          <div >
            <div className="w-40 h-10 relative "><p className="border-t-3 border-blue-600 absolute -top-20 -left-16  border-l-3  w-15 h-8 m-20"></p><p className="font-bold text-sm">"Quality First" </p>SK- AKIJ UDDIN <p className="border-r border-b-blue-600 border-r-blue-600 -3 w-15 h-8 top-5 right-4 absolute border-b-3"></p></div>
          </div>
        </div>
      </div>
    </div>
 <Header/>
    <Banner></Banner>
    <AboutSection></AboutSection>
    <Companies></Companies>
    <div className="flex items-center justify-between px-10 gap-5 py-20">
        <div className="w-[50%]">
          <p className="text-left" >Akij Group</p>
          <p className="font-bold text-xl mt-4 text-left">The Strategies</p>
          <p className="text-left">Since then it has been progressing with tremendous pace in the industrial area of Bangladesh. A large number of people are employed by the group and cared for as members of the Akij family. The non-profit concerns are also involved in sustaining development of the country & for social welfare.</p>
        </div>
        <div className="w-[50%]">
          <img src="/src/assets/images/charmen.png" alt="" />
        </div>
    </div>
    <Product></Product>
    <div className=" relative">
        <div>
          <img className="h-80 w-full  " src="/src/assets/images/banner2.jpg" alt="" />
        </div>
        <div className="w-7/12 mx-auto absolute top-25 left-55">
        <p className="font-bold text-xl text-white">Subscribe to Newsletter</p>
        <p className="mb-5 text-white">Subscribe for the latest newsletters, achievements, news and events.</p>
        <form>
          <input className=" rounded-2xl px-5 py-1 bg-white" type="text" placeholder="Type Name" />
          <input className=" rounded-2xl mx-5 px-5 py-1 bg-white" type="text" placeholder="Type Email" />
          <input className=" rounded px-5 py-1 text-white bg-blue-700" type="submit" value="Submit" placeholder="Type Email" />
          
        </form>
        </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
