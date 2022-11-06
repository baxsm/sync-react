import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import ArticleDetails from '../components/articleDetails/ArticleDetails';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from '../components/home/Home';
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy';
import TermsConditions from '../components/termsConditions/TermsConditions';

const Layout = () => {

    useEffect(function mount() {
        const sections = document.querySelectorAll('#root div[id]');
        function onScroll() {
            const scrollY = window.scrollY;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                var sectionId = current.getAttribute('id');
                try {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        document.querySelector('.navbar a[data-href*=' + sectionId + ']').classList.add('active-link');
                    }
                    else {
                        document.querySelector('.navbar a[data-href*=' + sectionId + ']').classList.remove('active-link');
                    }
                } catch (err) { }
            });
        }
        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Link to='#' className="back-to-top page-scroll" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} >Back to Top</Link>
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
            {
                path: '/terms-conditions',
                element: <TermsConditions />
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />
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
