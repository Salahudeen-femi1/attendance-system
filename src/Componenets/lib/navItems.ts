import { MdDashboard } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { IoFingerPrintOutline } from "react-icons/io5";
import { PiNotebookFill } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

export const navItems = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        path: "/dashboard/overview"
    },
    {
        name: "Register Staff",
        icon: BiUserPlus,
        path: "/dashboard/registerStaff"
    },
    {
        name: "Fingerprint Enrollment",
        icon: IoFingerPrintOutline,
        path: "/dashboard/fingerprintEnrollment"
    },
    {
        name: "Attendance Records",
        icon: PiNotebookFill,
        path: "/dashboard/attendanceRecords"
    },
    {
        name: "Reports",
        icon: MdBarChart,
        path: "/dashboard/reports"
    },
    {
        name: "Settings",
        icon: IoIosSettings,
        path: "/dashboard/settings"
    }
];