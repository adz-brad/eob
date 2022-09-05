import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Accordion from '../components/accordion'
import HolisticAcneVideo from '../assets/video/holisticAcneVideo.mp4'
import Card from '../components/card'

const HolisticAcneProgram = () => {

    return(
        <>
            <Banner
                heading="Holistic Acne Program"
                gradient="from-black/20 via-black/20 to-black/10"
                caption="Holistically heal your skin with a personalized skincare regiment designed and proven to successfully reduce pimples, redness, inflammation, acne scars, pigmentation issues while helping the skin rebalance."
                image={<StaticImage src="../assets/images/holisticAcneClinic.jpg"/>}
            />
            <div className="">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col md:w-1/2 lg:mx-auto md:mr-8 p-4 md:p-8 lg:px-16">
                        <h1 className="my-2">Holistically Heal Your Skin!</h1>
                        <h4 className="mb-4">If you are struggling with acne, your typical acne facial products might not be cutting it!</h4>
                        <p className="my-2">
                        I specialize in clearing acne that dermatologists and other traditional methods have not been able to clear. Don’t give up on your skin!
                        </p>
                        <p className="my-2">
                        Skin has always been my passion and my clients’ satisfaction is my delight. Years of experience with the most aggressive acne has made me an expert in another by-product of damage and inflammation. My Acne Treatment Program uses a comprehensive approach to treat acne, acne scars and restore healthy skin. Sensitive skin and acne rosacea are taken into consideration.
                        </p>
                        <Button
                            data={{text: "Learn More", anchor: "holistic-acne-different-approach"}}
                            className="buttonLight mt-8 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="lg:w-1/2">
                    <video autoPlay playsInline controls muted className="w-full">
                            <source src={HolisticAcneVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="bg-lightGreen rounded-lg shadow-lg flex flex-col lg:flex-row lg:py-8">
                <div id="holistic-acne-different-approach" className="flex flex-col lg:w-2/3 p-4 md:p-8 lg:px-16">
                   <h1 className="mb-4 border-b-2 border-darkGreen pb-2 filter drop-shadow-md">A Different Approach</h1>
                   <p className="my-1">
                   The approach I take is different than most because I believe educating the client about their skin condition is key. Understanding there are many variables in what causes acne to form, is the best way to control it. My training as an Acne Specialist, combined with my extensive knowledge of environmental and nutritional acne triggers allow me to successfully assist my clients take control of their acne without prescription drugs. I work closely with each individual taking into consideration their type of acne, skin type, diet, and overall health and life style choices to develop their customized skin care protocol.
                   </p>
                   <p className="my-1">
                   My in-Spa acne treatments all include deep pore cleansing (exfoliation and extraction), lymphatic drainage, dermal cellular waste removal and healing of the skin.  Each of my procedures effectively reduces pimples, redness, inflammation, acne scars, resolve pigmentation issues  and help the skin rebalance. You should start to see results after one or two acne facials. However, you may need to make multiple visits to achieve desired results depending on the severity of the breakout. While I am all about your health and wellness, don’t think for a minute that my approach is wimpy.
                    </p>
                    <p className="my-1">
                    I mean business when it comes to clearing your skin. My specific proven process is easy to follow, when done correctly, garnishes huge results for you.
                    </p>
                </div>
                <div className="flex flex-col p-4 md:p-8 lg:mx-auto">
                <Gallery
                    className="grid grid-cols-1 md:grid-cols-2 gap-2"
                    imageClass="rounded-sm shadow-lg h-[400px] w-full"
                    images={[
                        <StaticImage src="../assets/images/holisticAcneBefore1.png" alt="Holistic Acne Program Before Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcneAfter1.png" alt="Holistic Acne Program After Treatment Image" />
                    ]}
                />
                <span className="text-center mt-4 text-sm">Slide to compare before and after holistic acne treatment</span>
                </div>
            </div>
                <div className="p-4 md:p-8">
                <Card cardBodyClass="flex flex-col p-4 lg:p-8">
                    <h1 className="mb-4 border-b-2 border-darkGreen pb-2 filter drop-shadow-md">How It Works</h1>
                    <p className="my-2">
                    When you come to us for your initial visit, we will do a thorough consultation including products you are using, lifestyle, diet and other treatments and products you have tried.  We will decide on the products that will be best for your skin and acne type.  You will receive an acne treatment every 1-2 weeks for the first 8 weeks then we do on a monthly basis, most clients see completely clear skin in 4-6 months This is a time where you will see significant changes in your skin. In order for this to work, you must be willing to make lifestyle and product changes with the program.  If you are willing to do the work, your life can change. Expect to make dietary changes to manage your acne.
                    </p>
                    <p className="my-2">
                    We require that you be willing to use our products exclusively and follow our protocols and guidelines.  The results you want won’t happen if you are using other products.  We also ask that you have a coachable spirit.  This means that you must be willing to check in with us every 1-2 weeks, even if you can’t make your appointment.  We need to know if you have any allergic reactions, are becoming over sensitive or too dry. Also soon after starting with your new regimen (usually within 2-3 weeks) your skin will get used to what you are doing so we will need to “amp up” the regimen. This may mean adding another product, increasing frequency of use of a product you are currently using or layering a few active products. As your Acne Specialist, this is my job to guide you through these changes. If we did not make these bi-weekly adjustments your skin might stop improving.
                    </p>
                </Card>
                </div>
                <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 p-1 lg:px-8">

                <Gallery
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 m-1"
                    imageClass="rounded-sm shadow-lg h-[400px] w-full"
                    images={[
                        <StaticImage src="../assets/images/holisticAcneBefore2.png" alt="Holistic Acne Program Before Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcneAfter2.png" alt="Holistic Acne Program After Treatment Image" />
                    ]}
                />

                <Gallery
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 m-1"
                    imageClass="rounded-sm shadow-lg h-[400px] w-full"
                    images={[
                        <StaticImage src="../assets/images/holisticAcneBefore3.png" alt="Holistic Acne Program Before Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcneAfter3.png" alt="Holistic Acne Program After Treatment Image" />
                    ]}
                />

                <Gallery
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 m-1"
                    imageClass="rounded-sm shadow-lg h-[400px] w-full"
                    images={[
                        <StaticImage src="../assets/images/holisticAcneBefore4.png" alt="Holistic Acne Program Before Treatment Image" />,
                        <StaticImage src="../assets/images/holisticAcneAfter4.png" alt="Holistic Acne Program After Treatment Image" />
                    ]}
                />

                <Gallery
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 m-1"
                    imageClass="rounded-sm shadow-lg h-[400px] w-full"
                    images={[
                        <StaticImage src="../assets/images/holisticAcneBefore5.png" alt="Holistic Acne Program Before Treatment Image" />,
                            <StaticImage src="../assets/images/holisticAcneAfter5.png" alt="Holistic Acne Program After Treatment Image" />
                    ]}
                />
       
                </div>
                <span className="text-sm mt-0">Before and after holistic acne treatment</span>
                </div>
            <div className="p-4 lg:p-8 flex flex-col items-center lg:m-8">
                <h1 className="mt-4 mb-8">Frequently Asked Questions</h1>
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
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default HolisticAcneProgram