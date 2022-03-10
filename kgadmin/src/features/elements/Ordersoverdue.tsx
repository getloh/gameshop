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
import {find7Days} from '../utility'

interface propType {
    data: orderProperties[]
}

function Ordersoverdue(props: propType) {
    const [inProg, setInProg] = useState(-1);
    const [reqAction, setReqAction] = useState(-1);



  useEffect(() => {   
    let isMounted = true;

    return () => {
        isMounted = false;
      }
  }, [])

  let data = find7Days(props.data, "older")

  const completeLength = data.filter(x => x.status !== "Complete").length

  const getColor = (num : number) => {
    if (num > 15){
        return "red"
    }
    else if (num > 5){
        return "darkorange"
    }
    else if (num < 6 ) {
        return "text.secondary"
    }
  }

  return (
    <Card sx={{m: "10px"}}>
        <CardContent sx={{m: "0"}}>
            <Typography variant="h6">
                Overdue
            </Typography>
        </CardContent>

        <Box sx={{ display: 'flex'}}>
            <CardContent sx={{m: "0"}}>
                <Typography variant="subtitle1" color="text.secondary">
                    Orders &#62; 7d
                </Typography >
                <Typography variant="h6" color={() => getColor(completeLength)}>
                    {completeLength}
                </Typography>
            </CardContent>
        </Box>
    </Card>
    
  );
  

}

export default Ordersoverdue;