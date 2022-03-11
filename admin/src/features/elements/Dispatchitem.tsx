import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import {orderProperties, userDetailType} from '../interfaces'

import { styled } from '@mui/material/styles';
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

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

interface PropType{
    data: orderProperties
}

function Dispatchitem(props : PropType) {
    const [expanded, setExpanded] = React.useState(false);
    const [userDetail, setUserDetail] = useState<userDetailType>();
    let [update, setUpdate] = useState<number>(0); 

    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

  useEffect(() => {   
  }, [])

    async function fetchUserInfo(){     
      try {
        const response = await fetch(`/api/users/${props.data.user_id}`);
        if (response.ok) {
          const jsonResponse = await response.json();
          setUserDetail(jsonResponse);
        //   console.log(jsonResponse)
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error); 
      }
    }

      async function setOrderStatus (newStatus : any) {
        const object = {status: newStatus};
        try {
          const response = await fetch(`/api/orders/${props.data.order_id}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(object)
          });
          if(response.ok){
              props.data.status = newStatus
              setUpdate(update + 1);
            return
          }
          throw new Error('Request failed!');
        } catch(error) {
          console.log(error);
        }
      
      }


  const handleExpandClick = () => {     //? Expand button logic
    fetchUserInfo();
    setExpanded(!expanded);
  };

    const Orderuserdetail = () => {     //? Contains the expand area data (user info fed from fetch)
    return (
        <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
            <CardContent>       
                <Typography>
                UserID: {userDetail?.user_id} <br />
                {`Dispatch to: ${userDetail?.firstname} ${userDetail?.lastname}`}

                </Typography>
            </CardContent>
            <CardContent>
                <Typography align="right">
                    Address: <br />
                {userDetail?.address} <br />
                {userDetail?.postcode}
                

                </Typography>
            </CardContent>

      </CardContent>
    )
    }
    const Orderstatus = () => {     //? Controls the little avatar icon and status
        switch(props.data.status){
            case "In Progress":
                return (
                    <Avatar sx={{ bgcolor: "blue" }} aria-label="Status">
                        <PlayCircleFilledIcon/>
                    </Avatar>
                )
            case null:
                return (
                    <Avatar sx={{ bgcolor: "red" }} aria-label="Status">
                    <FiberNewIcon/>
                </Avatar>
                )
            case "Dispatched":
                return (
                <Avatar sx={{ bgcolor: "green" }} aria-label="Status">
                    <LocalShippingIcon/>
                </Avatar>
                )
            case "Complete":
                return (
                    <Avatar sx={{ bgcolor: "gold" }} aria-label="Status">
                    <CheckCircleIcon/>
                </Avatar>
                )
            default:
                return (
                    <Avatar sx={{ bgcolor: "grey" }} aria-label="Status">
                    
                </Avatar>
                )
            
        }

    }

  return (
    <Card 
    sx={{
        border: "1px grey solid",
        m: "5px"  }}
    
    >
      <CardHeader
        avatar={
            <Orderstatus/>
        }
        title={`Order ${props.data.order_id}`}
        subheader={`Order Placed ${props.data.order_date.slice(0,10)}`}
        onClick={handleExpandClick}
      />

      <CardContent sx={{py: 0}} onClick={handleExpandClick}>
        <Typography variant="body2" color="text.primary" >
            {`${props.data.quantity}x ${props.data.title}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <Tooltip title="Set status: New" placement="top">
        <IconButton aria-label="New" sx={{mx: "2vw"}} onClick={() => setOrderStatus(null)}>
          <FiberNewIcon/>
        </IconButton>
        </Tooltip>

        <Tooltip title="Set status: In Progress" placement="top">
        <IconButton aria-label="In Progress" sx={{mx: "2vw"}} onClick={() => setOrderStatus("In Progress")}>
          <PlayCircleFilledIcon/>
        </IconButton>
        </Tooltip>

        <Tooltip title="Set status: Dispatched" placement="top">
        <IconButton aria-label="Dispatched" sx={{mx: "2vw"}} onClick={() => setOrderStatus("Dispatched")}>
          <LocalShippingIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Set status: Complete" placement="top">
        <IconButton aria-label="Complete" sx={{mx: "2vw"}} onClick={() => setOrderStatus("Complete")}>
          <CheckCircleIcon/>
        </IconButton>
        </Tooltip>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
{/*     Shows Orderuserdetail component on click once the data loads*/}
        {userDetail ? <Orderuserdetail/> : <Skeleton/>}         
      </Collapse>
    </Card>
  );
}

export default Dispatchitem;


