import React from "react";

const Companies = () => {
  return (
    <div>
      <div className="w-7/12 mx-auto py-20">
        <h4 className="font-bold text-xl py-2">Companies Profile</h4>
        <p>
          In this era of mass production, as it is very hard to stand out with
          one product, Akij Group focuses on making the best in all sectors.
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-5 gap-5 ">
          <div className="hover:scale-120 duration-700 cursor-pointer">
            <div className="bg-white p-10 h-45 w-47 shadow-2xl rounded ">
              <img
                className="mx-auto h-25 w-30 m-0"
                src="/src/assets/images/companies6.png"
                alt=""
              />
            </div>
            <p className="font-bold mt-3">Akij Ibos</p>
          </div>
         <div className="hover:scale-120 duration-700 cursor-pointer">
            <div className="bg-white p-10 h-45 w-47 shadow-2xl rounded">
              <img
                className="mx-auto h-25 w-30 m-0"
                src="/src/assets/images/companies2.svg"
                alt=""
              />
            </div>
            <p className="font-bold mt-3">Akij TextTile</p>
          </div>
         <div className="hover:scale-120 duration-700 cursor-pointer">
            <div className="bg-white p-10 h-45 w-47 shadow-2xl rounded">
              <img
                className="mx-auto h-25 w-30 m-0"
                src="/src/assets/images/companies1.svg"
                alt=""
              />
            </div>
            <p className="font-bold mt-3">Akij PolyFibre</p>
          </div>
         <div className="hover:scale-120 duration-700 cursor-pointer">
            <div className="bg-white p-10 h-45 w-47 shadow-2xl rounded">
              <img
                className="mx-auto h-25 w-30 m-0"
                src="/src/assets/images/companies7.svg"
                alt=""
              />
            </div>
            <p className="font-bold mt-3">Akij Cement</p>
          </div>
          
          
         
          <div className="hover:scale-120 duration-700 cursor-pointer">
            <div className="bg-white p-10 h-45 w-47 shadow-2xl rounded">
              <img
                className="mx-auto h-25 w-30 m-0"
                src="/src/assets/images/companies8.svg"
                alt=""
              />
            </div>
            <p className="font-bold mt-3">Akij Ceramics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
