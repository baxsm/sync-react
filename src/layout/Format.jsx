import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from '../components/home/common/Footer';
import Header from '../components/home/common/Header';
import Home from '../components/home/Home';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ],
  },
]);


export default function Format() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
