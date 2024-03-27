import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Done } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const ReturnCard = () => {
  return (
    <div className='flex justify-center h-full w-full items-center bg-gradient-to-tr from-[#98e8ff] via-[#b7d7e1] to-[#c0e0eb]' style={{
        minHeight: "50vh"
    }}>
        <Card sx={{ minWidth: 275, background: "#c0e0eb" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Done /> Congratulations!!
        </Typography>
        <Typography variant="h5" component="div">
          from <span className='text-blue-500'>Nipix Tech</span>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          www.nipixtech.in
        </Typography>
        <Typography variant="body2">
          You Have Been Registerned Successfully
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
        <Button size="small">Back To Home</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  )
}

export default ReturnCard