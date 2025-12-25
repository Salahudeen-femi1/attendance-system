import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function TopNav() {
  return (
    <div>
      <div className="relative w-1/2">
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
              onFocus={() => searchQuery && setIsPopupVisible(true)}
              className="border-0 outline-0 h-full w-full text-sm bg-secondary"
              placeholder="Search activities, clients, and more"
              autoComplete="off"
            />
          </label>
        </div>
    </div>
  )
}
