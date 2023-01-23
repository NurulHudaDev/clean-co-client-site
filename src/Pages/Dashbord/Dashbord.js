import React from 'react';
import { Outlet } from 'react-router-dom';
import DashbordSidebar from "../../Components/DashbordSidebar";
const Dashbord = () => {
    return (
       <DashbordSidebar>
            <Outlet />
       </DashbordSidebar>
    )
}

export default Dashbord;