import { songData } from "../api/songs";
const MusicBar = ({ AudioInstance }) => {
  return (
    <>
      <div className="flex flex-col p-5">
        <div className="border-b pb-1 flex justify-between items-center mb-2">
          <span className=" text-base font-semibold uppercase text-gray-700">
            {" "}
            play list
          </span>
          <img
            alt="filter"
            className="w-4 cursor-pointer"
            src={
              "https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png"
            }
          />
        </div>
        {songData.map((item, idx) => {
          return (
            <div onClick={() => AudioInstance.playByIndex(idx)} key={item.name}>
              <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
                <img
                  className="w-10 h-10 object-cover rounded-lg"
                  alt={item.name}
                  src={item.cover}
                />
                <div className="flex flex-col px-2 w-full">
                  <span className="text-sm text-red-500 capitalize font-semibold pt-1">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500 uppercase font-medium ">
                    -{item.singer}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MusicBar;
