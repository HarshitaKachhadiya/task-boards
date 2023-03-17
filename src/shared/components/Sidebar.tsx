import { menu } from "../utility/menu";
import { Menu, UnFoldMore } from "./AllSVG";
import Menubar from "./Menubar";

const Sidebar = () => {
  return (
    // Sidebar

    <div className="w-[302px] border-r border-brdColor">

        {/* Head */}

        <div className="h-[88px] flex flex-row justify-between items-center py-[30px] px-[32px] border-b border-brdColor">
            <h4 className="font-bold text-xl text-textColor">Dashboard</h4>
            <Menu />
        </div>

        {/* Content */}
        
        <div className="flex flex-col items-start p-8 gap-9">

            {/* User */}

            <div className="flex flex-row justify-between pb-8 gap-[53px] border-b border-brdColor">
              <div className="flex flex-row items-start p-0 gap-6">
                 <img src={require("../../assests/images/Profile.png")} loading="lazy" alt="Avtar" />
                 <div className="flex flex-col items-start gap-1">
                   <h5 className="font-bold text-xs text-textColor">Nancy Martino</h5>
                   <p className="font-bold text-[11px] text-textSecondary">Designer</p>
                 </div>
              </div>
              <UnFoldMore />
            </div>

            {/* Menu */}

            <Menubar menu={menu[0]} />
            <Menubar menu={menu[1]} />
        </div>
    </div>
  );
};

export default Sidebar;