"use client"

import React, { useState, useEffect } from 'react';
const apiURL = 'http://127.0.0.1:8000/api'
import { useRouter } from 'next/navigation';

export default function BookingForm() {
   const router = useRouter()

    const [formData, setFormData] = useState({
        doctor: '',
        specialization: '',
        date: '',
        email: '',
        phone: '',
        patientName: '',
        address: '',
    });
    // const [isClient, setIsClient] = useState(false);  // State to handle client-side rendering
    const[doctors, setDoctors] = useState([])
    const[specials, setSpecials] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        
        const fetchData = async() => {
           setLoading(true)
            const DoctorResponse = await fetch(apiURL + '/GetAllDoctors', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': ' application/json',
                    'Authorization' : 'Bearer ' + "9|z880X3R8I2snaXTGOGl827NLmljl8g84bZabee1be614ac2e"
                }
            }).then( res => res.json());
            const SpecialResponse = await  fetch(apiURL + '/getAllSpecials', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': ' application/json',
                    'Authorization' : 'Bearer ' + "9|z880X3R8I2snaXTGOGl827NLmljl8g84bZabee1be614ac2e"
                }
            }).then( res => res.json());
        console.log("Success", DoctorResponse, SpecialResponse );
        
        setDoctors(DoctorResponse.doctor)
        setSpecials(SpecialResponse.special)
        setLoading(false)
       }
       fetchData()
        // setIsClient(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // add patient via fetch
        const response = await fetch(apiURL + '/AddPatient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + "9|z880X3R8I2snaXTGOGl827NLmljl8g84bZabee1be614ac2e"

            },
            body: JSON.stringify(formData)
        })
       .then(response => response.json())
       if(response.statusCode === 200) {
        alert("تم حجز موعدك بنجاح")
        setTimeout(() => {
            router.push('/')

        }, 2000)
        // reset the form
        setFormData({
            name: '',
            phone: '',
            date: '',
            specialization: '',
            doctor: ''
        })
        } else {
            alert("حدث خطأ ما. حاول مرة أخرى")
 
       }
        console.log("Success", response);
        
       
    };

    // // Only render the form if we're on the client
    if (loading) {
        return null;
    }

    return (
        <div className="mt-20 max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-6">حجز موعد</h2>
            <form onSubmit={handleSubmit} className="space-y-4">


                <div>
                    <label htmlFor="specialization" className="block mb-1 text-right font-medium">التخصص *</label>
                    <select
                        id="specialization"
                        name="specialization"
                        required
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">اختر التخصص</option>
                        { specials.map( special =>  <option value={special.special}>{ special.special } </option> )}
                    </select>
                </div>
                <div>
                    <label htmlFor="doctor" className="block mb-1 text-right font-medium">الطبيب *</label>
                    <select
                        id="doctor"
                        name="doctor"
                        required
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">اختر الطبيب</option>
                       { doctors.map( doctor =>  <option value={doctor.name}> { doctor.name } </option> )}
                  
                    </select>
                </div>

                <div>
                    <label htmlFor="date" className="block mb-1 text-right font-medium">التاريخ *</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 text-right font-medium">البريد الإلكتروني *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-1 text-right font-medium">رقم الهاتف *</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="patientName" className="block mb-1 text-right font-medium">اسم المريض *</label>
                    <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        required
                        value={formData.patientName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="address" className="block mb-1 text-right font-medium">العنوان *</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    حجز
                </button>
            </form>
        </div>
    );
}
