import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import { Link } from 'gatsby'
import Button from '../components/button'
import Gallery from '../components/gallery'

const NewClientAcneConsultation = () => {
    return(
        <>
            <Banner  
                heading="New Client Acne Consultation"
                gradient="from-black/50 via-black/30 to-black/10"
                caption="Let's talk about your skin care goals and concerns. You may book a consultation in combination with your initial skin treatment session or simply just a consultation to get started."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/newClientConsultHeader.jpg?raw=true"/>}
            />
                        <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Your First Consultation</h1>
                    <h4 className="mt-2 mb-4">Let's talk about your skin care goals and concerns. You may book a consultation in combination with your initial skin treatment session or simply just a consultation to get started.</h4>
                    <p className="my-1">
                    We will take appx. 45 minutes to do a general evaluation of your skin, go over skin history, and talk about your skin care goals and concerns. At that time we can discuss long or short term treatment options and outcome expectations. Your commitment to your acne treatment program will determine your results.  
                    </p>
                    <p className="my-1">
                    Our Acne Treatment enhances epidermal balance, helps shrink large pores and rapidly improves the skin’s appearance and texture. It helps to fight pimples, clear blackheads, loosen cysts and reduce dark spots. It also erases mild to moderate acne scars.  
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "new-client-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneConsultation.jpg?raw=true"
                    alt="Essence of Beauty New Client Acne Consultation" 
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>

            <div>
                <span>Before & After Treatment</span>
                <Gallery 
                    className="grid grid-col-1 md:grid-cols-4 gap-4"
                    imageClass="rounded-sm shadow-lg max-h-[400px]"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneConsultation1.jpg?raw=true" alt="Before & After Acne Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneConsultation2.jpg?raw=true" alt="Before & After Acne Treatment" />
                    ]}    
                />
            </div>
            <div id="new-client-info" className="p-4 lg:p-8">
                        <Card cardBodyClass="p-4" cardWrapperClass="mt-8 mb-4">
                        <h1 className="m-4">How It Works</h1>
                        <ul className="ml-8 list-disc">
                            <li className="my-1">
                            An acne assessment begins with a questionnaire that will capture your relevant  medical history. We will be taking pictures of the effective areas so that we can identify signs of improvement during future visits. 
                            </li>
                            <li className="my-1">
                            We recommend herbs and supplements to help re-balance the body from the inside out. We educate you on the lifestyle habits and choices that aggravate acne- like food, birth control pills (they do not always help acne), medications, prescriptions, and stress. Please be prepared to make a commitment to lifestyle changes. If you do, you will see results.  Acne treatment is a long term commitment of weekly or bi-weekly.    
                            </li>
                            <li className="my-1">
                            Expect to purchase your first set of acne products from us at your first appointment, in addition to your skin treatment costs. You must use OUR acne products.  All appointments are subject to a 48 hour cancellation/no show policy. <Link to="/practice-policies-form">Read policy here.</Link>  
                            </li>
                        </ul>
                        <div className="flex flex-col my-4 p-4">
                                <span>
                                    <strong className="mr-2 text-brown">
                                    Initial in Clinic Consultation 45 minutes includes one follow-up:
                                    </strong>
                                    $80
                                </span>
                                <span>
                                <strong className="mr-2 text-brown">
                                Follow-up 15 min consultation:
                                </strong>
                                $25                
                                </span>
                        </div>
                        </Card>
                    </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default NewClientAcneConsultation