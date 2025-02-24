import React from "react";
import AndroidIcon from "@mui/icons-material/Android";

const Download = () => {
  return (
    <div className="bg-black py-10 sm:py-16 px-4">
      <div
        className="relative flex flex-col items-center text-center md:text-left md:flex-row justify-between bg-cover bg-center px-6 md:px-12 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto rounded-lg"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }} // Replace with actual image
      >
        <div className="max-w-full sm:max-w-2xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Download & Browse Hundreds of Jobs
          </h1>
          <h2 className="mb-6 text-sm sm:text-base text-left leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            It has been the industry standard dummy text ever since an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </h2>

          {/* Download Button */}
          <button className="border border-white text-white flex items-center gap-3 px-5 py-3 rounded-lg hover:bg-[#96BE25] hover:text-white transition duration-300">
            <AndroidIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <span className="text-xs sm:text-sm uppercase block">Get it on</span>
              <span className="text-base sm:text-lg font-bold">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
