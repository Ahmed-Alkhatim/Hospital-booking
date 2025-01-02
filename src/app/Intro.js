"use client"

import { useLanguage } from "./LangContext"


export default () => {
    const { language } = useLanguage()
    return(
        <div className="flex flex-wrap  justify-center md:justify-between items-center mt-20">
            <div className="w-[415px] mb-10">
                <img src="/doctor.png"/>
            </div>
            <div className={"md:w-1/2  text-center  font-bold space-y-5 " + (language == "ar" ? "md:text-right" : "md:text-left")}>
                <h1 className="text-secondary text-[24px]">{ language == "ar" ? "نظام الحجز الإلكتروني" : "Online booking system"}</h1>
                <p className="text-gray text-[16px]">
                { language == "ar" ?" يوفر طريقة سهلة وسريعة لحجز المواعيد الطبية عبر الإنترنت. يمكن للمرضى اختيار الأطباء، وتحديد المواعيد المناسبة، وإدارة حجوزاتهم بكل سهولة من أي مكان وفي أي وقت، مما يسهم في تحسين تجربة الرعاية الصحية وتوفير الوقت والجهد." : "It provides an easy and quick way to book medical appointments online. Patients can choose doctors, schedule suitable appointments, and manage their bookings easily from anywhere at any time, which contributes to improving the healthcare experience and saving time and effort."}
                </p>
            </div>
        </div>
    )
}