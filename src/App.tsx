import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './base/layout/Layout';
import TaskList from './TaskList';
import RoleList from './RoleList'; // Import the new RoleList component

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/tarefas-listagem" element={<TaskList />} />
          <Route path="/roles-listagem" element={<RoleList />} /> {/* Add route for RoleList */}
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
