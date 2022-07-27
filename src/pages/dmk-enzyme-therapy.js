import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import DMKVideo from '../assets/video/dmkVideo.mp4'
import DMKEnzymeMasque from '../assets/video/DMKEnzymeMasque.mp4'
import Button from '../components/button'
import Card from '../components/card'

const DMKTherapy = () => {
    return(
        <>
            <Banner
                heading="DMK Enzyme Therapy"
                caption="The DMK Enzyme Therapy Treatment is the most powerful, effective method for hydrolyzing dead cell material from the skin tissues, detoxifying the skin of all impurities and lifting and tightening it for a firmer, glowing appearance. It works on the internal structures and functions of the skin to keep it fit, healthy and youthful."
                image={<StaticImage src="../assets/images/dmkHeader.jpg"/>}
            />
            <div className="">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col md:w-3/5 lg:mx-auto md:mr-8 px-4 md:px-8 lg:px-16">
                        <h1 className="mt-8 md:mt-10 mb-2 font-semibold">The Power of DMK Enzyme Therapy</h1>
                        <p className="my-2">
                            At Essence of Beauty, we are leading experts in the use of DMK Enzyme Therpy for treating a multitude of conditions, including acne, rosecea, sun-damaged skin, agiing effects, pigmentation, scarring and reactive skin to name just a few.
                        </p>
                        <h4 className="mt-2">
                            Benefits of choosing DMK Enyzme therapy include:
                        </h4>
                        <ul className="list-disc ml-4 my-2">
                            <li className="my-1">
                            Glowing complexion & Hydrated skin
                            </li>
                            <li className="my-1">
                            Smoother, more even skin tone
                            </li>
                            <li className="my-1">
                            Safe and painless skin rejuvenation and tightening treatment
                            </li>
                            <li className="my-1">
                            Firmer & Tighter Skin
                            </li>
                            <li className="my-1">
                            Reduced Fine Lines
                            </li>
                            <li className="my-1">
                            Penetrates deeper in the skin and stimulates collagen and elastin production
                            </li>
                            <li className="my-1">
                            Removes toxins and dead proteins and provides excellent results of skin tightening
                            </li>
                        </ul>
                        <Button
                            data={{text: "Learn More", anchor: "dmk-enyzyme-therapy-more-info"}}
                            className="buttonLight mt-8 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="lg:w-1/2 my-8 md:my-auto">
                    <video autoPlay playsInline controls muted loop className="w-full">
                            <source src={DMKVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div id="dmk-enyzyme-therapy-more-info" className="md:p-8">
                <div className="flex flex-col md:flex-row md:items-center bg-lightGreen rounded-sm shadow-lg my-8 p-4 md:p-8">
                    <div className="flex flex-col md:w-2/3">
                        <h1 className="font-bold mb-4">Why Choose DMK Over Other Therapies?</h1>
                        <p className="my-2">
                        DMK has established a global reputation for their enzyme treatments, making them the leader in enzyme oxygen therapy. While other therapies claim effectiveness through the application of oxygenated creams or even compressed air, in extreme cases, no treatment has proven to be as effective as the deep treatment therapies offered through DMK. Also, many of these other treatments are considered unhealthy and dangerous, possibly even worsening underlying skin conditions.
                        </p>
                        <p className="my-2">
                        By harnessing the positive attributes of enzymes, DMK therapy can stimulate and improve the natural processes of your body to encourage healthy cell development. This process aids in the natural removal of toxins, dead proteins and other dangerous and odour producing chemicals from the body while simultaneously restoring the healthy lymphatic functions that produce younger looking and performing skin.
                        </p>
                        <p className="my-2">
                        DMK ENZYME THERAPY works because it was designed to emulate the way your skin works naturally. Now you can eliminate all your skin concerns and experience real results in the most natural and painless way possible. This plasmatic effect will calm down within about 20 minutes of the Masque being removed but shows the dilation of the capillary network during the reverse osmosis process.
                        </p>
                        <p className="my-2">
                        There is nothing better than seeing a great plasmatic effect after an Enzyme Facial! It is suitable for all skin types, regardless of what your skin concerns are. Even the most reactive of skins will greatly benefit from Enzyme Therapy. Results are visible instantly and continue to improve over time. <strong>Regular treatments will maintain the best results.</strong> 
                        </p>
                        <Button
                            data={{text: "How It Works", anchor: "dmk-how-it-works"}}
                            className="buttonLight bg-white mt-8 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="bg-white p-4 my-8 md:my-0 shadow-md rounded-sm mx-auto">
                    <StaticImage src="../assets/images/dmkPlasmaticEffect.jpg" />
                    </div>
                </div>
            </div>
            <div id="dmk-how-it-works">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col md:w-3/5 lg:mx-auto md:mr-8 px-4 md:px-8 lg:px-16">
                        <h1 className="mt-8 mb-4 font-semibold">How Does DMK Enzyme Therapy Work?</h1>
                        <p className="my-2">Enzyme Therapy works by utilizing specialized transfer messenger enzymes which bring fresh oxygenated blood and nutrients to the cells by causing Reverse Osmosis which is a “back-flushing” action that forces fluids through the membrane around the cells, cleaning out all impurities and restoring vital cellular nutrition and oxygenation required for cellular regeneration. Reverse Osmosis is the actual effect of the enzyme treatment on your body, specifically within three targeted areas: The lymphatic system, facial blood vessels and facial muscles.</p>
                        <p className="my-2">
                        As the primary filtering system of the body, the lymphatic system consists of a network of organs and tissues whose job it is to remove toxins, waste, and other harmful materials from the vascular system. DMK therapy acts on the lymphatics system, encouraging excellent drainage, which is felt through the facial mask as a pulsating or tightening sensation by the client.
                        </p>
                        <p className="my-2">
                        The enzyme treatment, while helping to flush out impurities, also produces a fresh supply of necessary oxygenated blood vessels to your face and skin cells in a process called the Plasmatic Effect. The effect causes vessel dilation, increasing the oxygen retention in the vessels and allowing clients to notice the effects of the treatment visibly. In addition to bolstering the effectiveness of the lymphatic system and encouraging rich oxygenated blood, DMK therapy forces weak facial muscles into compliance through stimulation. Essentially, the enzymes force the muscles to tighten which promotes the development of stronger and healthier skin, providing you with firm, smooth skin.
                        </p>
                    </div>
                    <div className="lg:w-2/5 my-auto p-4 shadow-lg">
                    <video playsInline controls className="w-full">
                            <source src={`${DMKEnzymeMasque}#t=05`} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-4 md:p-8 md:mx-8 my-8 md:my-16">
                <h1 className="font-bold mb-4">DMK Pricing</h1>
                <Card cardBodyClass="flex flex-col md:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col md:w-2/3 p-4 md:p-8">
                        <h1 className="font-bold">Enzyme Therapy Level 1</h1>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$188</strong>/ 80 min</span>
                        <div className="my-auto">
                        <p className="my-1 md:text-lg">
                        DMK Signature Enzyme Therapy includes deep cleansing a light pre-exfoliation.
                        </p>
                        <p className="my-1 md:text-lg">
                        This treatment is suitable for first-timers and even for clients on Roaccutane.
                        </p>
                        <p className="my-1 md:text-lg">
                        DMK Enzyme Therapy restores skin to its peak condition, strengthening and restoring the skin’s structural integrity to create a healthy environment for cells to live and thrive in.  
                        </p>
                        </div>

                        <Button
                            data={{text: "Get Started", anchor: "contact"}}
                            className="buttonLight my-8 md:mt-auto md:mb-0 md:mx-0"
                        />
                    </div>
                    <StaticImage 
                        src="../assets/images/DMK-level-1.jpg" 
                        alt="Enzyme Therapy Level 1" 
                        className="md:w-1/3"
                    />
                </Card>
                <Card cardBodyClass="flex flex-col md:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col md:w-2/3 p-4 md:p-8">
                        <h1 className="font-bold">Enzyme Therapy Level 2</h1>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$188</strong>/ 80 min</span>
                        <div className="my-auto">
                        <p className="my-1 md:text-lg">
                        DMK Signature Enzyme Therapy with a customised Pre-Exfoliation incorporating one of the following Pro Alpha, Prozyme, Quick Peel, Desquamate or Exoderma.
                        </p>
                        <p className="my-1 md:text-lg">
                        An advanced skin resurfacing procedure that is specifically designed for acne, congested skin, premature ageing, wrinkles, fine lines and pigmentation. Powerful combinations of DMK products are used to achieve visible results.
                        </p>
                        </div>
                        <Button
                            data={{text: "Get Started", anchor: "contact"}}
                            className="buttonLight my-8 md:mb-0  md:mx-0"
                        />
                    </div>
                    <StaticImage 
                        src="../assets/images/DMK-level-2.jpg" 
                        alt="Enzyme Therapy Level 2" 
                        className="md:w-1/3"
                    />
                </Card>
                <Card cardBodyClass="flex flex-col md:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col md:w-2/3 p-4 md:p-8">
                        <h1 className="font-bold">Enzyme Therapy Level 3</h1>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$188</strong>/ 80 min</span>
                        <div className="my-auto">
                        <p className="my-1 md:text-lg">
                        DMK Signature Enzyme Therapy with a customised Pre-Exfoliation incorporating one of the following Pro Alpha, Prozyme, Quick Peel, Desquamate or Exoderma falowing by extractions.
                        </p>
                        <p className="my-1 md:text-lg">
                        An advanced skin resurfacing procedure that is specifically designed for acne, congested skin, premature ageing, wrinkles, fine lines and pigmentation. Powerful combinations of DMK products are used to achieve visible results.
                        </p>
                        </div>
                        <Button
                            data={{text: "Get Started", anchor: "contact"}}
                            className="buttonLight my-8 md:mt-auto md:mb-0  md:mx-0"
                        />
                    </div>
                    <StaticImage 
                        src="../assets/images/DMK-level-3.jpg" 
                        alt="Enzyme Therapy Level 3" 
                        className="md:w-1/3"
                    />
                </Card>
                <Card cardBodyClass="flex flex-col md:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col md:w-2/3 p-4 md:p-8">
                        <h1 className="font-bold">Muscle Banding with A-lift - Enzyme Masque #2 & #3</h1>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$188</strong>/ 80 min</span>
                        <div className="my-auto">
                        <p className="my-1 md:text-lg">
                        DMK A-Lift® is a 12 week program designed to revise the signs of ageing and the health of your skin. By removing redundant skin cells and tightening facial muscles, the DMK A-Lift Muscle Banding Treatment works by stimulating the underlying structures of the skin. It gives the face its own workout, similar to how you would tone and tighten the body with exercise.
                        </p>
                        <p className="my-1 md:text-lg">
                        The DMK Muscle Banding technique is used in the A-Lift. To tighten and tone the skin, restoring a healthy youthful appearance. It works to reduce redness and unsightly capillaries in the skin and provides a vibrant appearance.
                        </p>
                        <p className="my-1 md:text-lg">
                        Performed weekly over a 12 week period, the A-Lift® uses transdermal delivered formulations that work with the skin’s functions to remind it to function as it did when it was young.      
                        </p>
                        </div>
                        <Button
                            data={{text: "Get Started", anchor: "contact"}}
                            className="buttonLight my-8 md:mt-auto md:mb-0 md:mx-0"
                        />
                    </div>
                    <StaticImage 
                        src="../assets/images/dmk-muscle-banding.png" 
                        alt="Muscle Banding with A-lift - Enzyme Masque #2 & #3" 
                        className="md:w-1/3"
                    />
                </Card>
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default DMKTherapy