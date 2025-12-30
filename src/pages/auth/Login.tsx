import React from 'react'
import { IoFingerPrint } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { assets } from '../../assets/assets';

export default function Login() {

    const validationSchema = Yup.object({
        username: Yup.string()
            .required('username is required'),
        password: Yup.string()
            .required("Password is required")
            .min(9, 'Password must be at least 9 characters')
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <>
            <div className=' bg-[#f0f3f9] h-screen w-full '>
                <div className='flex justify-between p-5'>
                    <div className='flex items-center gap-2 text-lg font-semibold mb-'>
                        <span className='bg-[#cddaf5] rounded-md p-2 '>
                            <IoFingerPrint size={20} className='text-primary' />
                        </span>
                        <span>StaffSystem</span>
                    </div>
                    <div className='flex items-center gap-2 text-lg font-semibold mb- text-primary'>
                        <span><MdContactSupport size={20} /></span>
                        <span>Help/Support</span>
                    </div>
                </div>

                <div className='flex gap-6 w- rounded-lg m-auto justify-center items-center '>
                    <div className='flex flex-col '>
                        <span>
                            <div className='flex items-center justify-center p-1 bg-[#cddaf5] rounded-2xl w-[200px] text-[15px] gap-2 text-primary font-semibold mb-2'>
                                <span><SiAdguard size={15} /></span>
                                <span>Secure Access Portal</span>
                            </div>

                            <h1 className="text-3xl font-bold text-primary text-[30px]">
                                Automated Staff <br /> Attendance System
                            </h1>
                            <p className="text-gray-600 mt-2 ">
                                Securely log your attendance <br /> with biometric verification.
                            </p>
                        </span>
                        <span>
                            <div className='mt-5'>
                                <img src={assets.glow} alt="" className='w-65 h-45 rounded-lg' />

                            </div>
                        </span>
                    </div>
                    <div>
                        <div className='bg-white rounded-lg p-4 h-'>
                            <h1 className='text-2xl font-semibold'>
                                Welcome Back
                            </h1>
                            <p className='text-gray-600'>
                                Please authenticate to access your dashboard.
                            </p>

                            <div className='bg-[#cddaf5] rounded-lg p-2 flex items-center justify-between mt-2 gap-4'>
                                <span className='bg-white/50 rounded-full p-2 '>
                                    <IoFingerPrint size={20} className='text-primary' />
                                </span>
                                <span>

                                    <h2 className='text-lg font-medium'>
                                        Biometric Authentication
                                    </h2>
                                    <p className='text-gray-600'>Scan finger on device</p>
                                </span>

                                <button className='px-3 h-10 rounded-lg bg-primary text-white font-medium cursor-pointer'>
                                    Scan Now
                                </button>

                            </div>

                            {/* Divider */}
                            <div className="flex items-center w-full mt-5 ">
                                <div className="grow border-t border-gray-300"></div>
                                <span className="mx-2 text-gray-600 font-medium text-sm">OR LOGIN WITH ID</span>
                                <div className="grow border-t border-gray-300  "></div>
                            </div>

                            <form className='flex flex-col space-y-3' onSubmit={formik.handleSubmit}>
                                <div className="flex flex-col">
                                    <label htmlFor="username" className="font-semibold">Username</label>
                                    <input
                                        type="username"
                                        id="username"
                                        name="username"
                                        placeholder="Enter username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.username && formik.errors.username
                                            ? 'border-red-500'
                                            : 'border-[#FBFCFB3]'
                                            } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
                                    />

                                </div>
                                <div className="flex flex-col space-y-">
                                    <label htmlFor="password" className="font-semibold">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.password && formik.errors.password
                                            ? 'border-red-500'
                                            : 'border-[#FBFCFB3]'
                                            } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
                                    />

                                    <button className="text-primary font-medium mt- flex justify-end cursor-pointer hover:underline">Forgotten Password?</button>

                                </div>

                                <button
                                    type="submit"
                                    className="px-4 h-10 bg-primary text-white font-meduium rounded-md focus:outline-none cursor-pointer mt-1"
                                >
                                    Login to system
                                </button>

                                <p className='text-center text-gray-600 text'>
                                    By accessing this system, you agree to the internal <br /> <button className='underline hover:text-primary cursor-pointer '>privacy policy</button> regarding biometric data usage.
                                </p>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
