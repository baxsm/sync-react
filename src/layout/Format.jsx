import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ArticleDetails from '../components/articleDetails/ArticleDetails';
import Footer from '../components/home/common/Footer';
import Header from '../components/home/common/Header';
import Home from '../components/home/Home';

const Layout = () => {
    window.addEventListener('scroll', function () {
        try {
            const header = this.document.querySelector("#scrollToTop");
            header.classList.toggle("back-to-top-show", this.window.scrollY > 100);
        } catch (err) { }
    })

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <a href='#' className="back-to-top page-scroll" id="scrollToTop" style={{ display: 'inline' }}>Back to Top</a>
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
            {
                path: '/article-details',
                element: <ArticleDetails />
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
