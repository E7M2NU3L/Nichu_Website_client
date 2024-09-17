import React from 'react';
import { Computer, Person, Search } from '@mui/icons-material'; // You can use Heroicons if you want to remove MUI icons too.
import { useSnapshot } from 'valtio';
import ProfileProxy from '../../proxy/ProfileProxy';

const Sidebar = () => {
    const ActiveLink = "flex items-center gap-2 py-3 px-4 font-semibold text-black w-full bg-gray-300 rounded-md hover:bg-gray-400 transition-all duration-300 ease-in-out";
    const InactiveLink = "flex items-center gap-2 py-3 px-4 font-normal text-gray-600 w-full rounded-md hover:bg-gray-200 transition-all duration-300 ease-in-out";

    const snapshot = useSnapshot(ProfileProxy);

    const handleProfile = () => {
        ProfileProxy.profile = true;
        ProfileProxy.Webinars = false;
        ProfileProxy.Courses = false;
    };

    const handleWebinars = () => {
        ProfileProxy.profile = false;
        ProfileProxy.Webinars = true;
        ProfileProxy.Courses = false;
    };

    const handleCourses = () => {
        ProfileProxy.profile = false;
        ProfileProxy.Webinars = false;
        ProfileProxy.Courses = true;
    };

    return (
        <div className='relative w-full bg-gray-100 min-h-[90vh] p-4 shadow-lg'>
            <ul className='space-y-2'>
                <li>
                    <button 
                        className={snapshot.profile ? ActiveLink : InactiveLink} 
                        onClick={handleProfile}
                    >
                        <Person className='text-xl' />
                        <span className='hidden sm:inline'>Profile</span>
                    </button>
                </li>
                <li>
                    <button 
                        className={snapshot.Courses ? ActiveLink : InactiveLink} 
                        onClick={handleCourses}
                    >
                        <Computer className='text-xl' />
                        <span className='hidden sm:inline'>Courses</span>
                    </button>
                </li>
                <li>
                    <button 
                        className={snapshot.Webinars ? ActiveLink : InactiveLink} 
                        onClick={handleWebinars}
                    >
                        <Search className='text-xl' />
                        <span className='hidden sm:inline'>Webinars</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
