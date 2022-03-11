import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import moment from 'moment';
import Staffmessages from '../features/elements/Staffmessages';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardHeader, Skeleton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


function Home() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState<string>(moment().format("dddd, MMMM Do YYYY, h:mm"));


  useEffect(() => {  
    const interval = setInterval(() => {
      setTime(moment().format("dddd, MMMM Do YYYY, h:mm"))
    }, 30000);
    return () => clearInterval(interval);
  }, [])

  const payload = [{nickname: "dave", hats: 5}]
  // const payload = [1, 3, 5]

  return (
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Box sx={{m: "30px"}}>
        <Typography variant="h1">Welcome Back!</Typography>
        <Typography variant="h4">{time}</Typography>
        <br />
        <br />
        <Box sx={{width: "105%"}}>
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              height={"69vh"}
            />
       </Box>
        
      </Box>
      <Box>
        <Card sx={{height: "100vh", width: "50vw"}}>
          <CardContent>
            <Typography variant="h4">Staff Messages</Typography>
            <Staffmessages/>

          </CardContent>
        </Card>

      </Box>
    </Box>

    
  );
}

export default Home;