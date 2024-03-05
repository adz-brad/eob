import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Button from '../components/button'
import Card from '../components/card'
import Gallery from '../components/gallery'
import Accordion from '../components/accordion'
import Seo from '../components/seo'

const VirtualAcneProgram = () => {
    return (
        <>

            <Banner
                heading="Virtual Acne Program"
                image={<StaticImage alt="Essence of Beauty Ottawa - Virtual Acne Program" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/virtualAcneHeader.png?raw=true" />}
                noFade
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Treat Your Acne With Amazing Results, Virtually!</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Essence of Beauty Ottawa uses products from AnteAGE® stem-cell based skincare and microchanneling to help treat acne & more, all from the comfort of your home.</h2>
                    <p className="my-1">
                        Our virtual acne program and coaching is the solution for our long distance acne clients who are unable to come into our Ottawa clinc, especially during Covid-19 social distancing. This program is designed to be a convenient, highly effective step-by-step system that includes coaching and education using the right products with the right ingredients in order to achieve real results. The key to your success is your consistency and commitment to your plan, since this will determine the clients results.
                    </p>
                    <p className="my-1">
                        The Virtual and <Link to="/holistic-acne-clinic-ottawa/">Holistic Acne Treatment Programs</Link> are effective for all types of acne and were created for people who are absolutely excited and serious about getting their acne under control. They are ready to end their struggles and frustrations dealing with their embarrassment of their problem skin. Please be prepared to make a commitment to lifestyle changes. If you do, you will see results. Achieving acne free, clear skin is not an overnight process!!! It requires patience and compliance. But if you follow our recommendations and be consistent with your home-care, you will achieve great results.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "virtual-acne-program-faq" }}
                        className="buttonLight my-4"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/benefits.jpg?raw=true"
                    alt="Essence of Beauty Virtual Acne Clinic"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>


            <div className="flex flex-col p-4 md:p-8">
                <Card cardWrapperClass="my-8" cardBodyClass="p-4 md:px-8">
                    <h2 className="text-2xl md:text-4xl mt-4 mb-4 lg:text-3xl">More Than Just Products</h2>
                    <p className="my-1">
                        As an extension of the in-house holistic acne program, the virtual program is designed to be a convenient, highly effective step-by-step system that features:
                    </p>
                    <ul className="list-disc ml-4 my-4">
                        <li className="my-1">
                            Coaching and education using the right products with the right ingredients in order to achieve real results.
                        </li>
                        <li className="my-1">
                            Virtual consultation through Zoom or Skype to help you learn about what is causing your acne and educate you on how to keep it under control.
                        </li>
                        <li className="my-1">
                            Online follow-up appointments where you will receive the same care and attention that you would receive during my in-clinic appointment.
                        </li>
                    </ul>
                </Card>
                <div className="p-4 lg:p-8 flex flex-col items-center">
                    <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                    <span className="mb-8">Comparing before & after treatment</span>

                    <Gallery
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8"
                        imageClass="rounded-sm shadow-md"
                        images={[
                            <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/holisticAcne1.jpg?raw=true" alt="Virtual Acne Program Before & After Treatment Image" />,
                            <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/holisticAcne4.jpg?raw=true" alt="Virtual Acne Program Before & After Treatment Image" />,
                            <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/holisticAcne6.jpg?raw=true" alt="Virtual Acne Program Before & After Treatment Image" />
                        ]}
                    />

                </div>
            </div>
            <div id="virtual-acne-program-faq" className="p-4 lg:p-8 flex flex-col items-center lg:m-8">
                <h2 className="text-2xl md:text-4xl mt-4 mb-8">Acne Treatment FAQ</h2>
                <Accordion
                    className="p-4 md:p-8 bg-white"
                    items={[
                        {
                            heading: 'How does a virtual consultation work?',
                            content:
                                <>
                                    <p className="my-1">
                                        To begin the process, please email or call me to purchase your virtual consultation, this will schedule you a Zoom or Skype appointment. All appointments are booked here, requiring FULL payment upfront in order to secure your date and time. You should receive a notification in your email with the appointment information and link to connect with me via Zoom or Skype. Also, I will email you the questionnaire form for you to fill out. The more detailed information you provide me, the better! Please ensure you do these appointments with a fresh clean face, no makeup. Your Virtual Appointments will be booked during our business hours listed below. This will guarantee our clients valuable time together. All appointments are subject to a 48 hour cancellation/no show policy. <Link to="/practice-policies-form/">Read policy here.</Link>
                                    </p>
                                    <p className="my-1">
                                        It is important to send me some close-up pictures of your skin in natural light so that I could analyze your skin for the best recommendations. No filters, please.
                                    </p>
                                    <p className="my-1">
                                        Your new 45 minutes client virtual consultation will cost $80.00 which includes one follow-up phone call 3-4 weeks after your initial consultation, to check your progress. In addition, you will purchase homecare products which will be tailor-made for you. These products will cost $120-$250 (approx.8-12 weeks worth of products), shipping costs apply. These products are an essential part of getting your skin clear and your acne under control. We do not offer a program without homecare product purchase.
                                    </p>
                                    <p className="my-1">
                                        For this program, if you are under 19, you must be accompanied by a parent or guardian at your initial appointment, in order to assess whether you will qualify.
                                    </p>
                                    <strong className="my-1 italic">
                                        Note: You must be off Accutane for three months prior to doing our Virtual Online Acne Consultation
                                    </strong>
                                </>
                        },
                        {
                            heading: 'What to expect during your first acne clinic consultation?',
                            content:
                                <>
                                    <p className="my-1">
                                        During your initial consultation, I will review your acne history and determine acne type. I will go over factors that make you break out – foods, medications, cosmetics, stress, etc. Educate you on lifestyle habits and choices that aggravate acne. What you are currently using (products, medications, diet, supplements and past treatments) as your home-care routine and what you have used in the past for your acne will be important for us to know. Also I will recommend high quality supplements to help re-balance the body from the inside out and home car0e products that you will need for your skin to clear.
                                    </p>
                                    <p className="my-1">
                                        Based on our analysis of your skin and acne history, I will create a home-care routine for you. You will be thoroughly educated on how and when to use each step of your routine. I will review and discuss any acne triggers or lifestyle changes which we feel you may need to make to get your skin clear. I may also recommend a Facial Treatment during your consultation, since I feel that it is important to control your acne from the inside out.
                                    </p>
                                    <h3 className="my-1">
                                        Follow-up sessions are $25
                                    </h3>
                                    <p className="my-1">
                                        Check-in sessions to update your home care and to address any concerns you have with your skin. These are 15 minutes prescheduled sessions once every 2 weeks that will be held through phone, Zoom or Skype, whichever you prefer. These types of appointments will be ongoing until your skin is clear
                                    </p>
                                    <p className="my-1">
                                        These sessions are going to be very important to achieve your skin care goals. Depending on your skin’s progress we may need to routinely adjust your product usage. This may include changing the strengths, adding or removing products or reducing the amount of the existing ones. These follow up sessions are a key component towards achieving your skin care goals and having a successful home care routine.
                                    </p>
                                </>
                        },
                        {
                            heading: "What makes your system of acne management any more effective than what I've already tried?",
                            content:
                                <>
                                    <p className="my-1">
                                        Our unique philosophy is based on analyzing the skin and body as a whole, treating skin conditions at the source to restore beauty and wellness. We provide the tools needed to create the ideal environment to encourage real results while teaching you the most important causes of skin decline to help guide prevention for the future. We are using ingredients in the products in a very specific way to reinforce the skin and improve your overall wellness providing long-term results. Every ingredient is clean from toxins and nasties.
                                    </p>
                                    <p className="my-1">
                                        We want to use skin care products that your skin can tolerate and have you use them in a way that your skin can adapt to easily without causing any irritation and too much dryness. We then have to make sure your skin does not over-adapt and stops responding to the home-care.
                                    </p>
                                    <p className="my-1">
                                        That’s why we require frequent check-ins and communication with you to make sure your program is on track. Acne is a very tricky disease and requires close monitoring. We want to provide you with all the guidance and tools you need.
                                    </p>
                                </>
                        },
                        {
                            heading: 'Why work with us?',
                            content:
                                <ul className="list-disc ml-4">
                                    <li className="my-1">

                                        We take our time with you and listen to all of your skin concerns. We will be there for you every step of the way to guide you through all the steps you need to take in order to get the clear skin you deserve.
                                    </li>
                                    <li className="my-1">
                                        We monitor your progress and always return a phone call whenever you need assistance with the program. We encourage you to contact me whenever you feel you are not on the right track or something is not working with your skin.
                                    </li>
                                    <li className="my-1">
                                        We work with the best acne products, supplements and in clinic treatments available to treat your skin. All home care protocols will be created for your skin on an individual basis. As your skin changes so will your protocol!
                                    </li>
                                    <li className="my-1">
                                        We have the best acne products that do not require a prescription.
                                    </li>
                                </ul>
                        },
                        {
                            heading: 'How long until I will start to see results?',
                            content:
                                <>
                                    <h3 className="my-1">Results take time!</h3>
                                    <p className="my-1">
                                        Results typically take a four-six months period to achieve significant clearing. Ideally this combines in-office treatments and home care. Because virtual clients may not be able to receive in-clinic treatments and regular extractions, results may take a bit longer. However, significant and true lasting results will come from your dedication. Our product lines are backed by science and made with quality ingredients and formulations. There are endless cases showing their effectiveness and documented scientific proof of their successful results. With your commitment to the products and the program, you are sure to see results! Please be prepared to make lifestyle changes!
                                    </p>
                                    <strong className="my-1">
                                        Our priority is to get your skin clear in record time.
                                    </strong>
                                </>
                        }
                    ]}
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default VirtualAcneProgram

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Virtual Acne Program Ottawa - Clear Acne, Rosacea & Other Skin Problems From Home!"
                pageDescription="Not able to come into our Ottawa clinic for hands on treatment? You can still achieve great results for acne treatment with the Virtual Acne Program, an extension of the in-house program that experience has shown is successful in clearing acne."
                pageKeywords="Virtual, Remote, Heal at Home, Remote, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/virtual-acne-program/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/benefits.jpg?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/virtual-acne-program/" />
        </>
    )
} 