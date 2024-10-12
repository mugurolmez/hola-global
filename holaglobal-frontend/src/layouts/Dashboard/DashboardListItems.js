
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/dashboard/customers">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Müşteriler" />
        </ListItemButton>
        <ListItemButton component={Link} to="/dashboard/users">
            <ListItemIcon>
                <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Kullanıcılar" />
        </ListItemButton>
        
    </React.Fragment>
);
