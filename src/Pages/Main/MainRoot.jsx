import React from 'react'
import Navbar from '../../Components/Main/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Main/Footer'
import { BasketContextProvider } from '../../Context/BasketContext'

const MainRoot = () => {
    return (
        <>  <BasketContextProvider>
            <Navbar />
            <Outlet />
            <Footer />
            </BasketContextProvider>
        </>
    )
}

export default MainRoot