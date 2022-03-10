import React , {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'top' | 'left' | 'bottom' | 'right';


function Nav() {
  const navigate = useNavigate();
    const [drawer, setDrawer] = useState(false)

  useEffect(() => {   // Unused for now
  }, [])

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawer(open);
    };

    const getIcon = (text: string) => {
      switch (text){
        case 'Home':
          return <HomeIcon fontSize='large'/>
        case 'Sales':
          return <TrendingUpIcon fontSize='large'/>
        case 'Orders':
          return <LocalShippingIcon fontSize='large'/>
        case 'Stock':
          return <WarehouseIcon fontSize='large'/>
        case 'Dispatch':
          return <SendIcon fontSize='large'/>
        default:
          return <InboxIcon fontSize='large'/>
      }
    }
    const handleClick = (text : string) => {
      switch (text){
        case 'Home':
          navigate('/');
          break;
        case 'Sales':
          navigate('/sales');
          break;
        case 'Orders':
          navigate('/orders');
          break;
        case 'Stock':
          navigate('/stock');
          break;
        case 'Dispatch':
          navigate('/dispatch');
          break;
        default:
          return 
      }
    }

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "20vw"}}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {['Home','Sales', 'Stock'].map((text, index) => (
            <ListItem 
            button key={text}
            onClick={() => handleClick(text)}
            sx={{width: "20vw", py: 6, px: 3}}
            
            >
              <ListItemIcon>
                {getIcon(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Orders', 'Dispatch'].map((text, index) => (
            <ListItem 
            button key={text} 
            onClick={() => handleClick(text)}
            sx={{py: 6, px: 3}}
            >
              <ListItemIcon>
              {getIcon(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  

  return (
    <div id="navpage">
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon fontSize='large'/>
          </Button>
          <Drawer
            anchor="right"
            open={drawer}
            onClose={toggleDrawer(false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>

    </div>
  );
}

export default Nav;