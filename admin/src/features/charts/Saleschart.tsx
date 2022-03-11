import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { genDayLabels } from '../utility'
import {dailyDataType} from '../interfaces'
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface dailyType {
  data: dailyDataType[];
  display: string;
  title?: string;
  days: number;
  type: string;
}




const dataset = (inputArr: dailyDataType[], selector : string, days : number) => { // Takes DailyData prop and a selector, returns X by last 7 days
  let salesData : number[] = [];
  for (let i = 0; i < days; i++){
    let theDay = moment().subtract(i, 'days').format("YYYY-MM-DD");
    const index = inputArr.findIndex(x => x.date === theDay)
    // console.log(`Day is ${theDay}, array was searched and index found was ${index}`)
    if (index !== -1){ // If data found for day
      (selector === "quantity" ? salesData.push(inputArr[index].quantity) : salesData.push(inputArr[index].totalval))
    }
    else {
      salesData.push(0)
    }
  }
  return salesData.reverse();
}

const SalesChart: React.FC<dailyType> = (props) => {
  const labels = genDayLabels(props.days);  // gens array of dates starting 7 days ago, ending today

  // console.log(props.data)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };
  const randomColour = () => {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
  
  const data = {
    labels,
    datasets: [
      {
        label: props.display,
        data: dataset(props.data, props.display, props.days),
        backgroundColor: randomColour(),
      },

    ],
  };


if (props.type === "line" || props.type === "Line"){
  return (
    <Card>
      <CardContent>
          <Line 
          options={options} 
          data={data} />
        </CardContent>
    </Card>
  )
}
else return (
  <Card>
    <CardContent>
      <Bar 
      options={options} 
      data={data} />
    </CardContent>
  </Card>
  )
}

export default SalesChart