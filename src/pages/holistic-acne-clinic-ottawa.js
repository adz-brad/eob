import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Accordion from '../components/accordion'
import Card from '../components/card'
import Seo from '../components/seo'
import holisticAcneVideo from '../assets/video/holisticAcneVideo.webm'

// Helper function to extract plain text from JSX elements
const extractTextFromJSX = (element) => {
  if (typeof element === 'string') {
    return element
  }
  if (typeof element === 'number') {
    return String(element)
  }
  if (!element || !element.props) {
    return ''
  }
  if (element.props.children) {
    if (Array.isArray(element.props.children)) {
      return element.props.children.map(child => extractTextFromJSX(child)).join(' ')
    }
    return extractTextFromJSX(element.props.children)
  }
  return ''
}

const HolisticAcneProgram = () => {

    return (
        <>

            <Banner
                heading="Holistic Acne Clinic"
                gradient="from-black/20 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Holistic Acne Treatment" src="../assets/images/holisticAcneClinic.jpg" />}
            />
            <section className="" aria-labelledby="holistic-acne-heading">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="flex flex-col lg:w-1/2 lg:mx-auto lg:mr-8 p-4 md:p-8 lg:px-16">
                        <h1 id="holistic-acne-heading" className="text-2xl md:text-4xl my-2 font-bold">Holistically Treat Your Acne At Essence of Beauty Ottawa!</h1>
                        <h2 className="text-xl md:text-2xl mb-4 subheader">If you are struggling with acne, acne scarring or other skin issues, your typical acne facial products might not be cutting it.</h2>
                        <p className="my-2">
                            Essence of Beauty Ottawa clinic specializes in clearing acne, acne scars, pigmentation and skin problems that dermatologists and other traditional methods have not been able to clear. <strong>Don’t give up on your skin!</strong> Our personalized acne & skin treatment protocols include an array of cutting edge treatments, from non-invasive facials designed specifically for those with sensitive skin to the most modern, holistic, organic & <b>NATURAL</b> regiments. Essence of Beauty treatments are designed & developed through years of research and proven to work through years of successfully treating satisfied, happy clients!
                        </p>
                        <p className="my-2"><i>
                            "Skin has always been my passion and my clients’ satisfaction is my delight. Years of experience with the most aggressive acne has made me an expert in another by-product of damage and inflammation. My Acne Treatment Program uses a comprehensive approach to treat acne, acne scars and restore healthy skin. Sensitive skin and acne rosacea are taken into consideration."</i> - A Message From Eva, Your Personal Skincare Professional at Essence of Beauty Ottawa
                        </p>
                        <Button
                            data={{ text: "Learn More", anchor: "holistic-acne-different-approach" }}
                            className="buttonLight mt-8 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <video autoPlay playsInline controls muted className="w-full" aria-label="Holistic acne treatment video">
                            <source src={`${holisticAcneVideo}#t=17`} type="video/webm" />
                        </video>
                    </div>
                </div>
            </section>
            <section className="bg-lightGreen rounded-lg shadow-lg flex flex-col lg:flex-row lg:py-8" id="holistic-acne-different-approach" aria-labelledby="different-approach-heading">
                <div className="flex flex-col lg:w-2/3 p-4 md:p-8 lg:px-16">
                    <h2 id="different-approach-heading" className="text-2xl md:text-4xl mb-4 filter drop-shadow-md">A Different Approach To Treating Acne</h2>
                    <p className="my-1">
                        My approach towards acne treatment is different than most because I believe educating the client about their skin condition is key. Understanding there are many variables in what causes acne to form, is the best way to control it. My training as an Acne Specialist, combined with my extensive knowledge of environmental and nutritional acne triggers allow me to successfully assist my clients take control of their acne without prescription drugs. I work closely with each individual taking into consideration their type of acne, skin type, diet, and overall health and life style choices to develop their customized skin care protocol.
                    </p>
                    <p className="my-1">
                        My in-clinic acne treatments all include deep pore cleansing (exfoliation and extraction), lymphatic drainage, dermal cellular waste removal and healing of the skin.  Each of my procedures effectively reduces pimples, redness, inflammation, acne scars, resolve pigmentation issues  and help the skin rebalance. You should start to see results after one or two acne facials. However, you may need to make multiple visits to achieve desired results depending on the severity of the breakout. While I am all about your health and wellness, don’t think for a minute that my approach is wimpy.
                    </p>
                    <p className="my-1">
                        I mean business when it comes to clearing your skin. My specific proven process is easy to follow, when done correctly, garnishes huge results for you.
                    </p>
                </div>
            </section>
            <section className="p-4 md:p-8 my-8" aria-labelledby="how-it-works-heading">
                <Card cardBodyClass="flex flex-col p-4 lg:p-8">
                    <h2 id="how-it-works-heading" className="text-2xl md:text-4xl mb-4 filter drop-shadow-md">How It Works</h2>
                    <p className="my-2">
                        When you come to us for your initial visit, we will do a thorough consultation including products you are using, lifestyle, diet and other treatments and products you have tried.  We will decide on the products that will be best for your skin and acne type.  You will receive an acne treatment every 1-2 weeks for the first 8 weeks then we do on a monthly basis, most clients see completely clear skin in 4-6 months This is a time where you will see significant changes in your skin. In order for this to work, you must be willing to make lifestyle and product changes with the program.  If you are willing to do the work, your life can change. Expect to make dietary changes to manage your acne.
                    </p>
                    <p className="my-2">
                        We require that you be willing to use our products exclusively and follow our protocols and guidelines.  The results you want won’t happen if you are using other products.  We also ask that you have a coachable spirit.  This means that you must be willing to check in with us every 1-2 weeks, even if you can’t make your appointment.  We need to know if you have any allergic reactions, are becoming over sensitive or too dry. Also soon after starting with your new regimen (usually within 2-3 weeks) your skin will get used to what you are doing so we will need to “amp up” the regimen. This may mean adding another product, increasing frequency of use of a product you are currently using or layering a few active products. As your Acne Specialist, this is my job to guide you through these changes. If we did not make these bi-weekly adjustments your skin might stop improving.
                    </p>
                </Card>
            </section>
            <section className="flex flex-col items-center p-4 md:p-8" aria-labelledby="results-heading">
                <h2 id="results-heading" className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</h2>
                <span className="mb-8">Comparing before & after 4 acne treatments</span>
                <Gallery
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="../assets/images/holisticAcne1.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne2.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne3.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne4.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne5.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne6.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne7.jpg" alt="Holistic Acne Program Before & After Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcne8.jpg" alt="Holistic Acne Program Before & After Treatment Image" />
                    ]}
                />
            </section>
            <section className="p-4 lg:p-8 flex flex-col items-center lg:m-8" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-2xl md:text-4xl mt-4 mb-8">Frequently Asked Questions</h2>
                <Accordion
                    className="p-4 md:p-8 bg-white"
                    items={[
                        {
                            heading: 'How Often Should I Come in for Acne Treatment?',
                            content: <p>In order to get clear as fast as possible, we recommend coming in for acne treatment every 1-4 weeks. The purpose of treatment is to accelerate exfoliation, extract acne plugs as they surface, hydrate the skin and assess your home care routine.</p>
                        },
                        {
                            heading: 'What Is the Key to Clear Skin?',
                            content: <p>Your diligence using the right acne-safe products, and getting regular professional acne treatments with extractions is the key to clear skin!</p>
                        },
                        {
                            heading: 'Can You Get Rid of Acne Scars?',
                            content: <p>What most people consider acne “scars” are actually red, purple or brown marks left behind by old acne lesions. These are not true acne scars. This is called Post Inflammatory Hyperpigmentation (PIH) and can be treated at our clinic with a series of Facial Infusion.</p>
                        },
                        {
                            heading: 'How Is Your Acne Treatment Program Different?',
                            content:
                                <>
                                    <p className="my-1">
                                        The Osmosis skin Care line, DMK and 302 skincare offers a range of products in different strengths that can be customized to treat your specific type of acne and severity (it’s not a one-size-fits-all approach).
                                    </p>
                                    <ul className="list-disc ml-4 my-2">
                                        <li className="my-1">
                                            You have a personal acne expert to coach you through your specific skin problems. She is available to answer your questions anytime and walk with you every step of the way.
                                        </li>
                                        <li className="my-1">
                                            We adjust your home-care routine every few weeks to “push” your skin to clear faster. (This takes monitoring so that skin doesn’t get too dry or irritated).
                                        </li>
                                        <li className="my-1">
                                            The system addresses all aspects of getting your skin clear (lifestyle, diet, hyperkeratosis, bacteria), not just one area.
                                        </li>
                                    </ul>
                                </>
                        }
                    ]}
                />
            </section>
            <section className="flex flex-col items-center p-4" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default HolisticAcneProgram

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/holistic-acne-clinic-ottawa/"
    
    // VideoObject schema for the video on the page
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Holistic Acne Treatment Program",
        "description": "Essence of Beauty Ottawa holistic acne program helps naturally heal your skin with personalized skincare regiments proven to successfully reduce acne, pimples, redness, inflammation, acne scars, and pigmentation issues.",
        "thumbnailUrl": "https://www.essenceofbeauty.ca/images/holisticAcneClinic.jpg",
        "uploadDate": "2024-01-01",
        "contentUrl": "https://www.essenceofbeauty.ca/video/holisticAcneVideo.webm",
        "embedUrl": pageUrl
    }
    
    // FAQ items from the Accordion component
    const faqItems = [
        {
            heading: 'How Often Should I Come in for Acne Treatment?',
            content: <p>In order to get clear as fast as possible, we recommend coming in for acne treatment every 1-4 weeks. The purpose of treatment is to accelerate exfoliation, extract acne plugs as they surface, hydrate the skin and assess your home care routine.</p>
        },
        {
            heading: 'What Is the Key to Clear Skin?',
            content: <p>Your diligence using the right acne-safe products, and getting regular professional acne treatments with extractions is the key to clear skin!</p>
        },
        {
            heading: 'Can You Get Rid of Acne Scars?',
            content: <p>What most people consider acne "scars" are actually red, purple or brown marks left behind by old acne lesions. These are not true acne scars. This is called Post Inflammatory Hyperpigmentation (PIH) and can be treated at our clinic with a series of Facial Infusion.</p>
        },
        {
            heading: 'How Is Your Acne Treatment Program Different?',
            content:
                <>
                    <p className="my-1">
                        The Osmosis skin Care line, DMK and 302 skincare offers a range of products in different strengths that can be customized to treat your specific type of acne and severity (it's not a one-size-fits-all approach).
                    </p>
                    <ul className="list-disc ml-4 my-2">
                        <li className="my-1">
                            You have a personal acne expert to coach you through your specific skin problems. She is available to answer your questions anytime and walk with you every step of the way.
                        </li>
                        <li className="my-1">
                            We adjust your home-care routine every few weeks to "push" your skin to clear faster. (This takes monitoring so that skin doesn't get too dry or irritated).
                        </li>
                        <li className="my-1">
                            The system addresses all aspects of getting your skin clear (lifestyle, diet, hyperkeratosis, bacteria), not just one area.
                        </li>
                    </ul>
                </>
        }
    ]

    // Create FAQPage schema
    const faqPageSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.heading,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": extractTextFromJSX(item.content)
            }
        }))
    }

    return (
        <>
            <Seo
                pageTitle="Holistic Acne Treatment Ottawa - Organic, Natural Facials & Peels for Scarring & Pigmentation"
                pageDescription="Essence of Beauty Ottawa holistic acne program helps naturally heal your skin with personalized skincare regiments proven to successfully reduce acne, pimples, redness, inflammation, acne scars, pigmentation issues & more."
                pageKeywords="Acne Treatment, Holistic Acne Program, Scarring, Pigmentation, Inflammation, Skincare, Regiment, Safe, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/holisticAcneClinic.jpg"
                additionalSchema={[videoSchema, faqPageSchema]}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
} 