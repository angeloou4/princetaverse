import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 700;


const Sidebar = ({ content, open, setOpen, marginTop="77px", height}) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log("ASfsafsda")
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));


  return (
    <div>
      <Drawer
        PaperProps={{ style: { height: height, marginTop: marginTop } }}
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: "1250 !important",
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          overflow: 'auto'
        }}
      >
        {/* just for padding lol */}
        {/* <div style={{ height: "120px" }}></div> */}

        {setOpen &&
          <DrawerHeader>
            <IconButton onClick={() => handleDrawerClose()}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>}
        {content}
      </Drawer>
    </div>
  );
}

export default Sidebar;