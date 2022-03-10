import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { orderDataDetailType } from '../interfaces';
import Typography from '@mui/material/Typography';

interface proptype {
    data: orderDataDetailType[]
}

function Recentsales(props: proptype) {
    


  useEffect(() => {   
  }, [])




  return (
      <Card sx={{m: "10px;"}}>
        <CardContent>
          <Typography variant="h6">Last 5 Sales</Typography>
        </CardContent>
        {props.data.slice(0,5).map(x => 

                <CardContent key={x.order_id}>
                  <Typography variant="body2">
                  {x.quantity}x {x.title}<br/> On {x.order_date.slice(5,10)}
                  </Typography>
                  </CardContent>
              
        )}
      </Card> 
  );
}

export default Recentsales;