import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { orderDataDetailType } from '../interfaces';
import {findFrequencyOfTitle} from '../utility'
import Typography from '@mui/material/Typography';

interface proptype {
    data: orderDataDetailType[];
    show?: number;
}
interface datatype{
    title?: string; 
    quantity?: number;
}


function TopRecentsales(props: proptype) {
    

    let workingData = findFrequencyOfTitle(props.data)


  useEffect(() => {   
  }, [])

  return (
     <Card sx={{m: "10px"}}>
        <CardContent sx={{pt: 0.5, pb: 0.6}}>
            <Typography variant="h6">Top selling products</Typography>
            <Typography variant="subtitle2" >last 50 orders</Typography>
        </CardContent >
        {workingData.slice(0,props.show || 5).map(x => 
            <CardContent key={x.title}>
                <Typography variant="body2"> {x.title} <br /> Vol Sold: {x.hits}</Typography>
            </CardContent>
        )}
    </Card>
  );
}

export default TopRecentsales;