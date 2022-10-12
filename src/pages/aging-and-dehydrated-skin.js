import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Tabs from '../components/tabs'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const AgingAndDehydratedSkin = () => {
    return(
        <>

            <Banner
                heading="Aging & Dehydrated Skin"
                gradient="from-black/50 via-black/30 to-black/10"
                caption="Skin starting to lose it's radiant appearance? At Essence of Beauty, our facial rejuvenation treatments offer a solution to reviving tired skin, turning back the clock and addressing a host of minor imperfections. "
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/facialAgingHeader.jpg?raw=true"/>}
            />
            <div className="flex flex-col lg:flex-row lg:items-center p-4 md:p-8">
                <div className="lg:w-2/3 lg:m-8">
                    <h1 className="mb-4 font-semibold">Turning Back The Clock On Aging Skin</h1>
                    <h2 className="my-6 subheader">Skin starting to lose it's radiant appearance? At Essence of Beauty Ottawa, our facial rejuvenation treatments offer a solution to reviving tired skin, turning back the clock and addressing a host of minor imperfections.</h2>
                    <p className="my-2">
                    As you age, your skin gets drier and thinner and starts to lose its plump, radiant appearance. The loss of collagen in your skin, as well as exposure to the elements, causes wrinkles, skin laxity and gives your skin a dull appearance. You’ll likely notice your face losing its firmness and tightness most around your eyes and mouth. You could opt for Botox injections, cosmetic surgery or laser treatments, however these options can be painful and only provide short term beauty results. <strong>They don’t do anything to help your skin produce more collagen and repair damaged cells.</strong>
                    </p>
                    <p className="my-2">
                    Essence of Beauty Facial Rejuvenation offers a solution to reviving tired skin, turning back the clock and addressing a host of minor imperfections. <strong>We offer different non-surgical facial rejuvenation options</strong>, allowing us to customise treatment to the unique needs and desired outcome of each client. In addition to helping you look your best. These treatments are designed to re-educate and re-train your skin cells, repair skin barrier and restoring optimal skin health. No two treatments are the same and are completely tailored to your skins needs on that day.
                    </p>
                    <Button 
                        data={{ text: "Learn More", anchor: "anti-aging-treatments"}}
                        className="buttonLight my-8"
                    />
                </div>
                <StaticImage 
                        loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/antiAging.jpg?raw=true" 
                    alt="Essence of Beauty Anti Aging Image"
                    className="lg:w-1/3 max-h-[520px] rounded-sm shadow-lg lg:m-8"
                />
            </div>
            <div id="anti-aging-treatments" className="md:p-4 lg:p-8">
            <div className="mb-8 lg:pt-8 text-center">
            <h1 className="mb-2">Treatment Options</h1>
            <span>Choose a treatment option to learn more</span>
            </div>
                <Tabs
                    columns="grid-cols-1 md:grid-cols-5"
                    options={[
                        {
                            name: "Signature Radiance Infusion",
                            content: (
                                <div className="flex flex-col lg:px-4">
                                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                                    Signature Radiance Infusion
                                    </h1>   
                                    <p className="my-2">
                                    Our Signature Radiance Infusion Skin Rejuvenating Facial Treatment is the latest innovation and is one of our most requested facial treatments at Essence of Beauty. You’ll see an instant glow and boost in hydration due to the ingredients being absorbed 97% better than topical application alone. It also has a brightening effect for that coveted lit-from-within glow! Throughout the treatment, the skin is literally being drenched with wonderful elixirs and serums. The best part is that it’s non-invasive and there is absolutely no downtime! 
                                    </p>
                                    <span className="font-bold text-brown italic">Package Price when pre-pooked and pre-paid:</span>
                                    <span>
                                        <strong className="mr-2 text-brown">Single treatment:</strong>$178
                                    </span>         
                                    <span>
                                        <strong className="mr-2 text-brown">Package of 4:</strong>$650
                                    </span>   
                                    <span>
                                        <strong className="mr-2 text-brown">
                                        Advanced Add-ons available with Radiance Infusion
                                        </strong>
                                    </span>  
                                </div>
                            )
                        },
                        {
                            name: "Professional Peels",
                            content: (
                                <div className="flex flex-col lg:px-4">
                                    <h1 className="text-lg md:text-xl lg:text-2xl">
                                    Professional Peels
                                    </h1>
                                    <p className="my-2">
                                    Our professional peels are deep skin exfoliation and hydration treatments that improve the skin’s appearance. We offer a unique combination of facial peels that have immediately visible results: your skin is hydrated, rejuvenated and you look and feel younger.
                                    </p>    
                                    <p className="my-2">
                                    Peels can be applied to the face and body. They work by exfoliating the outer layers of the skin and dead skin cells, thus revealing the healthier, younger skin beneath. The peel can treat a number of skin concerns including sun damage and aging, acne scarring, pigmentation, uneven skin tone and texture, redness, and rosacea, fine lines, and wrinkles.
                                    </p>
                                    <p className="my-2">
                                    We recommend that you contact us for advice on the most appropriate treatment for your skin type.  
                                    </p>
                                    <Button
                                        data={{text: "Learn More", link: "/acid-free-chemical-peels-ottawa/"}}
                                        className="buttonLight my-4"
                                    />
                                </div>
                            )
                        },
                        {
                            name: "DMK Muscle Banding",
                            content: (
                                <div className="flex flex-col lg:px-4">
                                    <h1 className="text-lg md:text-xl lg:text-2xl">
                                    DMK Muscle Banding
                                    </h1>
                                    <p className="my-2">
                                    DMK Muscle Banding is a technique used to lift, tone, and tighten the skin. It works by causing the muscles to contract, reinvigoration circulation, increasing amino acids, and restoring optimal function. It rebuilds a stronger healthier better functioning skin, stimulating collage and elastin and strengthens the matrix, giving skin back its bounce. Even before signs of ageing become apparent this treatment works to prevent the decline in the functioning of your skin that causes ageing. Whether you want to maintain or regain a tight youthful appearance, DMK Muscle Banding is like the army that comes in and stops the decline that causes skin to age. Muscle Banding is an age management treatment designed to slow the process and loss of function that occurs with ageing. Whether you want to maintain or regain a tight, youthful appearance, DMK Muscle Banding is like the army that comes in and halts the decline that causes skin to age. This treatment is suitable for anyone wanting a highly effective age management solution that is natural, non-invasive and pain free. Just like going to the gym, repeated treatments will gain optimal results due to muscle memory. 
                                    </p>    
                                    <p className="my-2 font-bold">
                                    Your face contains 57 muscles. The neck contains a large muscle called the Platysma Muscle which extends around the front of the neck and beneath the chin. The purpose of DMK MUSCLE BANDING is to strengthen and tighten these muscles. What this means for you is a tighter, firmer skin and a healthy glowing complexion without sagging jowls. Tighter skin also means that wrinkles, creases or fine lines will be greatly reduced leaving a smoother texture behind.
                                    </p>
                                    <div className="flex flex-col md:flex-row my-4">
                                    <ul className="list-disc md:w-1/2">
                                        <p className="text-brown italic font-semibold text-lg my-1">
                                        Who will benefit from Muscle Banding:
                                        </p>
                                        <li className="my-1 ml-4">Aging or prematurely aging, weakened skin</li>
                                        <li className="my-1 ml-4">
                                        Dry and lackluster skin
                                        </li>
                                        <li className="my-1 ml-4">Post-operative skin</li>
                                        <li className="my-1 ml-4">Anyone with thin, fragile skin</li>
                                        <li className="my-1 ml-4">
                                        Young people, even where there are no visible signs of aging
                                        </li>
                                        <li className="my-1 ml-4">
                                        Clients with loose or flaccid skin
                                        </li>
                                    </ul>
                                    <ul className="list-disc md:w-1/2">
                                        <p className="text-brown italic font-semibold text-lg my-1">
                                        And it benefits the skin by:
                                        </p>
                                        <li className="my-1 ml-4">Decreases the appearance of fine lines and wrinkles</li>
                                        <li className="my-1 ml-4">
                                        Strengthens, tightens and tones the muscles of your face and neck to prevent sagging skin
                                        </li>
                                        <li className="my-1 ml-4">Nourishes your skin by promoting the supply of rich nutrients</li>
                                        <li className="my-1 ml-4">Restores the natural functioning and processes of the skin</li>
                                    </ul>
                                    </div>
                                    <p className="my-2">
                                    Muscle Banding treatments finish with a Transdermal Infusion designed to restore vital nutrients, proteins, amino acids and moisture at a cellular level. 
                                    </p>
                                    
                                    <strong className="text-brown">Price on application.</strong>
                                    
                                    <Button
                                        data={{text: "Learn More", link: "/dmk-enzyme-therapy/"}}
                                        className="buttonLight my-4"
                                    />
                                </div>
                            )
                        },
                        {
                            name: "Growth Factor Microneedling",
                            content: (
                                <div className="flex flex-col lg:px-4">
                                    <h1 className="text-lg md:text-xl lg:text-2xl">
                                    Growth Factor Microneedling
                                    </h1>
                                    <span className="italic text-brown font-bold">Fine lines getting you down?</span>
                                    <p className="my-2">
                                    Growth Factor Microneedling is a relatively new approach in the beauty industry used to treat skin concerns by encouraging the skin to produce excessive collagen. This revolutionary rejuvenation procedure is conducted using fine, short needles that create invisible injuries on the skin to boost natural self-healing processes. It is a 100% safe procedure that brings tangible results. The skin becomes hydrated and shining while deep wrinkles and scars disappear. A microneedling facial might also be used for reducing sun spots, pigmentation and scars. This next-generation beauty procedure is the perfect alternative to cosmetic surgery. So, if you’re in two minds about what beauty procedure can make your skin look younger, schedule an appointment with our certified cosmetics specialists. We will check your skin’s quality to conclude whether you’re the right candidate for this procedure. 
                                    </p>
                                    <strong>$295</strong>
                            
                                    <Button
                                        data={{text: "Learn More", link: "/microneedling-ottawa/"}}
                                        className="buttonLight my-4"
                                    />
                                </div>
                            )
                        },
                        {
                            name: "Herbal Green Peel",
                            content: (
                                <div className="flex flex-col lg:px-4">
                                    <h1 className="text-lg md:text-xl lg:text-2xl">
                                    Herbal Green Peel
                                    </h1>
                                    <p className="my-2">
                                    This deep peeling treatment is a natural non-surgical procedure that would re-enhance the skin and correct some of the aging process. It gives you perfect, pure, smooth and youthful skin, by simply smoothing away prematurely aged, damaged or impure skin by regenerating new cells and collagen fibers. This peel does not contain any chemicals or synthetic peeling agents. It is herbal based and perfectly safe. It has no side effects and can be used on all skin types and skin color. Unlike the traditional chemical peel, this method results in a more profound change and can be repeated any number of times. You can try this effective treatment also on the stomach, upper back. A dream that can actually come true naturally. Visible effects can be seen after only a few days.  
                                    </p>
                                    <p className="my-2">
                                    A consultation is required prior to this procedure.
                                    </p>
                                    <span>
                                        <strong className="mr-2 text-brown">Total Per Treatment Price:</strong>$399
                                    </span>   
                                    <span>
                                        <strong className="mr-2  text-brown">Package of 3 (when pre-booked & pre-paid):</strong>$1035
                                    </span> 
                                    <Button
                                        data={{text: "Learn More", link: "/herbal-green-peel/"}}
                                        className="buttonLight my-4"
                                    />
                                </div>
                            )
                        },
                    ]}
                />
            </div>
            <div className="max-w-screen-xl mx-auto my-8">
                    <div className="flex flex-col items-center my-4">
                        <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                        <span className="mb-8">Comparing before & after treatment</span>
                    </div>
                <Gallery 
                    className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/aging.jpg?raw=true" alt="Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/aging2.jpg?raw=true" alt="Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/aging3.jpg?raw=true" alt="Before & After Treatment" />
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

export default AgingAndDehydratedSkin

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="Aging & Dehydrated Skin"
        pageTitleDescription="Turn Back The Clock With Facial Rejuvenation At Essence of Beauty Ottawa!"
        pageDescription="Skin starting to lose it's radiant appearance? At Essence of Beauty, our facial rejuvenation treatments offer a solution to reviving tired skin, turning back the clock and addressing a host of minor imperfections."
        pageKeywords="Aging, Antiaging, Anti-aging, Dehydrated skin, Dry skin, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/aging-and-dehydrated-skin/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/antiAging.jpg?raw=true"
        />
        <link rel="canonical" href="http://www.essenceofbeauty.ca/aging-and-dehydrated-skin/" />
        </>
    )
  } 