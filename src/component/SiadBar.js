import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';

const SideBar = () => {
    return (
        <Box sx={{ backgroundColor: 'rgb(21, 27, 141)', height: '100vh', color: 'white' }}> {/* RGB background color */}
            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}> {/* Icons in white */}
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <AnnouncementOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Duty Roster" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Contact us" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Masters" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <DehazeIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </Box>
    );
}

export default SideBar;
