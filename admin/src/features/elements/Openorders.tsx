import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { orderProperties } from '../interfaces';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

interface propType {
    data: orderProperties[]
}

function Openorders(props: propType) {
    const [inProg, setInProg] = useState(-1);
    const [reqAction, setReqAction] = useState(-1);



  useEffect(() => {   
    let isMounted = true;
    // calculate();

    // function calculate(){
    //     if (isMounted){
    //         setInProg(props.data.filter(x => x.status === "In Progress").length);
    //         setReqAction(props.data.filter(x => x.status === null).length);
    //     console.log(`calculate finished - states are ${inProg}, ${reqAction}`)
    //     console.log(props)
    //     }
    // }

    return () => {
        isMounted = false;
      }

  }, [])



  return (
    <Card sx={{m: "10px"}}>
        <CardContent sx={{m: "0"}}>
            <Typography variant="h6">
                Open Orders
            </Typography>
            </CardContent>
        <Box sx={{ display: 'flex'}}>
            <CardContent sx={{m: "0"}}>
                <Typography variant="subtitle1" color="text.secondary">
                    In Progress
                </Typography >
                <Typography variant="h6" color="text.secondary">
                    {props.data.filter(x => x.status === "In Progress").length}
                </Typography>
            </CardContent>
            <CardContent sx={{m: "0"}}>
                <Typography variant="subtitle1" color="text.secondary">
                    Requiring Action
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {props.data.filter(x => x.status === null).length}
                </Typography>
            </CardContent>


        </Box>
    </Card>
    
  );
  

}

export default Openorders;