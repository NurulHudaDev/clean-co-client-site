import React from 'react';
import { NavLink } from 'react-router-dom';

const DashbordSidebar = ({children}) => {

    return (
        <div class="drawer drawer-mobile mt-20 bg-accent">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col justify-center items-center">
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><NavLink to='/dashbord/add-service' >Add Service</NavLink></li>
                    <li><NavLink to='/dashbord/add-admin' >Add Admin</NavLink></li>

                </ul>
            </div>
        </div>

        
    )
}

export default DashbordSidebar;