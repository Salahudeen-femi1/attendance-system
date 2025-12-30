import React from 'react'
import { NavLink } from 'react-router-dom';
import { navItems } from './lib/navItems';

export default function SideBar() {
    // const [activeTab, setActiveTab] = React.useState("Dashboard");

    return (
        <>
        <div className="flex flex-col h-full gap-9">
            <div className='flex gap-1 items-center border-gray-300 border-b'>
                <div className="bg-gray-200 w-10 h-10 rounded-full mx-2 "></div>
                <span>
                    <h2>Alex Margan</h2>
                    <p>System Administrator</p>
                </span>
            </div>

            <ul>
                {
                    navItems.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col space-y-10'>
                                <NavLink
                                    to={item.path}
                                    className={({
                                        isActive,
                                    }) => `flex items-center gap-2 text-black transition-all duration-300 border-0 hover:font-semibold  px-4 py-3 rounded-md cursor-pointer text-xs mt-2 ${isActive
                                        ? " bg-primary text-white font-semibold m-4"
                                        : "text-primary hover:bg-primary/10"
                                    }`}
                                >
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </ul>

        </div>


        </>
    )
}
