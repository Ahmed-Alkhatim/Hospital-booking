import { useLanguage } from "./page"

export default () => {
    const { language } = useLanguage()
    return(
        <div className="bg-[#0A0E31] px-5 text-white py-5 mt-32 text-[16px] md:text-[18px] text-center">
            <p>{language == "ar" ? <div>© 2024 جميع الحقوق محفوظة. <strong>  مستشفى أطباء بورتسودان </strong> </div>: <div>© 2024 All rights reserved. <strong> Port Sudan Doctors Hospital</strong></div> } </p>
        </div>
    )
}