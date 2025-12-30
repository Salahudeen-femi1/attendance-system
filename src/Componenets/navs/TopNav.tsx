import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { BsQuestionCircleFill } from "react-icons/bs";

export default function TopNav() {

  const [searchQuery, setSearchQuery] = React.useState("");
  // const [isPopupVisible, setIsPopupVisible] = React.useState(false);

  return (
    <div className='w-full flex justify-end items-center gap-3 items-center h-12'>
      <div className="relativ w- bg-white flex justify-end items-center">
        <label
          htmlFor="searchBox"
          className="border border-primary/10 rounded-lg md:flex hidden gap-2 items-center h-[30px] w-full px-2"
        >
          <IoSearchOutline size={20} />
          <input
            type="text"
            id="searchBox"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // onFocus={() => searchQuery && setIsPopupVisible(true)}
            className="border-0 outline-0 h-full w-full text-sm bg-secondary"
            placeholder="Search records"
            autoComplete="off"
          />
        </label>
      </div>

       <div className='flex gap-3'>
          <span className='bg-gray-300 w-9 h-9 p-2 rounded-full flex justify-center items-center'>
            <BsBellFill size={18} />
          </span>
          <span className='bg-gray-300 w-9 h-9 p-2 rounded-full flex justify-center items-center'>
            <BsQuestionCircleFill size={18}  />
          </span>
        </div>


    </div>
  )
}
