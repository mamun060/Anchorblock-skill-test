import { Routes ,Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layouts from "./components/Layouts";
import UserList from "./pages/UserList";
import Dashboard from "./pages/Dashboard";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  const checkRoute = useAuthCheck();
  return !checkRoute ? 
  (
    <div> Check Route Authentication</div>
  ) : (
    (
      <>
      <Routes>
        <Route path="/"  element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        } />
        
        <Route path="/sign-up" element={ 
          <PublicRoute>
            <SignUp />
          </PublicRoute>
         } />
        
        <Route path="/dashboard" element={
            <PrivateRoute> 
              <Layouts>
                <Dashboard />
              </Layouts>
            </PrivateRoute>
        } />
        
        <Route path="/user-list" element={
            <PrivateRoute>
              <Layouts>
                <UserList />
              </Layouts>
            </PrivateRoute>
        } />
      </Routes>
      </>
    )
  )
}