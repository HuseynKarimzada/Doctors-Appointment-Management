import { PageNotfond } from "../Components";
import {
  SearchDoctors,
  Home,
  Login,
  Signup,
  DocotrDashboard,
  DoctorRendezVous,
  DoctorHistorique,
  DocotrSettings,
} from "../Pages";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<PageNotfond/> ,
    element: <Home />,
  },
  {
    path: "/recherche",
    element: <SearchDoctors />,
  },
  {
    path: "/Connexion",
    element: <Login />,
  },
  {
    path: "/identifier",
    element: <Signup />,
  },
  //Doctors Router
  {
    path: "/doctor/dashboard",
    element: <DocotrDashboard />,
  },
  {
    path: "/docotr/rendezvous",
    element: <DoctorRendezVous />,
  },
  {
    path: "/doctor/historique",
    element: <DoctorHistorique />,
  },
  {
    path: "/doctor/settings",
    element: <DocotrSettings />,
  },
]);

export default router;
