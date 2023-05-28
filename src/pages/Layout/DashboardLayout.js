import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const DashboardLayout = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://tourism-website-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
  return (
    <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Bookings</Link></li>
                        {
                             <>
                              <li><Link to="/dashboard/allusers">All users</Link></li>
                               <li><Link to="/dashboard/addtour">Add Tour</Link></li>
                               <li><Link to="/dashboard/managetour">ManageTour</Link></li>
                             
                             </>
                              
                           
                        }

                    </ul>

                </div>
            </div>
        </div>
  );
};

export default DashboardLayout;
