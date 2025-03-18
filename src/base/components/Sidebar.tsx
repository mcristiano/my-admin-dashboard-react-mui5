import React from 'react';
    import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Badge, Typography, Box } from '@mui/material';
    import getMenuItems from '../../../config/menuConfig';
    import { useNavigate } from 'react-router-dom'; // Import useNavigate
    import { MenuItem } from './menu/types';

    const drawerWidth = 240;

    const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
      const navigate = useNavigate(); // Get the navigate function
      const menuItems = getMenuItems(navigate); // Pass navigate to getMenuItems

      const renderMenuItems = (items: MenuItem[]) => {
        return (
          <List>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  button
                  onClick={
                    item.onClick
                      ? item.onClick
                      : item.items
                      ? () => toggleSubMenu(item.id)
                      : undefined
                  }
                >
                  <ListItemIcon>
                    {item.badge ? (
                      <Badge badgeContent={item.badge} color="error">
                        <item.icon />
                      </Badge>
                    ) : (
                      <item.icon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
                {item.items && (
                  <div style={{ marginLeft: '20px' }}>
                    {renderMenuItems(item.items)}
                  </div>
                )}
                {item.id === 'users' && <Divider sx={{ my: 2 }} />}
              </React.Fragment>
            ))}
          </List>
        );
      };

        const toggleSubMenu = (id: string) => {
          console.warn('Toggling a sub-menu is not yet implemented', id)
      };

      return (
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box sx={{ overflow: 'auto' }}>
            <Typography variant="h6" noWrap component="div" sx={{ p: 2 }}>
              Menu
            </Typography>
            <Divider />
            {renderMenuItems(menuItems)}
          </Box>
        </Drawer>
      );
    };

    export default Sidebar;
