import { users } from "../utility/users"
import { Close, RightArrow } from "./AllSVG"

const EndSidebar = () => {
  return (
    // End Sidebar

    <div className='w-[88px] flex flex-col justify-between items-center gap-[168px] border-l border-brdColor'>

        {/* Top */}

        <div className="w-[88px] h-[87px] flex flex-row justify-center items-center gap-[10px] border-b border-brdColor">
          <Close />
        </div>

        {/* Users */}

        <div className="flex flex-col items-start gap-4">
            {Array.isArray(users) && users.map((i: any, index: number) => (
                <img key={index} src={i} loading="lazy" alt="users" />
            ))}
        </div>

        {/* Button */}
 
        <div className="w-[88px] h-[87px] flex flex-row justify-center items-center gap-[10px] border-t border-brdColor">
          <RightArrow />
        </div>
    </div>
  )
}

export default EndSidebar