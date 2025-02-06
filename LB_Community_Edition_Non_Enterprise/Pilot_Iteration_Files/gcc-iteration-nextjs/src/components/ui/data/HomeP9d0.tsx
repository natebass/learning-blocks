import backpack from '@/assets/icon/backpack.svg'
import deviceDesktop from '@/assets/icon/device-desktop.svg'
import teacher from '@/assets/icon/teacher.svg'
import lb_text from '@/assets/logo/lb_black.svg'
import { Link } from '@tanstack/react-router'

/**
 * HomeP9d0 component for rendering the Learning Blocks welcome page.
 * This component displays a logo, welcome message, and role selection buttons.
 */
export default function HomeP9d0() {
  return (
    <div className="container mx-auto my-12 flex max-w-screen-xl justify-center md:px-6 xl:px-8">
      <div className="flex flex-col gap-12">
        <img src={lb_text} className="h-20" alt="Learning Blocks Logo" />
        <h1 className="text-center text-5xl font-bold">
          Welcome to Learning Blocks
        </h1>
        <p className="text-center text-2xl font-semibold">
          Please select your role to proceed with the login.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg font-bold text-white">
          <Link
            to="/d"
            className="btn btn-primary flex w-60 items-center justify-center gap-2 bg-[#003049] p-6"
          >
            <img src={deviceDesktop} alt="Admin / Staff" />
            Admin/Staff
          </Link>
          <Link
            to="/t"
            className="btn btn-primary flex w-60 items-center justify-center gap-2 bg-[#003049] p-6"
          >
            <img src={teacher} alt="Teacher" />
            Teacher
          </Link>
          <Link
            to="/s"
            className="btn btn-primary flex w-60 items-center justify-center gap-2 bg-[#003049] p-6"
          >
            <img src={backpack} alt="Parent / Student" />
            Parent/Student
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <span className="mr-3 text-lg font-bold dark:text-gray-300">
            Demo mode
          </span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          </label>
        </div>
      </div>
    </div>
  )
}
