import {
  AddBtn,
  BtnIcon,
  BubbleIcon,
  CenterIcon,
  DownArrow,
  Edit,
  EditIcon,
  FileIcon,
  Icon,
  LeftIcon,
  Line,
  LineIcon,
  LockIcon,
  Search,
} from "./AllSVG";

const BoardHeadContent = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="900"
      className="flex flex-col items-start gap-7 w-full"
    >
      {/* Task boards */}
      <div className="xl:flex justify-between !items-center text-center w-full">
        <div className="flex items-center justify-center gap-6">
          <h1 className="font-bold text-[30px] text-[#1F2633]">Task Boards</h1>
          <Edit />
        </div>

        <ul className="flex items-start justify-center flex-wrap lg:gap-6 gap-2">
          <li className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-xs text-[#3B82F6]">Timeline</h1>
              <Line />
            </div>
          </li>
          <li className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-xs text-[#98A2B3]">Calendar</h1>
            </div>
          </li>
          <li className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-xs text-[#98A2B3]">Dashboard</h1>
            </div>
          </li>
          <li className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-xs text-[#98A2B3]">Progress</h1>
            </div>
          </li>
          <li className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-xs text-[#98A2B3]">Forms</h1>
            </div>
          </li>
          <li className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-xs text-[#98A2B3]">More</h1>
            </div>
          </li>
        </ul>

        <div className="flex items-start gap-2 pt-2 justify-center rounded-3xl">
          <div className="flex items-start">
            <img
              className="mx-[-6px]"
              src={require("../../assests/images/Avatar (17).png")}
              alt="Avatar"
            />
            <img
              className="mx-[-6px]"
              src={require("../../assests/images/Avatar (18).png")}
              alt="Avatar"
            />
            <img
              className="mx-[-6px]"
              src={require("../../assests/images/Avatar (19).png")}
              alt="Avatar"
            />
            <img
              className="mx-[-6px]"
              src={require("../../assests/images/Avatar (20).png")}
              alt="Avatar"
            />
            <div className="w-[40px] h-[40px] flex items-center justify-center gap-[10px] bg-[#F2F4F7] rounded-3xl">
              <span className="font-extrabold text-xs text-[#606C80]">+5</span>
            </div>
          </div>

          {/* Add Button */}

          <div className="flex items-center justify-center p-2 gap-[10px] bg-[#ffffff] border-2 border-dashed border-[#EBEEF2] rounded-[48px]">
            <AddBtn />
          </div>
        </div>
      </div>

      {/* Users */}
      <div className="flex flex-col xl:flex-row justify-between gap-3 md:w-full w-auto">
        <div>
          <div className="flex justify-between gap-3 sm:gap-2  xl:gap-4 w-full xl:w-auto 2xl:items-center flex-wrap">
            <div className="flex gap-2">
              <div className="flex items-center drop-shadow-[(0px,1px,3px,rgba(96,108,128,0.05))] whitespace-nowrap">
                <div className="flex items-center justify-center p-2 w-[110px] gap-2 bg-[#FAFBFC] border border-[#EBEEF2] rounded-l-lg">
                  <BtnIcon />
                  <span className="font-bold text-xs text-center text-[#606C80]">
                    Board View
                  </span>
                </div>
                <div className="flex items-center justify-center p-2 w-[110px] gap-2 bg-[#ffffff] border border-[#EBEEF2] rounded-r-lg border-l-0">
                  <Icon />
                  <span className="font-bold text-xs text-center text-[#606C80]">
                    List View
                  </span>
                </div>
              </div>
            </div>
            <LineIcon />

            <div className="flex justify-center items-center gap-2">
              <div className="flex items-center gap-2">
                <LockIcon />
                <p className="font-bold text-[11px] text-[#98A2B3]">
                  Limited Access
                </p>
                <DownArrow />
              </div>
            </div>
            <LineIcon />

            <div className="flex justify-start items-center  gap-2 whitespace-nowrap">
              <p className="font-bold text-[11px] text-[#98A2B3]">Owners</p>
              <img
                src={require("../../assests/images/twitter.png")}
                loading="lazy"
                alt="twitter"
              />

              <p className="font-bold text-[11px] text-[#606C80]">
                Twitter Team
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-[10px] h-[40px] bg-[#ffffff] max-w-[340px] md:w-auto rounded-lg">
          <Search />
          <input
            className="text-xs text-[#98A2B3] font-bold outline-none w-[151px]"
            type="text"
            placeholder="Search Tasks"
          />
        </div>

        <div className="flex items-start gap-2">
          <div className="w-9 h-9 bg-[#FFFFFF] border border-[#EBEEF2] rounded-lg flex justify-center items-center">
            <FileIcon />
          </div>

          <div className="w-9 h-9 bg-[#FFFFFF] border border-[#EBEEF2] rounded-lg flex justify-center items-center">
            <CenterIcon />
          </div>

          <div className="w-9 h-9 bg-[#FFFFFF] border border-[#EBEEF2] rounded-lg flex justify-center items-center">
            <LeftIcon />
          </div>

          <div className="w-9 h-9 bg-[#FFFFFF] border border-[#EBEEF2] rounded-lg flex justify-center items-center">
            <BubbleIcon />
          </div>

          <div className="w-9 h-9 bg-[#FFFFFF] border border-[#EBEEF2] rounded-lg flex justify-center items-center">
            <EditIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeadContent;
