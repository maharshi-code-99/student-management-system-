import{Navigate,Outlet}from'react-router-dom';import{useAuth}from'../context/Auth';export default function PrivateRoute(){return useAuth().user?<Outlet/>:<Navigate to="/login" replace/>}
