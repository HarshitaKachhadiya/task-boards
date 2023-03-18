import { board } from "../utility/board";
import { AddBtn, DotIcon, File, Link, Msg, Plus } from "./AllSVG";

const Boards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {Array.isArray(board) &&
        board.map((item: any, index: number) => (
          <div className="flex flex-col gap-8 " key={index}>
            <div
              data-aos="fade-right"
              data-aos-delay="900"
              className="flex justify-between items-center gap-4 w-full"
            >
              <div className="flex gap-3">
                <p className="font-semibold">{item.title}</p>
                <div
                  className={`rounded-full ${item.bgColor} w-6 h-6 items-center flex justify-center text-[10px] font-extrabold ${item.color}`}
                >
                  {item.count}
                </div>
              </div>
              <DotIcon />
            </div>
            {Array.isArray(item?.task) &&
              item?.task.map((i: any, idx: number) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay="2500"
                  key={idx}
                  className="bg-[#FFFFFF] rounded-lg shadow-[0px,1px,3px,rgba(96,108,128,0.05)] p-5 gap-3 flex flex-col"
                >
                  <div className="flex justify-between items-start whitespace-normal">
                    <p className="font-semibold text-xs text-[#1F2633]">
                      {i?.name}
                    </p>
                    <div className="flex justify-end items-center gap-2">
                      <File color={i?.fileColor} />
                      <p className={`${i?.file} text-[10px] font-extrabold`}>
                        {i?.fileCount}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {Array.isArray(i?.button) &&
                      i?.button.map((btn: any, btnIdx: number) => (
                        <p
                          key={btnIdx}
                          className={`py-[5px] px-2 ${btn?.bgColor} ${
                            btn?.brdColor ? `border ${btn?.brdColor}` : ""
                          } rounded-2xl text-[8px] font-extrabold ${
                            btn?.color
                          } flex items-center`}
                        >
                          {btn?.name}
                        </p>
                      ))}
                  </div>
                  {i?.avatar && (
                    <div className="flex justify-between items-center">
                      <div className="flex justify-between items-center gap-2">
                        <div className="flex -space-x-3">
                          {Array.isArray(i?.avatar) &&
                            i?.avatar.map((img: any, imgIdx: number) => (
                              <img
                                key={imgIdx}
                                src={img}
                                alt="Avatar"
                                className="h-8 w-8"
                              />
                            ))}
                          {i?.avatar?.length > 1 && (
                            <p className="flex items-center justify-center w-8 h-8 text-xs font-medium text-[#606C80] bg-[#F2F4F7] rounded-full cursor-pointer">
                              +5
                            </p>
                          )}
                        </div>
                        <div className="flex items-center justify-center h-8 w-8 p-[5px] gap-[10px] bg-[#ffffff] border-2 border-dashed border-[#EBEEF2] rounded-[48px]">
                          <AddBtn />
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Link color={i?.linkColor} />
                        <p className={`${i?.link} text-[10px] font-extrabold`}>
                          {i?.linkCount}
                        </p>
                        <Msg color={i?.msgColor} />
                        <p className={`${i?.msg} text-[10px] font-extrabold`}>
                          {i?.msgCount}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            <div
              data-aos="fade-up"
              data-aos-delay="2500"
              className="bg-[#FFFFFF] rounded-lg shadow-[0px,1px,3px,rgba(96,108,128,0.05)] p-[6px] gap-[10px] flex items-center justify-center"
            >
              <Plus />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Boards;
