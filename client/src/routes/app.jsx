import WelcomePage from './../views/Welcome/Welcome.jsx';
import DashboardPage from './../views/Dashboard/Dashboard.jsx';
import NewEmployee from './../views/NewEmployee/NewEmployee.jsx';
import ReviewEntry from './../views/ReviewEntry/ReviewEntry.jsx';
import SelectReport from './../views/SelectReport/SelectReport.jsx';
import UserProfile from './../views/UserProfile/UserProfile.jsx';
import EmployeeProfile from './../views/EmployeeProfile/EmployeeProfile.jsx';

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  Face
} from 'material-ui-icons';

const appRoutes = [
  {
    path: '/welcome',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Dashboard,
    component: WelcomePage
  },
  {
    path: '/dashboard',
    sidebarName: 'Reports',
    navbarName: 'Reports',
    icon: Person,
    component: DashboardPage
  },
  {
    path: '/add-employee',
    sidebarName: 'Add Employee',
    navbarName: 'Add Employee',
    icon: ContentPaste,
    component: NewEmployee
  },
  {
    path: '/review-entry',
    sidebarName: 'Review',
    navbarName: 'Review',
    icon: LibraryBooks,
    component: ReviewEntry
  },
  {
    path: '/select-report',
    sidebarName: 'Reports',
    navbarName: 'Reports',
    icon: BubbleChart,
    component: SelectReport
  },
  {
    path: '/profile',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: Face,
    component: UserProfile
  },
  {
    path: '/employee-profile',
    sidebarName: 'Employee',
    navbarName: 'Employee',
    icon: Face,
    component: EmployeeProfile
  },
  { redirect: true, path: '/', to: '/welcome', navbarName: 'Redirect' }
];

export default appRoutes;
