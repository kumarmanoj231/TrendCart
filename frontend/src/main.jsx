import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";

// private route 
import PrivateRoute from "./components/PrivateRoute.jsx";

// Auth
import Login from './pages/Auth/Login';
import Register from "./pages/Auth/Register.jsx";

import Profile from './pages/User/Profile.jsx'

// Admin Routes

import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import UserList from "./pages/Admin/UserList.jsx";
import CategoryList from "./pages/Admin/CategoryList.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<PrivateRoute/>} >
                <Route path="/profile" element={<Profile/>}/>
            </Route>

            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            {/* admin routes */}
            <Route path="/admin" element={<AdminRoute/>}>
            <Route path="userlist" element={<UserList/>} />
            <Route path="categorylist" element={<CategoryList/>} />
            </Route>
        </Route>
    )
);


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
