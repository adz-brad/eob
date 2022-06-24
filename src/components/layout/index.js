import React from 'react'
import Footer from '../footer'
import Navbar from '../nav'

const Layout = ({ children }) => {
    return(
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout