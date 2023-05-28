import {createBrowserRouter} from 'react-router-dom';
import Main from '../../pages/Layout/Main';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Booking from '../../pages/Booking/Booking/Booking';
import SignUp from '../../pages/SignUp/SignUp';
import DashBoard from '../../pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardLayout from '../../pages/Layout/DashboardLayout';
import MyBooking from '../../pages/DashBoard/DashBoard/MyBooking/MyBooking';
import AllUsers from '../../pages/DashBoard/AllUsers/AllUsers';
import AddTour from '../../pages/DashBoard/AddTour/AddTour';
import ManageTour from '../../pages/DashBoard/ManageTour/ManageTour';
import About from '../../pages/About/About';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addtour',
                element: <AddTour></AddTour>
            },
            {
                path: '/dashboard/managetour',
                element: <ManageTour></ManageTour>
            }
        ]
    }
])
export default router;