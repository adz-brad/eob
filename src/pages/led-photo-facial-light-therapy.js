import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Seo from '../components/seo'

const LEDPhotoFacial = () => {
    return(
        <>
            <Banner
                heading="LED Photo Facial"
                gradient="from-black/20 to-black/0"
                caption="Light Emitting Diode (LED) therapy is a revolutionary anti-aging skin care procedure that is used to treat multiple adverse skin conditions"
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cellumaLedTherapy.png?raw=true"/>}
            />
                                    <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">How Does Advance LED Light Therapy Work?</h1>
                    <h2 className="mt-2 mb-4 subheader">Light Emitting Diode (LED) therapy is a revolutionary anti-aging skin care procedure that is used to treat multiple adverse skin conditions.</h2>
                    <p className="my-1">
                    Our LED device is designed to curve comfortably around your face, emitting different LED wavelengths that penetrate the skin’s deeper layers to target a range of concerns. Completely pain free, it can work to accelerate wound healing, boost collagen and even out skin tone. Effective on all skin type. Our treatments are the most advanced light treatments available, and we can adapt each session to suit your specific needs. With regular maintenance treatments, our LED facials can result in a noticeable improvement to your skin health. Advance light therapy can also be used to reduce the downtime of advanced aesthetics treatments, enhancing the outcomes of chemical peels or micro-needling. In addition to a more youthful appearance, clients experience a dramatic improvement of acne, rosacea and fine lines.

                    </p>
                    <Button
                        data={{text: "Learn About The Benefits", anchor: "led-therapy-benefits"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                        loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ledLightTherapy.jpg?raw=true"
                    alt="Essence of Beauty LED Light Therapy Photo Facial Treatment"
                    className="md:w-1/3 h-[500px] mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="led-therapy-benefits" className="p-4 md:p-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col md:w-1/2">
                    <h1>
                        LED Photo Facial Benefits
                    </h1>
                    <h4 className="my-2">
                        Some of the benefits of LED photo facial light therapy include:
                    </h4>
                    <ul className="list-disc my-2 ml-4">
                        <li className="my-1">
                        Reduces wound healing time
                        </li>
                        <li className="my-1">
                        Reduces inflammation      
                        </li>
                        <li className="my-1">
                        Smoothes and improved surface
                        </li>
                        <li className="my-1">
                        Stimulates collagen formation
                        </li>
                        <li className="my-1">
                        Increases ATP (fuel for cells)  
                        </li>
                        <li className="my-1">
                        Stimulates cell turnover
                        </li>
                        <li className="my-1">
                        Reduces mild scarring, hyperpigmentation and pore size
                        </li>
                        <li className="my-1">
                        Reduces pigmentation caused from acne lesions
                        </li>
                        <li className="my-1">
                        Increases circulation and moisture retention
                        </li>
                    </ul>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <h3 className="font-bold text-brown mt-2">Initial treatment sessions are as follows:</h3>
                        <ul className="list-disc my-2 ml-4">
                            <li className="my-1">
                            $60 per treatment depending on the severity of the problem being treated-recommended in series of 8-12 treatments.
                            </li>
                            <li className="my-1">
                            For acne best results, for 3 sessions per week for 4 weeks with maintenance sessions every 1 to 2 months after these initial 4 weeks of treatment      
                            </li>
                            <li className="my-1">
                            Conditions like rosacea, fine lines, wrinkles, hyperpigmentation, sun damage, anti-aging, collagen stimulation and irregular skin texture: One session per week for 6 weeks with maintenance therapy sessions once every 1 to 2 months.   
                            </li>
                        </ul>
                        <p>After your LED facial, you should immediately notice a healthy glow. When treating acne, many clients begin seeing results in as little as four weeks. For wrinkle reduction, patients begin to see results at eight weeks. However, individual experiences may vary.
                        </p>
                        <Button
                            data={{text: "Book Now", anchor: "contact"}}
                            className="buttonLight my-8 mx-auto md:mx-0"
                        />
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

export default LEDPhotoFacial

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="LED Photo Facial Light Therapy"
        pageTitleDescription="Pain-free Treatment To Reduce Pigmentation, Scarring, Inflamation & More at Essence of Beauty Ottawa"
        pageDescription="Our LED device is designed to curve comfortably around your face, emitting different LED wavelengths that penetrate the skin’s deeper layers to target a range of concerns. Completely pain free, it can work to accelerate wound healing, boost collagen and even out skin tone."
        pageKeywords="LED, Photo Facial, Pain-free, Light Therapy, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/led-photo-facial-light-therapy/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ledLightTherapy.jpg?raw=true"
        />
        <link rel="canonical" href="http://www.essenceofbeauty.ca/led-photo-facial-light-therapy/" />
        </>
    )
  } 