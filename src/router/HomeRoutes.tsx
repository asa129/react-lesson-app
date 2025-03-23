import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "setting",
    children: <Setting />,
  },
  {
    path: "user_management",
    children: <UserManagement />,
  },
];
