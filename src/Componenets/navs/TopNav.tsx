import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { BsQuestionCircleFill } from "react-icons/bs";

export default function TopNav() {

  const [searchQuery, setSearchQuery] = React.useState("");
  // const [isPopupVisible, setIsPopupVisible] = React.useState(false);

  return (
    <div>
      <div className="relative w-1/2 bg-white">
        <label
          htmlFor="searchBox"
          className="border border-primary/10 rounded-lg bg-secondary md:flex hidden gap-2 items-center h-[45px] w-full px-2"
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

        <div className='flex gap-3'>
          <span className='bg-gray-300 p-2 rounded-full '>
            <BsBellFill size={20}  className='text-primary '/>
          </span>
          <span>
            <BsQuestionCircleFill size={20}  className='text-primary ' />
          </span>
        </div>
      </div>


    </div>
  )
}
