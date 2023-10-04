import React from "react";
import Contact from '../contact'
import Share from "../social";
import { FaFacebookF, FaPinterestP, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

    return(
        <>
        <Share/>
        <div className="flex flex-col bg-green mt-12 rounded-t-lg shadow-lg">
        
        <div className="formDivide"/>
        <div className="mx-auto max-w-screen-xl pt-6 pb-14" id="contact">

            <div className="flex flex-col items-center my-10 mx-5 md:mx-2">
                <h1 className="font-bold mb-4 text-3xl md:text-4xl">Let's Get In Touch</h1>
                <p className="font-medium md:text-lg">Contact us to book an appointment or for a consultation to discuss the best treatment for your skin.</p>
            </div>

                <Contact/>

        </div>

        <div className="bg-green rounded-t-lg shadow-lg p-4 pb-8 -mt-4">
            <div className="flex flex-col md:flex-row max-w-screen-xxl mx-auto">
            <div className="md:w-1/3 p-4">
                <h2 className="border-b border-black pb-1 text-lg md:text-2xl">Location</h2>
                <div className="flex flex-col my-4 leading-tight">
                    <span>3626 Downpatrick Rd</span>
                    <span>Gloucester, Ontario</span>
                    <span>K1V 8Y9</span>
                </div>
            </div>
            <div className="md:w-1/3 p-4">
                <h2 className="border-b border-black pb-1 text-lg md:text-2xl">Hours</h2>
                <div className="flex flex-col my-4 leading-tight">
                    <span><strong>Wednesday</strong> - <strong>Friday:</strong>10:00am - 6:30pm</span>
                    <span><strong>Saturday</strong> - <strong>Tuesday:</strong> Closed</span>
                </div>
            </div>
            <div className="md:w-1/3 p-4">
                <h2 className="border-b border-black pb-1 text-lg md:text-2xl">More Info</h2>
                <div className="flex flex-col my-4 leading-tight">
                <span><strong>Parking</strong></span>
                <span>Paid parking at the building.</span>
                </div>
                <div className="flex flex-col my-4 leading-tight">
                <span><strong>Payment</strong></span>
                <span>Debit, E-transfer and cash accepted only.</span>
                </div>
                <div className="flex flex-row space-x-2 text-2xl items-center">
                <a 
                    href="https://www.facebook.com/essenceofbeautyottawa" 
                    className="hover:text-brown" 
                    alt="Essence of Beauty Facebook"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebookF />
                </a>
                <a 
                    href="https://www.instagram.com/essenceofbeauty.ottawa/" 
                    className="hover:text-brown" 
                    alt="Essence of Beauty Instagram"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
                <a 
                    href="https://www.pinterest.ca/essenceofbeautyottawa/" 
                    className="hover:text-brown" 
                    alt="Essence of Beauty Pinterest" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaPinterestP />
                </a>
                <a 
                    href="https://www.linkedin.com/company/essence-of-beauty-ottawa/" 
                    className="hover:text-brown" 
                    alt="Essence of Beauty LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedinIn />
                </a>
            </div>
            </div>
            </div>
        </div>
   
        <div className="text-sm bg-darkGreen text-white font-light md:text-center p-4 rounded-t-lg shadow-lg -mt-2">
        Holistic, Natural, Organic Skin Treatments & Rejuvenation | © 2018 Essence of Beauty. Powered by <a href="https://www.adrenalizedigital.ca" target="_blank" rel="noreferrer" className="ml-1 font-normal hover:text-green">Adrenalize Digital</a>.
        </div>

        </div>
        </>
    )
}

export default Footer