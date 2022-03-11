import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Saleschart from '../features/charts/Saleschart'
import StockTable from '../features/tables/Stocktable';
import { inventoryProperties, orderDataDetailType } from '../features/interfaces';
import TopRecentsales from '../features/elements/TopRecentsales'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface inventoryType {
  inventory: inventoryProperties;
}

function Dashboardstock() {
    const [count, setCount] = useState(0);
    const [stockData, setStockData] = useState<inventoryProperties[]>([])
    const [orderDataDetail, setOrderDataDetail] = useState<orderDataDetailType[]>([])

  

  useEffect(() => {   
  // Gets all inventory data and stores in state
    const fetchInventory = async () => {    
      try {
        const response = await fetch(`/api/inventory`);
        if (response.ok) {
          const jsonResponse = await response.json();
          setStockData(jsonResponse);
          // console.log(jsonResponse)
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error); 
      }
    };

    const fetchOrderDataDetail = async () => {    
      try {
        const response = await fetch(`/api/orders/detail`);
        if (response.ok) {
          const jsonResponse = await response.json();
          setOrderDataDetail(jsonResponse);
          // console.log(jsonResponse)
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error); 
      }
    };

    fetchInventory();
    fetchOrderDataDetail();
  }, [])




  return (
    <div id="dashboard-stock">
      <Typography variant="h4" align="center">Stock Dashboard</Typography>
        <div id="dashboard-stock-left">

          <StockTable inventory={stockData}></StockTable>
          <TopRecentsales data={orderDataDetail} show={8}/>
        </div>



    </div>
  );
}

export default Dashboardstock;