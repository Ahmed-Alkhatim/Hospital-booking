'use client'
import Booking from "./Booking"
import Footer from "./Footer"
import Header from "./Header"
import Intro from "./Intro"



export default () => {
    return (
        <>
            <div className="px-5 md:px-20 ">
                <Header />
                <Intro />
                <Booking />
            </div>
            <Footer />
        </>
    )
}


