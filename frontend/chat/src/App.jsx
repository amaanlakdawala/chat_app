import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import LeftSideBar from './components/LeftSideBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Profile from './components/Profile'
import UpdateProfile from './components/UpdateProfile'
import Messages from './components/Messages'

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/update_profile/:id',
          element: <UpdateProfile />
        },
        {
          path:'/messages/:id',
          element:<Messages />
        }
      ]

    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  

  return (
    <>
      <RouterProvider router={browserRouter} />
      
    </>
  )
}

export default App
