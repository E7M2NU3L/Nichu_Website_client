import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Button,
    Select,
    Option
  } from "@material-tailwind/react";
  import { BuildOutlined, ChildCare,Functions, Person } from "@mui/icons-material";
  import './main.css';
  import React, {useState} from "react";
import db_Service from "../../api/Database";

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

const Personal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("Student");
  const [description, setDescription] = useState("");
  const [highestQualification, setHighestQualification] = useState("");

  const handleFormSubmit = (e) => {
    // Handle form submission here
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      profession,
      description,
      highestQualification
    });

    e.preventDefault();
    db_Service.CreateUser([
      firstName,
      lastName,
      profession,
      description,
      highestQualification
    ])
  };

    return (
    <main className="flex justify-center items-center w-full bg-gradient-to-tr from-[#98e8ff] via-[#b7d7e1] to-[#c0e0eb] "  style={{
        minHeight: "90vh", height: "100%", paddingTop: "3rem", paddingBottom: "3rem"
      }}>
      <div className="background">
      <Card className="w-96 card-style" style={{
          
        }}>
        <CardHeader
          variant="gradient"
          style={{
            backgroundColor: "#1181D8"
          }}
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h4" color="white">
            User Details
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleFormSubmit}>
        <Input label="First Name" size="lg" value={firstName} onChange={setFirstName} />
          <Input label="Last Name" size="lg" className="pb-0" value={lastName} onChange={setLastName} />
          <Typography  variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium">
            Profession
            <Select
                        placeholder="Student"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                        value={profession}
                        onChange={setProfession}
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
          <Input label="Description" size="lg" value={description} onChange={setDescription} />
          <Input label="highest Qualification" value={highestQualification} onChange={setHighestQualification} />

          <hr />
          </form>
        </CardBody>
      </Card>
      </div>
      </main>
  )
}

export default Personal