import { Folder, Notification, Search, Vector, Voice } from "./AllSVG";

const HeadContent = () => {
  return (
    <div className="h-[88px] flex flex-row justify-between items-center py-[20px] px-9 gap-[162px] border-b border-brdColor">
        {/* Left Items */}

        <div className="flex flex-row items-center gap-8 w-[320px] h-[48px]">
          <div className="flex flex-col items-start gap-[12px] rounded-lg">
            <div className="flex flex-row items-center justify-between h-[48px] px-4 bg-[#ffffff] shadow-[0px,1px3px,rgba(96,108,128,0.05)] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <Search />
                <input
                  className="text-xs pt-[3px] text-[#98A2B3] font-bold outline-none"
                  type="text"
                  placeholder="Search Tasks"
                />
              </div>
              <Vector />
            </div>
          </div>
          <Voice />
        </div>

        {/* Menu */}
        
        <ul className="flex flex-row items-start gap-8 font-bold text-[11px] text-[#7A8699]">
            <li className="text-[#323C4D]">Dashboard</li>
            <li>My Tasks</li>
            <li>My Tasks</li>
            <li>Reporting</li>
            <li>Portfolios</li>
            <li>Goals</li>
        </ul>

        {/* Right Items */}

        <div className="flex flex-row items-center gap-4">
           <Folder />
           <Notification />
           <img src={require("../../assests/images/Avatar (16).png")} loading="lazy" alt="Avatar" />
        </div>
      </div>
  );
};

export default HeadContent;