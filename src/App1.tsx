import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from '@/base/layout/Layout';
import NotFound from '@/app/NotFound';
import getMenuItems from '../config/menuConfig';
import { MenuItem } from './base/components/menu/types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {

  const generateRoutes = (items: MenuItem[], parentPath = ''): React.ReactNode[] => {
    const routes: React.ReactNode[] = [];

    items.forEach(item => {
      const itemPath = `${parentPath}/${item.id}`;
      if (item.onClick && item.route && item.component) {
        routes.push(<Route key={itemPath} path={item.route} element={<item.component />} />);
      }

      if (item.items) {
        routes.push(...generateRoutes(item.items, itemPath));
      }
    });

    return routes;
  };

  const menuItems = getMenuItems();
  const allRoutes = generateRoutes(menuItems);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            {allRoutes}
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
