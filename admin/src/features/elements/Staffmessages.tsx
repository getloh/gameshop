import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import moment from 'moment';

let day = (X : number = 0) => {return moment().subtract(X, "days").format("DD/MM/YYYY")}

const dummyMessages = [
    {date: day() ,
    message: "The monthly staff meeting has been cancelled because nobody actually works here"},
    {date: day(3) ,
    message: "Due to last weeks incident, bring your pet to work day is cancelled until further notice"},
    {date: day(9) ,
    message: "These staff messages have been hard coded, but it would be relatively easy to hook them up to postgres"},
    {date: day(15) ,
    message: "Please do not harass the office mascot"},
    {date: day(23) ,
    message: "Reminder to book your annual leave"},
    {date: day(40) ,
    message: "Reminder that the fire extinguishers are for emergency use only"},
]



function Staffmessages() {
    const [count, setCount] = useState(0);


  useEffect(() => {   
  }, [])




  return (
    <Box>
        {dummyMessages.map(x => 
        <Card sx={{m: "20px"}}>
        <CardContent>
          <Typography variant="subtitle2">{x.date}</Typography>
          <Typography>{x.message}</Typography>
        </CardContent>
      </Card>
            
        )
        }
    
    </Box>
  );
}

export default Staffmessages;