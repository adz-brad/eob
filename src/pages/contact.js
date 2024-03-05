import React from 'react'
import { MdLocationPin, MdPhoneInTalk, MdAccessTimeFilled, MdLocalParking, MdPayments } from 'react-icons/md'
import { Link } from 'gatsby'
import Seo from '../components/seo'

const Contact = () => {
    return (
        <>

            <div
                className="flex flex-col lg:flex-row max-w-screen-xl my-16 mx-auto"
            >
                <div className="flex flex-col p-4 mb-4 lg:mb-0 lg:px-8 lg:py-0 lg:ml-4">
                    <h1 className="font-bold">Essence of Beauty</h1>
                    <div className="flex flex-row mt-8">
                        <MdLocationPin className="text-4xl text-green filter drop-shadow-lg -ml-1 mr-4 mt-2" />
                        <div className="flex flex-col my-2">  
                            <span>3626 Downpatrick Rd</span>
                            <span>Gloucester, Ontario</span>
                            <span>K1V 8Y9</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <MdPhoneInTalk className="text-4xl text-green filter drop-shadow-lg -ml-1 mr-4 mt-2" />
                        <div className="flex flex-col my-2">
                            <span className="mt-2"><strong>Phone:</strong> <a href="tel:+16132202101">(613) 220-2101</a></span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <MdAccessTimeFilled className="text-4xl text-green filter drop-shadow-lg -ml-1 mr-4 mt-2" />
                        <div className="flex flex-col my-2">
                            <span className="my-2"><strong>Hours of Operation:</strong></span>
                            <span><strong className="mr-2">Wednesday - Friday</strong>10:00am - 6:30pm</span>
                            <span><strong className="mr-2">Saturday - Tuesday</strong>Closed</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <MdLocalParking className="text-4xl text-green filter drop-shadow-lg -ml-1 mr-4 mt-2" />
                        <div className="flex flex-col my-2">
                            <span className="my-2"><strong>Parking</strong></span>
                            <span>Free Parking</span>

                        </div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <MdPayments className="text-4xl text-green filter drop-shadow-lg -ml-1 mr-4 mt-2" />
                        <div className="flex flex-col my-2">
                            <span className="my-2"><strong>Payment</strong></span>
                            <span>Debit, E-transfer and cash accepted only.</span>

                        </div>
                    </div>
                </div>
                <iframe
                    title="Essence of Beauty Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9424.968962117386!2d-75.67422041416864!3d45.38795971836509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05aba3e9e72f%3A0x4520727243764e04!2sAcne%20and%20Scars%20Revision%20Clinic-Pigmentation%2C%20Melasma%20Essence%20of%20Beauty!5e0!3m2!1sen!2sca!4v1660153843479!5m2!1sen!2sca"
                    allowfullscreen=""
                    loading="eager"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='h-[500px] lg:h-auto lg:w-1/2 lg:ml-8'
                />
            </div>
            <div
                className="flex flex-col max-w-screen-xl my-8 mx-auto bg-lightGreen p-4 lg:p-8"
            >
                <h1 className="font-bold mb-4">Essence of Beauty Policy</h1>
                <p className="my-2">
                    Please inform us of any medical condition you may have, including pregnancy, when making your appointment.
                </p>
                <p className="my-2">
                    Appointments are recommended to be made in advance so we can accommodate your specific requests. If your appointment needs to be re-arranged or cancelled, please notify us at least 48 hours ahead of time to avoid unnecessary charges. To fully enjoy your treatment, please arrive 10 minutes before your appointment.
                </p>
                <p className="my-2">
                    All appointments are subject to a 48 hour cancellation/no show policy.  <Link to="/practice-policies-form/" className="text-brown hover:text-green font-bold">Read policy here.</Link>
                </p>
            </div>
        </>
    )
}

export default Contact

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Contact Essence Of Beauty To Find Out How You Can See Amazing Skin Care Results!"
                pageDescription="Contact Essence of Beauty today to book your first consultation or treatment!"
                pageKeywords="No acid, acid free, chemical free, no chemicals, acne scarring, pigmentation, rosecea, skincare, treatment, sensitive skin, consultation, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/contact/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/contact/" />
        </>
    )
} 