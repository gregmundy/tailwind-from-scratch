import { ReactComponent as Bookmark } from "../../assets/image-gallery/bookmark.svg";

const Image = ({ image }) => {
  return (
    <div className="relative group">
      <img src={image} alt="gallery item 1" className="w-72" />
      <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
        <div className="flex justify-betwee w-full">
          <div className="font-normal">
            <p className="text-sm">Abstract Painting</p>
            <p className="text-xs">245 Likes - 35 Shares</p>
          </div>
          <div className="flex justify-center">
            <Bookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
