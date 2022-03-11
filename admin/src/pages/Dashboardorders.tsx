import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { inventoryProperties, orderProperties, pricePerOrderType, orderDataDetailType} from '../features/interfaces';
import {getPricePerOrder} from '../features/utility'

import SalesChart from '../features/charts/Saleschart'
import StockTable from '../features/tables/Stocktable';
import Recentsales from '../features/elements/Recentsales'
import TopRecentSales from '../features/elements/TopRecentsales'
import Openorders from '../features/elements/Openorders';
import Ordersoverdue from '../features/elements/Ordersoverdue'

import { Box, Container, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface orderType {
    orders: orderProperties;
}

interface inventoryType {
  inventory: inventoryProperties;
}

function Dashboardorders() {
    const [stockData, setStockData] = useState<inventoryProperties[]>([])
    const [orderData, setOrderData] = useState<orderProperties[]>([])
    const [orderDataDetail, setOrderDataDetail] = useState<orderDataDetailType[]>([])



  useEffect(() => {   
    let isMounted = true;
  // Gets all inventory data and stores in state


    fetchInventory();
    fetchOrders();
    fetchOrderDataDetail();
    
    return () => {
      isMounted = false;
    }

  async function fetchInventory(){ 
    if (isMounted){
      try {
        const response = await fetch(`/api/inventory`);
        if (response.ok) {
          const jsonResponse = await response.json();
          setStockData(jsonResponse);
        //   console.log(jsonResponse)
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error); 
      }
    }
    };
    async function fetchOrders(){    
      if (isMounted){
        try {
          const response = await fetch(`/api/orders`);
          if (response.ok) {
            const jsonResponse = await response.json();
            setOrderData(jsonResponse);
            // console.log(jsonResponse)
            return jsonResponse;
          }
          throw new Error('Request failed!');
        } catch (error) {
          console.log(error); 
        }
      }
      };
  
      async function fetchOrderDataDetail() {   
        if (isMounted){ 
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
      }
      };
  }, [])

  



  //? getDailyData = outputs an array of objects with total sales price and quantity per day
  const getDailyData = (arr: pricePerOrderType[]) => {
    let dayArray : any[] = [];

    for (let i = 0; i < arr.length; i++){
      if (dayArray.findIndex(dayArr => dayArr.date === arr[i].order_date) === -1 ){ // fails to find date
        dayArray.push({
          date: arr[i].order_date,
          totalval: arr[i].value,
          quantity: arr[i].quantity
        })
      }
      else {
        let idx = dayArray.findIndex(dayArr => dayArr.date === arr[i].order_date);
        let newVal = dayArray[idx].totalval + arr[i].value
        let newValFix = newVal.toFixed(2);

        dayArray[idx].totalval = Number(newValFix);
        dayArray[idx].quantity = dayArray[idx].quantity + arr[i].quantity;
      }
    }
    return dayArray
  }

const salesData = getDailyData(getPricePerOrder(orderData))

  return (
        <div>
    <Typography variant="h4" align="center">Order Dashboard</Typography>
    <div id="dashboard-orders">
        
        <div id="dashboard-orders-upper">
            <div id="order-chart" className="chart">
                <SalesChart 
                data={salesData} 
                display="quantity" 
                title="Order Quantity last 60 days" 
                days={60} 
                type="Line"
                />
            </div>
            <Box sx={{display: "flex", mt: 6}}>
                {orderData.length === 0 ? <Skeleton variant="text" /> : <Openorders data={orderData}/>}
                {orderDataDetail.length === 0 ? <Skeleton variant="text" /> : <Ordersoverdue data={orderData}/>}
            </Box>
        </div>

        <div id="dashboard-orders-lower">
            <div style={{width: "300px"}}><TopRecentSales data={orderDataDetail} show={8}></TopRecentSales></div>
            <div style={{width: "300px"}}><Recentsales data={orderDataDetail} show={8}/> </div>

        </div>

    </div>
    </div>
  );
}

export default Dashboardorders;