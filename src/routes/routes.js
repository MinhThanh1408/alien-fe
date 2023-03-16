import config from "src/config";

// Pages
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import Register from "src/pages/Register";
import Welcome from "src/pages/Welcome";

const publicRoutes = [
  { path: config.routes.welcome, component: Welcome },
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
