import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { MdMedicalInformation } from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";
import { IoMdQrScanner } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function RegisterStaff() {

  const ValidationSchema = Yup.object({
    staff_id: Yup.string()
      .required('Staff Id us required'),
    full_name: Yup.string()
      .required('Full name is required'),
    department: Yup.string()
      .required('Department is required'),
    position: Yup.string()
      .required('Postion is required'),
    email_address: Yup.string()
      .email('Invalid email address')
      .required('Email address is requird'),
    phone_number: Yup.string()
      .required('Phone number is requird')
  })

  const [department, setDepartment] = React.useState(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      staff_id: '',
      full_name: '',
      department: '',
      position: '',
      email_address: '',
      phone_number: ''
    },

    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <div className='flex justify-between gap-6 w-full'>
      <div className='w-2/4'>
        <span>
          <h1 className='font-semibold text-xl '>New Staff Registration</h1>
          <p>Enter staff personal details and enroll their biometric data to register them in the attendance systerm.</p>
        </span>
        <div className='bg-primary/10 border-gray-300 p-3 border w-'>
          <h2>Registration Guidelines</h2>
          <ul>
            <li>Ensure staff ID is unique</li>
            <li>use Official email for notifications.</li>
            <li>Biometric enrollment require 3 successful scans.</li>
          </ul>
        </div>
      </div>

      <div className='bg-white p-3 rounded-lg border-gray-300 flex space-y-10'>
        <form onSubmit={formik.handleSubmit}>
          <span className='flex items-center gap-2 mb-4'>
            <MdMedicalInformation size={20} className='text-primary' />
            <h2 className='font-semibold text-xl'>Personal Information</h2>
          </span>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

            <div className='flex flex-col'>
              <label htmlFor="staff_id">Staff ID</label>
              <input
                type="text"
                id='staff_id'
                name='staff_id'
                placeholder='STF-2023-001'
                value={formik.values.staff_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.staff_id && formik.errors.staff_id
                  ? 'border-red-500'
                  : 'border-[#FBFCFB3]'
                  } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id='full_name'
                name='full_name'
                placeholder='Enter full legal name'
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.full_name && formik.errors.full_name
                  ? 'border-red-500'
                  : 'border-[#FBFCFB3]'
                  } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
              />
            </div>

            <div className="flez flex-col">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id='department'
                name='department'
                placeholder='STF-2023-001'
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.department && formik.errors.department
                  ? 'border-red-500'
                  : 'border-[#FBFCFB3]'
                  } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id='position'
                name='position'
                placeholder='g.g. Senior Developer'
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.position && formik.errors.position
                  ? 'border-red-500'
                  : 'border-[#FBFCFB3]'
                  } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email_address">Email Address</label>
              <input
                type="text"
                id='email_address'
                name='email_address'
                placeholder='email@compant.com'
                value={formik.values.email_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.email_address && formik.errors.email_address
                  ? 'border-red-500'
                  : 'border-[#FBFCFB3]'
                  } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                id='phone_number'
                name='phone_number'
                placeholder='+(155)-000-000'
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-black border-gray-300 bg-backgroundBlack placeholder:text-gray-400 ${formik.touched.phone_number && formik.errors.phone_number
                  ? 'border-red-500'
                  : 'border-[#FBFCFB3]'
                  } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`}
              />
            </div>

          </div>

          <div className='bg-[#cddaf5] rounded-lg p-2 flex items-center justify-between mt-2 gap-4 border-gray-300 border-dashed'>
            <div className='flex items-center gap-2'>
              <span className='bg-white/50 rounded-full p-2 '>
                <IoFingerPrint size={20} className='text-primary' />
              </span>
              <span>
                <h2 className='text-lg font-medium'>
                  Biometric Authentication
                </h2>
                <p className='text-gray-600'>Scan finger on device</p>
              </span>

            </div>

            <button className='px-3 h-10 rounded-lg bg-white font-medium cursor-pointer flex items-center gap-2 mt-3'>
              <span><IoMdQrScanner size={20} className='text-primary' /></span>
              Scan Now
            </button>

          </div>

          <div className='flex justify-end gap-3 mt-5 font-medium'>
            <button className='text-primary cursor-pointer'>Cancel</button>
            <button
              className='bg-primary text-white px-4 py-2 rounded-lg flex gap-2 items-center cursor-pointer'>
              <span><IoCheckmarkSharp size={20} /></span>
              Register Staff
            </button>
          </div>
        </form>
      </div>



    </div>
  )
}
