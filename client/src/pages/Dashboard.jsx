import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      {/* sidebar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* profile */}
      {/* <div className="w-full text-center "> */}
      {/* <div> */}
        {tab === "profile" && <DashProfile />}
        {/* </div> */}
      {/* <div className="m-4"> */}
        {tab === "comments" && <DashComments />}
        {tab === "posts" && <DashPosts />}
        {tab === "users" && <DashUsers/>}
        {tab === "dash" && <DashboardComp />}
        {/* </div> */}

      {/* </div>  */}
    </div>
  );
}



