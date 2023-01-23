import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { publicRoute } from "./Routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./Pages/Services";
import About from "./Pages/About";
import PrivateRoute from "./Authentication/PrivateRoute";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import AdminRoute from "./Authentication/AdminRoute";
import Dashbord from "./Pages/Dashbord/Dashbord";
import AddService from "./Pages/Dashbord/AddService";
import AddAdmin from "./Pages/Dashbord/AddAdmin";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          <Route element={<PrivateRoute />}>
            {
              PrivateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))
            }
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashbord" element={<Dashbord />}>
              <Route path='add-service' element={<AddService />} />
              <Route path='add-admin' element={<AddAdmin />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
