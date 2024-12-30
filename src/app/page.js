'use client'
import Booking from "./Booking"
import Footer from "./Footer"
import BookingForm from "./Form"
import Header from "./Header"
import Intro from "./Intro"
import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("ar")

    const toggleLanguage = () => {
        setLanguage(language === "ar"? "en" : "ar")
    //    change the app to rtl or ltr based on language for html tag
        document.documentElement.dir = language === "ar"? "ltr" : "rtl"
        
    }


    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}


export const useLanguage = () => {
    return useContext(LanguageContext)
}

export default () => {
    return (
        <LanguageProvider>
            <div className="px-5 md:px-20 ">
                <Header />
                <Intro />
                <Booking />
            </div>
            <Footer />
        </LanguageProvider>
    )
}


