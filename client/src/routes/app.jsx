import WelcomePage from "./../views/Welcome/Welcome.jsx";
import DashboardPage from "./../views/Dashboard/Dashboard.jsx";
import NewEmployee from "./../views/NewEmployee/NewEmployee.jsx";
import ReviewEntry from "./../views/ReviewEntry/ReviewEntry.jsx";


const appRoutes = [
  {
    path: "/welcome",
    component: WelcomePage
  },
  {
    path: "/dashboard",
    component: DashboardPage
  },
  {
    path: "/add-employee",
    component: NewEmployee
  },
  {
    path: "/review-entry",
    component: ReviewEntry
  },
  { redirect: true, path: "/", to: "/welcome" }
];

export default appRoutes;
