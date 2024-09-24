import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import * as React from 'react';

import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const SideBar = () => {
    return (
        <Box sx={{ backgroundColor: 'rgb(21, 27, 141)', height: '100vh', color: 'white', marginTop:'-10px'}}> {/* RGB background color */}
            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}> {/* Icons in white */}
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SaveAsIcon />
                </ListItemIcon>
                <ListItemText primary="Duty Roster" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <DehazeIcon />
                </ListItemIcon>
                <ListItemText primary="Contact us" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <LayersIcon />
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
