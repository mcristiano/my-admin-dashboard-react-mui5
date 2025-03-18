import {
  Dashboard,
  Person,

  People,

  List,
  PostAdd,
  Security,
} from '@mui/icons-material';
import { NavigateFunction } from 'react-router-dom';
import { MenuItem } from '@/base/components/menu/types';
import DashboardPage from '@/app/dashboard/Dashboard'; // Import Dashboard
import TaskList from '@/app/task/TaskList';
import RoleList from '@/app/role/RoleList';
import TaskForm from '@/app/task/TaskForm';

const getMenuItems = (navigate?: NavigateFunction): MenuItem[] => [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Dashboard,
    badge: 3,
    onClick: () => navigate && navigate('/'),
    route: '/',
    component: DashboardPage,
  },

  {
    id: 'cadastro',
    title: 'Cadastros',
    icon: Person,
    items: [
      {
        id: 'pessoas',
        title: 'Pessoas',
        icon: People,
      },
      {
        id: 'tarefas',
        title: 'Tarefas',
        icon: List,
        items: [
          {
            id: 'tarefas-listagem',
            title: 'Listagem',
            icon: List,
            onClick: () => navigate && navigate('/tarefas-listagem'),
            route: '/tarefas-listagem',
            component: TaskList,
          },
          {
            id: 'tarefas-cadastro',
            title: 'Cadastro',
            icon: PostAdd,
            onClick: () => navigate && navigate('/tarefas-cadastro'),
            route: '/tarefas-cadastro',
            component: TaskForm,
          },
        ],
      },
      {
        id: 'roles',
        title: 'Roles',
        icon: Security,
        items: [
          {
            id: 'roles-listagem',
            title: 'Listagem',
            icon: List,
            onClick: () => navigate && navigate('/roles-listagem'),
            route: '/roles-listagem',
            component: RoleList,
          },
          {
            id: 'roles-cadastro',
            title: 'Cadastro',
            icon: PostAdd,
          },
        ],
      },
    ],
  },
];

export default getMenuItems;
