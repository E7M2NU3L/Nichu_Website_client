import React from 'react';
import './main.css';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    CardFooter
  } from "@material-tailwind/react";
  import { BuildOutlined, ChildCare,Functions, Person } from "@mui/icons-material";


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
        value: "Others",
        label: <Functions />
    }
]

const WebinarRegister = () => {
  return (
    <div className='flex justify-center items-center w-full' style={{
        minHeight: "90vh", height: "100%", paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#D9D9D9"
    }}>
        <Card color="transparent" className='blur-effect' shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Webinar Registration
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                
            <div className="mb-1 flex flex-col gap-6">
            <Input label="Full Name" size="lg" />
            <Input label="Mail ID" size="lg" />
            <Input label="Phone No." size="lg" />
            <Input label="Qualification" size="lg" />
                <Typography variant='small' color='blue-gray' className='mt-2 font-normal'>
                    I am a
                <Select
                        placeholder="Student"
                        className=" focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                        menuProps={{ className: "h-48" }}
                    >
                        {ProfessionStates.map((content) => (
                        <Option key={content.value} value={content.value}>
                            <div className="flex items-center gap-x-2">
                                {content.label}
                                {content.value}
                            </div>
                        </Option>
                        ))}
            </Select>
                </Typography>
            </div>
            <Checkbox
                label={
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                >
                    I agree the
                    <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                    >
                    &nbsp;Terms and Conditions
                    </a>
                </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
            />
            </form>
        </Card>
    </div>
  )
}

export default WebinarRegister;