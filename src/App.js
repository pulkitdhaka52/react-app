import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Layout from './Components/Layout/Layout';
import ProtectedLayout from './Components/Layout/ProtectedLayout';
import User from './Components/User';
import Home from './Components/Home';
import Counter from './Components/Counter';
import Pagination from './Components/Pagination';
import FileUploadModule from './Components/FileUpload';
import Todo from './Components/Todo';
import Lift from './Components/Lift';

const router = createBrowserRouter([
  { 
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path: "/contact-us",
        element:<ContactUs />
      }
    ]
  },
  {
    element: <ProtectedLayout />,
    children:[
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/user/:userId",
        element: <User/>
      },
      {
        path: "/counter",
        element: <Counter/>
      },
      {
        path: "/pagination",
        element: <Pagination />
      },
      {
        path: "/upload",
        element:<FileUploadModule />
      },
      {
        path: "/todo",
        element:<Todo />
      },
      {
        path: "/lift",
        element:<Lift />
      }

    ]
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
