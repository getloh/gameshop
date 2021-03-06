import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { inventoryProperties, orderProperties, pricePerOrderType, orderDataDetailType} from '../features/interfaces';
import Dispatchitem from '../features/elements/Dispatchitem';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

interface orderType {
    orders: orderProperties;
}

function Dispatch() {
    const [count, setCount] = useState(0);
    const [orderData, setOrderData] = useState<orderProperties[]>([])

  useEffect(() => {   
    let isMounted = true;

    fetchOrders();

    async function fetchOrders(){    
        if (isMounted){
          try {
            const response = await fetch(`/api/orders`);
            if (response.ok) {
              const jsonResponse = await response.json();
              setOrderData(jsonResponse);
              console.log(jsonResponse)
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch (error) {
            console.log(error); 
          }
        }
        };
    
        return () => {
            isMounted = false;
          }
  }, [])

  let activeData = orderData.filter(x => x.status !== "Complete")


  return (
    <Box>
        <Typography variant='h4' align="center"> Dispatch - Orders waiting </Typography>
    <Box sx={{}}>
        {activeData.map(x => <Dispatchitem key={x.order_id} data={x}/>)}
    </Box>
    </Box>
  );
}

export default Dispatch;