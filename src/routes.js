import HomePage from './pages/home.vue';
// import AboutPage from './pages/about.vue';
// import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
// import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
import ParametersPage from './pages/parameters.vue';
// import LoginPage from './pages/login.vue';
import ActivitiesPage from './pages/activities.vue';
import InstructionsPage from './pages/instructions.vue';
import PunchclockPage from './pages/punchclock.vue';
import IncidentPage from './pages/incident.vue';
import DaybookPage from './pages/daybook.vue';
import MydocumentsPage from './pages/mydocuments.vue';
import OperationsPage from './pages/operations.vue';
export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/instructions/',
    component: InstructionsPage,
  },
  {
    path: '/activities/',
    component: ActivitiesPage,
  },
  {
    path: '/punchclock/',
    component: PunchclockPage,
  },
  {
    path: '/daybook/',
    component: DaybookPage,
  },
  {
    path: '/incident/',
    component: IncidentPage,
  },
  {
    path: '/mydocuments/',
    component: MydocumentsPage,
  },
  {
    path: '/operations/',
    component: OperationsPage,
  },
  {
    path: '/parameters/',
    component: ParametersPage,
  },
];
