'use client'
import Link from "next/link"
import { useLanguage } from "./LangContext"

export default () => {

    const { language, toggleLanguage } = useLanguage()
    
    return (
        <div className="flex justify-between items-center  py-10">
            <div>
                <h1 className="text-secondary text-[18px] md:text-[24px] font-bold"> { language == "ar" ? "مستشفى أطباء بورتسودان " : "Port Sudan Doctors Hospital" }</h1>
            </div>
            <div className="flex space-x-2 space-x-reverse ">
                <div className=" w-[32px] cursor-pointer" onClick={() => toggleLanguage()} >
                    <img src="/language.png" className="w-full" />
                </div>
                <div>{language == "en" ? "EN" : "Ar"}</div>
            </div>
            <Link href="/booking" ><div className="bg-primary text-white rounded-[8px] py-2 px-3">
                <svg className=" cursor-pointer ml-2 inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_1808)">
                        <path d="M17.5017 1.14282H14.9236V2.73751H16.7043V6.29898C16.7043 8.98098 14.5222 11.1628 11.8405 11.1628H11.4684C8.78643 11.1628 6.60464 8.9807 6.60464 6.29898V2.73751H8.38537V1.14282H5.80729C5.3669 1.14282 5.00995 1.49978 5.00995 1.94017V6.29898C5.00995 9.86017 7.90725 12.7575 11.4684 12.7575H11.8405C15.4017 12.7575 18.299 9.86017 18.299 6.29898V1.94017C18.299 1.49978 17.9421 1.14282 17.5017 1.14282Z" fill="white" />
                        <path d="M14.8439 0C14.4035 0 14.0465 0.356953 14.0465 0.797344V3.02991C14.0465 3.4703 14.4035 3.82725 14.8439 3.82725C15.2842 3.82725 15.6412 3.4703 15.6412 3.02991V0.797344C15.6412 0.356953 15.2842 0 14.8439 0Z" fill="white" />
                        <path d="M8.54484 0C8.10445 0 7.7475 0.356953 7.7475 0.797344V3.02991C7.7475 3.4703 8.10445 3.82725 8.54484 3.82725C8.98523 3.82725 9.34218 3.4703 9.34218 3.02991V0.797344C9.34218 0.356953 8.98523 0 8.54484 0Z" fill="white" />
                        <path d="M12.505 16.4521V11.9338H10.9103V16.4521H8.3322C6.25114 16.4521 4.55811 18.1451 4.55811 20.2259C4.55811 22.307 6.26309 24 8.35878 24H8.73087C10.8119 24 12.505 22.307 12.505 20.2259V18.0468H15.2159V16.4521H12.505ZM10.9103 20.2256C10.9103 21.4272 9.93246 22.4051 8.73087 22.4051H8.35878C7.12184 22.4051 6.15279 21.448 6.15279 20.2256C6.15279 19.0241 7.13061 18.0465 8.3322 18.0465H10.9103V20.2256Z" fill="white" />
                        <path d="M16.9436 14.7512C15.5663 14.7512 14.4455 15.8718 14.4455 17.2496C14.4455 18.6268 15.566 19.7476 16.9436 19.7476C18.3211 19.7476 19.4419 18.6268 19.4419 17.2496C19.4419 15.872 18.3214 14.7512 16.9436 14.7512ZM16.9436 18.1527C16.4455 18.1527 16.0402 17.7474 16.0402 17.2493C16.0402 16.751 16.4455 16.3457 16.9436 16.3457C17.4419 16.3457 17.8472 16.751 17.8472 17.2493C17.8472 17.7474 17.4419 18.1527 16.9436 18.1527Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_1808">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span>{ language == "ar" ? "حجز موعد" : "Appointment"}</span>
            </div>
            </Link>
        </div>
    )
}