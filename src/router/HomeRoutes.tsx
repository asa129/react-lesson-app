import { Setting } from "../components/Setting";
import { UserManagement } from "../components/UserManagement";

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
