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
    <div className="flex flex-col items-start p-9 gap-[44px]">
      {/* Head */}

      <div className="flex flex-col items-start gap-7">
        {/* Heading */}

        <div className="flex flex-row justify-between items-center gap-48">
          {/* Left */}

          <div className="flex flex-row items-center gap-6">
            <h1 className="font-bold text-[30px] text-[#1F2633]">
              Task Boards
            </h1>
            <Edit />
          </div>

          {/* Tabs */}

          <ul className="flex flex-row items-start gap-6">
            <li className="flex flex-row items-start gap-16">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-xs text-[#3B82F6]">Timeline</h1>
                <Line />
              </div>
            </li>
            <li className="flex flex-row items-start gap-16">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-xs text-[#98A2B3]">Calendar</h1>
              </div>
            </li>
            <li className="flex flex-row items-start gap-16">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-xs text-[#98A2B3]">Dashboard</h1>
              </div>
            </li>
            <li className="flex flex-row items-start gap-16">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-xs text-[#98A2B3]">Progress</h1>
              </div>
            </li>
            <li className="flex flex-row items-start gap-16">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-xs text-[#98A2B3]">Forms</h1>
              </div>
            </li>
            <li className="flex flex-row items-start gap-16">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-xs text-[#98A2B3]">More</h1>
              </div>
            </li>
          </ul>

          {/* Avatar Group */}

          <div className="flex flex-row items-start gap-2 rounded-3xl">
            {/* Avatars */}
            <div className="flex flex-row items-start">
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
              <div className="w-[40px] h-[40px] flex flex-row items-center justify-center gap-[10px] bg-[#F2F4F7] rounded-3xl">
                <span className="font-extrabold text-xs text-[#606C80]">
                  +5
                </span>
              </div>
            </div>

            {/* Add Button */}

            <div className="flex flex-row items-center justify-center p-2 gap-[10px] bg-[#ffffff] border-2 border-dashed border-[#EBEEF2] rounded-[48px]">
              <AddBtn />
            </div>
          </div>
        </div>

        {/* Users */}

        <div className="flex flex-row justify-center gap-9">
          {/* Left Items */}

          <div className="flex flex-row items-center gap-4">
            {/* Group Button */}

            <div className="flex flex-row items-center drop-shadow-[(0px,1px,3px,rgba(96,108,128,0.05))]">
              <button className="flex flex-row items-center justify-center py-[15px] px-[16px] gap-2 bg-[#FAFBFC] border border-[#EBEEF2] rounded-l-lg">
                <BtnIcon />{" "}
                <span className="font-bold text-xs pt-1 text-center text-[#606C80]">
                  Board View
                </span>
              </button>
              <button className="flex flex-row items-center justify-center py-[15px] px-[16px] gap-2 bg-[#ffffff] border border-[#EBEEF2] rounded-r-lg border-l-0s">
                <Icon />{" "}
                <span className="font-bold text-xs pt-1 text-center text-[#606C80]">
                  List View
                </span>
              </button>
            </div>

            <LineIcon />

            <div className="flex flex-row items-center gap-2">
              <LockIcon />
              <p className="font-bold text-[11px] text-[#98A2B3]">
                Limited Access
              </p>
              <DownArrow />
            </div>

            <LineIcon />

            <div className="flex flex-row items-center gap-4">
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

          {/* Default Input */}

          <div className="flex flex-col items-center justify-center gap-[12px] rounded-lg">
            <div className="flex flex-row items-center px-[12px] h-[40px] bg-[#ffffff] shadow-[0px,1px,3px,rgba(96,108,128,0.05)] rounded-lg self-stretch">
              <div className="flex flex-row items-center gap-2">
                <Search />
                <input
                  className="text-xs pt-[3px] text-[#98A2B3] font-bold outline-none"
                  type="text"
                  placeholder="Search Tasks"
                />
              </div>
            </div>
          </div>

          {/* Right Items */}

          <div className="flex flex-row items-start gap-2">
            <FileIcon />
            <CenterIcon />
            <LeftIcon />
            <BubbleIcon />
            <EditIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeadContent;
