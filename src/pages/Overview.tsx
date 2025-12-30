import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosRefresh } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import Chart from '../Componenets/charts/Chart.tsx';

export default function Overview() {

  const overview = [
    {
      title: 'Total Staff',
      value: 124,
      icon: FaUsers,
      status: 'default',
      comment: '+2 this month'
    },
    {
      title: 'Present Today',
      value: 98,
      icon: IoIosCheckmarkCircle,
      status: 'success',
      comment: '79% Attendance Rate'
    },
    {
      title: 'Absent Today',
      value: 12,
      icon: VscError,
      status: 'error',
      comment: '3 Authorize Leaves'
    },
    {
      title: 'Late Arrivals',
      value: 14,
      icon: IoTime,
      status: 'pending',
      comment: 'Avg Delay: 12 mins'
    },
  ]

  const recentScans = [
    {
      id: 1,
      name: 'John Doe',
      time: '08:15 AM'
    },
    {
      id: 2,
      name: 'John Doe',
      time: '08:15 AM'
    },
    {
      id: 3,
      name: 'John Doe',
      time: '08:15 AM'
    },
    {
      id: 4,
      name: 'John Doe',
      time: '08:15 AM'
    },
  ]

  const statusColors: { [key: string]: string } = {
    default: 'text-primary bg-primary/10 rounded-lg p-2',
    success: 'text-green-500 bg-green-100 rounded-lg p-2',
    error: 'bg-red-100 text-red-500 rounded-lg p-2',
    pending: 'text-yellow-500 bg-yellow-100 rounded-lg p-2',
  };

  return (
    <>
      <div>
        <h1 className='font-bold text-2xl '>Dashboard Overview</h1>
        <div className="flex-col space-y-3 font-medium lg:flex-row md:flex justify-between items-center">
          <p className='text-primary font- '> Welcome back, Azeez, Here is today's attendance summary</p>

          <div className='flex gap-2'>
            <button className='flex gap-2 rounded-lg font-medium px-4 h-9 border border-gray-200 items-center justify-center bg-white text-gray-700'>
              <span><MdOutlineFileDownload size={20} /></span>
              Export Report
            </button>
            <button className='flex gap-2 rounded-lg font-medium px-4 h-9 border-gray-200 bg-primary text-white items-center justify-center'>
              <span><IoIosRefresh size={20} /></span>
              Refresh Data
            </button>

          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {overview.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-500 text-sm">{item.title}</h3>
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.comment}</p>
                </div>
                <div className={statusColors[item.status] || statusColors.default}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mt-6 w-full">

        {/* LEFT – Chart */}
        <div className="bg-white p-4 lg:p-3 rounded-lg border w-auto h-auto border-gray-300 ">
          <h2 className="font-semibold text-xl">Weekly Attendance Trends</h2>
          <p className="text-gray-500 mb-4">
            Comparison of present staff over the last 7 days
          </p>

          <Chart />
        </div>

        {/* RIGHT – Recent Scans */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 relative pb-20">
          <div className="flex justify-between items-center border-b border-gray-300 p-3 mb-3">
            <h3 className="font-semibold text-lg">Recent Scans</h3>
            <button className="text-primary text-sm">View All</button>
          </div>

          <div className="flex justify-between items-center bg-primary/10 p-3 text-primary font-medium">
            <p>STAFF</p>
            <p>TIME</p>
          </div>

          <div className="space-y-3  overflow-y-auto max-h-64">
            {recentScans.map((scan) => (
              <div
                key={scan.id}
                className="flex justify-between items-center mb-1 p-3 hover:bg-primary/10"
              >
                <p className="font-medium">{scan.name}</p>
                <p className="text-primary">{scan.time}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 border-t border-gray-300 flex items-center justify-center absolute bottom-0 left-0 z-50 w-full py-4 text-primary">
            <p>Real-time updates enabled</p>
          </div>
        </div>


      </div>

    </>
  )
}
