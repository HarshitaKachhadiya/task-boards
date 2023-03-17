import Content from "../shared/components/Content";
import EndSidebar from "../shared/components/EndSidebar";
import Sidebar from "../shared/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#F7F8FA] flex">
        <Sidebar />
        <Content />
        <EndSidebar />
    </div>
  );
};

export default Dashboard;