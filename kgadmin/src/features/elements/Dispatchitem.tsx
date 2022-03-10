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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

interface PropType{
    data: orderProperties
}





function Dispatchitem(props : PropType) {
    const [expanded, setExpanded] = React.useState(false);
    const [userDetail, setUserDetail] = useState<userDetailType>()



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
          console.log(jsonResponse)
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error); 
      }
    }


  const handleExpandClick = () => {
    fetchUserInfo();
    setExpanded(!expanded);
  };

  const Orderuserdetail = () => {
    return (
        <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
            <CardContent>       
                <Typography>
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

  return (
    <Card 
    sx={{border: "1px grey solid"  }}
    onClick={handleExpandClick}
    >
      <CardHeader
        title={`Order ${props.data.order_id}`}
        subheader={`UserID ${props.data.user_id}`}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {`${props.data.quantity}x ${props.data.title}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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


