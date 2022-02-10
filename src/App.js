import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './pages/Home/Header';
import AddFoods from './pages/Admin/AddFoods/AddFoods';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AddStudents from './pages/Admin/AddStudents/AddStudents';
import AllFoods from './pages/AllFoods/AllFoods';
import AllStudents from './pages/AllStudents/AllStudents';
import ServeFood from './pages/Admin/ServeFood/ServeFood';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import FoodDisplay from './pages/FoodDisplay/FoodDisplay';
import FoodOrder from './pages/FoodOrder/FoodOrder';
import Navigation from './pages/Home/Navaigation';
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
         <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/foods" element={<FoodDisplay></FoodDisplay>} />
            <Route path="/order/:id" element={<FoodOrder/>} />
            <Route path="/dashboard" element={
              // <RequireAuth>
              <Dashboard></Dashboard>
              // </RequireAuth>
            } >
              <Route path="/dashboard/addFoods" element={
                // <RequireAuth>
                <AddFoods></AddFoods>
                // </RequireAuth>
              } />
              <Route path="/dashboard/addStudents" element={
                // <RequireAuth>
                <AddStudents></AddStudents>
                // </RequireAuth>
              } />
              <Route path="/dashboard/allFoods" element={
                // <RequireAuth>
                <AllFoods />
                // </RequireAuth>
              } />
              <Route path="/dashboard/allStudents" element={
                // <RequireAuth>
                <AllStudents />
                // </RequireAuth>
              } />
              <Route path="/dashboard/serveFood" element={
                // <RequireAuth>
                <ServeFood />
                // </RequireAuth>
              } />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
