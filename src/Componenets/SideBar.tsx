import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBar() {
    const [activeTab, setActiveTab] = React.useState("Dashboard");

    return (
        <>
            <div className=' border border-b-1 border-gray-300'>
                <div className='flex gap-1'>
                    <div className="bg-gray-200 w-16 h-16 rounded-full mx-auto mb-2"></div>
                    <span>
                        <h2>Alex Margan</h2>
                        <p>System Administrator</p>
                    </span>
                </div>
            </div>

            <div className='mt-10 flex flex-col gap-5'>
                <Link to="/dashboard/overview" onClick={() => setActiveTab("Dashboard")}>
                    <div className={`p-3 rounded-lg hover:bg-gray-200 cursor-pointer ${activeTab === "Dashboard" ? "bg-primary" : ""}`}>
                        Dashboard
                    </div>
                </Link> 
                <Link to="/registerStaff" onClick={() => setActiveTab("Register Staff")}>
                    <div className={`p-3 rounded-lg hover:bg-gray-200 cursor-pointer ${activeTab === "Register Staff" ? "bg-primary" : ""}`}>
                        Register Staff
                    </div>
                </Link> 
            </div>
        </>
    )
}
