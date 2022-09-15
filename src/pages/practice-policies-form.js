import React, { useState } from 'react'
import Seo from '../components/seo'

const PracticePolicies = () => {

    const d = new Date()

    const provinces = [
        "Alberta", 
        "British Columbia", 
        "Manitoba", 
        "New Brunswick",
        "Newfoundland / Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan"
    ]

    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: provinces[6],
        postalCode: '',
        date: d.toString(),
        consent: false,
        signature: null
    })

    return(
        <>
        
        <Seo
        pageTitle="Practice Policies Form"
        pageDescription="Essence of Beauty Practice Policies form for new clients."
        pageKeywords="Practice Policies, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/practice-policies-form"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
        />
        <div className="flex flex-col p-4 md:p-8 max-w-screen-xxl mt-8 mx-auto">
            <h1 className="text-center mt-4 md:mt-8 font-bold">Practice Policies</h1>
            <h2 className="text-center my-2">Welcome to Essence of Beauty Acne Clinic</h2>
            <div className="flex flex-col my-4">
                <h3 className="my-4 font-semibold">General Information:</h3>
                <p className="mt-1 mb-2">
                Because of the high level of services we deliver, we maintain strict policies that must be followed. Much effort, attention to detail and time is needed for us to deliver this type of care. What follows is an outline of these policies and clarification of what we could and could notdo for you. Please review carefully. We ask that you do not ask us to make exceptions.
                </p>
                <p className="mt-1 mb-2">
                At Essence of Beauty Acne Clinic we are focusing on providing you with highly effective acne treatment services and products that will deliver results. Unlike traditional dermatology practices that focus only treating the symptoms and not the underlying causesof the acne, we take anatural approach in order to help clear up the skin.
                </p>            
                <p className="mt-1 mb-2">
                It is important for you to understand that certain dietary and lifestyle changes are necessary in order to manage your acne and keep it under control. We will give you all the guidance you need for you to clear up your skin. In return, we expect to be consistent with your home care routine and do your best to make the lifestyle we recommend
                </p>
            </div>
            <div className="flex flex-col my-4">
                <h3 className="my-4 font-semibold">Required Forms:</h3>
                <p className="mt-1 mb-2">
                In order to serve our clients with the utmost attention, we like to take all of the preparation necessary for our first meetingtogether. We require all new in-clinic and virtual clients to complete the following forms within 48 hours of their scheduled appointment.
                </p>
                <p className="mt-1 mb-2">
                If you fail to fill out these form within 48 hours before your first visit, your appointment can not be guaranteed:
                </p>            
                <ul className="list-disc ml-4 my-1">
                    <li className="my-1">
                    Consultation Form
                    </li>
                    <li className="my-1">
                    Practice Policies Form
                    </li>
                </ul>
            </div>
            <div className="flex flex-col my-4">
                <h3 className="my-4 font-semibold">
                Deposit & Payment:</h3>
                <p className="mt-1 mb-2">
                When booking a first time <strong>in-clinic appointment</strong>, we require a deposit on hold in order to maintain your appointment time. The amount of the deposit is 50% of the full appointment price payed by credit card(on hold). If you cancel your appointment less the 48 hours you will lose the deposit.
                </p>
                <p className="mt-1 mb-2">
                When booking a first time <strong>virtual appointment</strong>, we require a full payment up front in order to maintain your appointment time. If you cancel your appointment less the 48 hours you will lose the payment.
                </p>            
            </div>
            <div className="flex flex-col my-4">
                <h3 className="my-4 font-semibold">Cancellation:</h3>
                <p className="mt-1 mb-2">
                Essence of Beauty Acne Clinic offers services by appointment only where we reserve time and space especially for you. In order to respect each other’s time and efforts the following needs to be enforced.
                </p>         
                <ul className="list-disc ml-4 my-1">
                    <li className="my-1">
                    <strong>All appointment cancellations:</strong> We require a minimum of 48 hours of notice for canceling or rescheduling any client appointment.
                    </li>
                    <li className="my-1">
                    <strong>No shows:</strong> If you do not show up for your appointment, you will still be charged 100% of the treatment price
                    </li>
                </ul>
                <p className="mt-1 mb-2">
                We ask that you please let us know as soon as possible if you need to cancel or reschedule so we may offer your appointment to someone on the waiting list.
                </p>
                <p className="mt-1 mb-2 font-bold">
                Failure to give appropriate notice of cancellation will result in 100% charge of the treatment price or deposit for new clients.
                </p>
                <p className="mt-1 mb-2">
                You may cancel your appointment by calling 613-220-2101 or email <a className="font-bold hover:text-green" href="mailto:essenceofbeauty.ca@gmail.com">essenceofbeauty.ca@gmail.com</a> with a subject line <b>“Cancellation”</b>.
                </p>
                <p className="mt-1 mb-2">
                For existing clients, we allow one (1) appointment to be canceled less than 24 hours at no charge for emergency purposes. After that, we are strictly enforcing our cancellation policy. We always confirm the appointment at least two (2) days before your scheduled appointment time through email, text or phone call, and <b>we require your receipt confirmation before 48 hours of the appointment time otherwise we reserve the right to give the appointment to the next client.</b> Make sure your voice mail is active and mailbox is not full. It is your responsibility to ensure that you are receiving our confirmation emails. If our confirmation emails are not showing up in your inbox, please contact us to ensure we have your right information on file.
                </p>
                <p className="mt-1 mb-2 font-bold">
                Please note we do not take any form of insurance!
                </p>
            </div>
            <div className="flex flex-col my-4">
                <h3 className="my-4 font-semibold">
                    Product Returns:
                </h3>
                <p className="mt-1 mb-2">
                All purchased products may be returned within 14 days for a full refund, provided they have not been opened or unsealed.
                </p>          
            </div>
            <div className="flex flex-col my-4">
                <h3 className="my-4 font-semibold">
                    Late Arrival:
                </h3>
                <p className="mt-1 mb-2">
                Arriving late takes precious time away from your treatment. Although we will make every effort to accommodate your full appointment, this may not always be possible. As a courtesy to following clients, late arrivals will only receive the remaining available appointment time and will be charged in full.
                </p>          
                <p className="mt-1 mb-2">
                Please review our practice policies fully and sign the necessary documents to confirm your understanding of it.  
                </p>
                <p className="mt-1 mb-2">
                By giving your e-signature, you agree to our policies and authorize Essence of Beauty Spa LTD to charge your credit card on file for missed visits, no shows, late cancellations or late arrivals. As well, this will also authorize the use of the before and after pictures to track your progress.
                </p>      
            </div>
            <form name="PracticePolicies" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value="PracticePolicies" />
            <div className="my-4 md:my-8">
                <h1 className="text-center my-4 md:my-8">Practice Policies Consent Form</h1>
                <div className="flex flex-col md:flex-row md:justify-center max-w-screen-lg mx-auto">
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="firstName"
                            className="text-sm ml-1 font-bold"
                        >
                            First Name
                        </label>
                        <input 
                            id="firstName"
                            name="firstName"
                            type="text" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({
                                firstName: e.target.value,
                                lastName: formData.lastName,
                                email: formData.email,
                                phone: formData.phone,
                                address: formData.address,
                                city: formData.city,
                                province: formData.province,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="lastName"
                            className="text-sm ml-1 font-bold"
                        >
                            Last Name
                        </label>
                        <input 
                            id="lastName"
                            name="lastName"
                            type="text" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.lastName}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: e.target.value,
                                email: formData.email,
                                phone: formData.phone,
                                address: formData.address,
                                city: formData.city,
                                province: formData.province,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center max-w-screen-lg mx-auto">
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="email"
                            className="text-sm ml-1 font-bold"
                        >
                            Email
                        </label>
                        <input 
                            id="email"
                            name="email"
                            type="email" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.email}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                email: e.target.value,
                                phone: formData.phone,
                                address: formData.address,
                                city: formData.city,
                                province: formData.province,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="phone"
                            className="text-sm ml-1 font-bold"
                        >
                            Phone
                        </label>
                        <input 
                            id="phone"
                            name="phone"
                            type="tel" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.phone}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                email: formData.email,
                                phone: e.target.value,
                                address: formData.address,
                                city: formData.city,
                                province: formData.province,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center max-w-screen-lg mx-auto">
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="streetAddress"
                            className="text-sm ml-1 font-bold"
                        >
                            Street Address
                        </label>
                        <input 
                            id="streetAddress"
                            name="streetAddress"
                            type="text" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.address}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                email: formData.email,
                                phone: formData.phone,
                                address: e.target.value,
                                city: formData.city,
                                province: formData.province,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="city"
                            className="text-sm ml-1 font-bold"
                        >
                            City
                        </label>
                        <input 
                            id="city"
                            name="city"
                            type="text" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.city}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                email: formData.email,
                                phone: formData.phone,
                                address: formData.address,
                                city: e.target.value,
                                province: formData.province,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center max-w-screen-lg mx-auto">
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="province"
                            className="text-sm ml-1 font-bold"
                        >
                            Province
                        </label>
                        <select 
                            id="province"
                            name="province"
                            className="border border-black/20 rounded-md shadow-sm p-2" 
                            value={formData.province}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                email: formData.email,
                                phone: formData.phone,
                                address: formData.address,
                                city: formData.city,
                                province: e.target.value,
                                postalCode: formData.postalCode,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        >
                            {provinces.map((province, i) => {
                                return(
                                    <option key={i} value={province}>{province}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col md:w-1/2 m-2 md:m-4">
                        <label 
                            htmlFor="postalCode"
                            className="text-sm ml-1 font-bold"
                        >
                            Postal Code
                        </label>
                        <input 
                            id="postalCode"
                            name="postalCode"
                            type="text" 
                            className="border border-black/20 rounded-md shadow-sm px-4 py-2" 
                            value={formData.postalCode}
                            onChange={(e) => setFormData({
                                firstName: formData.firstName,
                                lastName: formData.lastName,
                                email: formData.email,
                                phone: formData.phone,
                                address: formData.address,
                                city: formData.city,
                                province: formData.province,
                                postalCode: e.target.value,
                                date: formData.date,
                                consent: formData.consent,
                                signature: formData.signature
                            }) }
                        />
                    </div>
                </div>
                <div className="flex flex-col max-w-screen-lg mx-auto p-3 md:p-5">
                    <h5>Consent</h5>
                    <div className="flex flex-row items-center">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        className="scale-125"
                        checked={formData.consent}
                        onChange={(e) => setFormData({
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            phone: formData.phone,
                            address: formData.address,
                            city: formData.city,
                            province: formData.province,
                            postalCode: formData.postalCode,
                            date: formData.date,
                            consent: e.target.checked,
                            signature: formData.signature      
                        })}
                    />
                    <label 
                        htmlFor="consent"
                        className="ml-4 text-sm md:text-base md:ml-2"
                    >
                    I have read, understood and agree to the Essence of Beauty Practice Policy
                    </label>
                    </div>
                </div>
        </div>
<div className="flex flex-col items-center">
<button 
            type="submit"
            className="buttonLight mt-8"
        >
            Submit
        </button>
</div>

        </form>
    </div>
    </>
    )
}

export default PracticePolicies