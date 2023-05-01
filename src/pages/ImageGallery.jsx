import { ReactComponent as Search } from "../assets/image-gallery/search.svg";
import Image from '../components/ImageGallery/Image';
import image1 from "../assets/image-gallery/image1.jpg";
import image2 from "../assets/image-gallery/image2.jpg";
import image3 from "../assets/image-gallery/image3.jpg";
import image4 from "../assets/image-gallery/image4.jpg";
import image5 from "../assets/image-gallery/image5.jpg";
import image6 from "../assets/image-gallery/image6.jpg";

const ImageGallery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* Menu Container */}
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* Menu Items */}
          <div className="group">
            <a href="/">Vector</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="/">Illustrations</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="/">Images</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="/">Icons</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>
        {/* Search Container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          <div className="flex justify-between border-b">
            <input
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <button>
              <Search />
            </button>
          </div>
          {/* Upload Button */}
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        {/* Gallery Container */}
        <div className="grid gap-4 md:grid-cols-3">
          <Image image={image1} />
          <Image image={image2} />
          <Image image={image3} />
          <Image image={image4} />
          <Image image={image5} />
          <Image image={image6} />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
