import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import SalesChart from '../features/charts/Saleschart'
import StockTable from '../features/tables/Stocktable';
import { inventoryProperties, orderProperties, pricePerOrderType, orderDataDetailType} from '../features/interfaces';
import Recentsales from '../features/elements/Recentsales'
import TopRecentSales from '../features/elements/TopRecentsales'
import Typography from '@mui/material/Typography';
import {getPricePerOrder} from '../features/utility'

interface orderType {
    orders: orderProperties;
}

interface inventoryType {
  inventory: inventoryProperties;
}

function Dashboardsales() {
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
    <div id="dashboard-sales">
      <Typography variant="h4" align='center'>Sales Dashboard</Typography>
        <div id="dashboard-sales-upper">
          <div className="chart">
            <SalesChart 
              data={salesData} 
              display="Sales £" 
              title="Sales last 7 days" 
              days={7} 
              type="Bar"
            />
          </div>
          <div className="chart">
            <SalesChart 
              data={salesData} 
              display="Sales £" 
              title="Sales last 30 days" 
              days={30} 
              type="Line"
            />
          </div>
        </div>

        <div id="dashboard-sales-lower">
          <div className="chart">
            <SalesChart 
            data={salesData} 
            display="quantity" 
            title="Quantity last 14 days" 
            days={14} 
            type="Line"
            />
          </div>
          <div style={{width: "300px"}}><TopRecentSales data={orderDataDetail}></TopRecentSales></div>
          
          <div style={{width: "300px"}}><Recentsales data={orderDataDetail}/> </div>

        </div>
        

    </div>
  );
}

export default Dashboardsales;