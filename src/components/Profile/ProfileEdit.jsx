import React from 'react';
import {
    Card,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { BuildOutlined, ChildCare, Functions, Person } from "@mui/icons-material";
import { Divider } from '@mui/material';

// ProfessionStates array
const ProfessionStates = [
    {
        value: "Student",
        label: <ChildCare />
    },
    {
        value: "Teacher",
        label: <Person />
    },
    {
        value: "Industrial Expert",
        label: <BuildOutlined />
    },
    {
        value: "Preferred not to say",
        label: <Functions />
    }
]

const ProfileDisplay = () => {
    // Placeholder profile data
    const profile = {
        firstName: 'John',
        lastName: 'Doe',
        Description: 'A passionate teacher with years of experience in education.',
        Phone: '+1234567890',
        Qual: 'M.Ed. in Education',
        profession: 'Teacher'
    };

    // Find label for profession
    const professionLabel = ProfessionStates.find(prof => prof.value === profile.profession)?.label;

    return (
        <div className='flex justify-center items-center w-full px-4' style={{
            minHeight: "90vh", height: "100%", paddingTop: "2rem", paddingBottom: "2rem"
        }}>
            <Card color="transparent" className='w-full max-w-md bg-gray-200 shadow-lg shadow-gray-400 p-6'>
                <Typography variant="h4" color="blue-gray" className="text-center mb-4">
                    Profile Information
                </Typography>
                
                <Divider />

                <div className="mt-6 space-y-4">
                    {/* First Name */}
                    <div className="flex justify-between">
                        <Typography variant="h6" color="blue-gray">
                            First Name:
                        </Typography>
                        <Typography variant="body1" color="gray">
                            {profile.firstName}
                        </Typography>
                    </div>

                    {/* Last Name */}
                    <div className="flex justify-between">
                        <Typography variant="h6" color="blue-gray">
                            Last Name:
                        </Typography>
                        <Typography variant="body1" color="gray">
                            {profile.lastName}
                        </Typography>
                    </div>

                    {/* Bio */}
                    <div className="flex justify-between">
                        <Typography variant="h6" color="blue-gray">
                            Bio:
                        </Typography>
                        <Typography variant="body1" color="gray">
                            {profile.Description}
                        </Typography>
                    </div>

                    {/* Phone */}
                    <div className="flex justify-between">
                        <Typography variant="h6" color="blue-gray">
                            Phone:
                        </Typography>
                        <Typography variant="body1" color="gray">
                            {profile.Phone}
                        </Typography>
                    </div>

                    {/* Qualification */}
                    <div className="flex justify-between">
                        <Typography variant="h6" color="blue-gray">
                            Qualification:
                        </Typography>
                        <Typography variant="body1" color="gray">
                            {profile.Qual}
                        </Typography>
                    </div>

                    {/* Profession */}
                    <div className="flex justify-between">
                        <Typography variant="h6" color="blue-gray">
                            Profession:
                        </Typography>
                        <div className="flex items-center gap-2">
                            {professionLabel}
                            <Typography variant="body1" color="gray">
                                {profile.profession}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ProfileDisplay;
