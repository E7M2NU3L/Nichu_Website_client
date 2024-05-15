import React from 'react';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Computer, Person, Search } from '@mui/icons-material';
import { useSnapshot } from 'valtio';
import ProfileProxy from '../../proxy/ProfileProxy';
import { List } from '@material-tailwind/react';

const Sidebar = () => {
    const ActiveLink = "flex gap-x-[0.5rem] hover:bg-blue-500 font-semibold hover:font-bold text-white transition-all duration-300 ease-in-out";
    const InactiveLink = "flex gap-x-[0.5rem] text-black font-normal";

    const snapshot = useSnapshot(ProfileProxy);
    console.log(snapshot);

    const handleProfile = () => {
        ProfileProxy.profile = true;
        ProfileProxy.Webinars = false;
        ProfileProxy.Courses = false;
    }

    const handleWebinars = () => {
        ProfileProxy.profile = false;
        ProfileProxy.Webinars = true;
        ProfileProxy.Courses = false;
    }

    const handleCourses = () => {
        ProfileProxy.profile = false;
        ProfileProxy.Webinars = false;
        ProfileProxy.Courses = true;
    }

    return (
        <div className='sm:w-1/4 w-[10%] bg-gray-200 min-h-[90vh]'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton className={snapshot.profile ? ActiveLink : InactiveLink} onClick={handleProfile}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Profile" className='text-dark-1 font-semibold hidden sm:block' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton className={snapshot.Courses ? ActiveLink : InactiveLink} onClick={handleCourses}>
                        <ListItemIcon>
                            <Computer />
                        </ListItemIcon>
                        <ListItemText primary="Courses" className='text-dark-1 font-semibold hidden sm:block' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton className={snapshot.Webinars ? ActiveLink : InactiveLink} onClick={handleWebinars}>
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <ListItemText primary="Webinar" className='text-dark-1 font-semibold hidden sm:block' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>
        </div>
    );
}

export default Sidebar;
