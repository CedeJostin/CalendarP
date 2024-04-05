import * as React from 'react';
import "./Floating.css"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Popover from '@mui/material/Popover';
import { BsCalendar2X } from "react-icons/bs";
import { useState } from 'react';
import { FaEllipsisH } from "react-icons/fa";

export default function FloatingActionButtons() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box sx={{ 
            position: 'fixed',
            top: 580,
            right: 80,
            '& > :not(style)': { m: 1 } 
        }}>
            <Fab color="primary" aria-label="add" onClick={handleClick}>
                <FaEllipsisH /> 
            </Fab>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
            >
                <Fab onClick={handleClose} color="secondary" aria-label="edit" >
                    <EditIcon />
                </Fab>
                <Fab onClick={handleClose} color="secondary" aria-label="Cancel" >
                    <BsCalendar2X/>
                </Fab>
                <Fab onClick={handleClose} color="secondary" aria-label="edit" >
                    < AddIcon/>
                </Fab>
                
            </Popover>
            
        </Box>
    );
}