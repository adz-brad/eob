import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Gallery from '../components/gallery'

const Microneedling = () => {
    return(
        <>
            <Banner
                heading="Microneedling"
                gradient="from-black/60 via-black/30 to-black/10"
                caption="Microneedling is a safe, simple procedure used to treat scars, acne, wrinkles, age spots and hyperpigmentation that can give your skin a fresh, even appearance."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling.jpg?raw=true"/>}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">ACS Pen Microneedling</h1>
                    <h4 className="mt-2 mb-4">A safe, simple procedure that can give your skin a fresh, even appearance.</h4>
                    <p className="my-1">
                    At Essence of Beauty, Microneedling is used with treatments to stimulate collagen production, reduce acne scarring, reduce and remodel trauma scars, improve photo damaged skin, enlarge pores, improve skin roughness, and reduce mild to moderate wrinkles. This procedure is relatively quick, and can be performed in approximately one hour when treating the entire face. Since microneedling is minimally invasive, doesn’t cause significant wounding to the skin, and isn’t light-based, most people can safely undergo microneedling therapy with minimal risk of long-term adverse effects. Typically, important factors such as age and skin colour doesn’t matter. Many clients prefer microneedling because of its minimal downtime. Although some redness may occur immediately after the procedure, any irritation should subside by the following day. The procedure is most commonly used on the face, neck, and décolletage with appealing results.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "microneedling-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/growth-factor-microneedling.jpg?raw=true"
                    alt="Essence of Beauty ACS Pen Microneedling for Scars, Acne, Wrinkles, Age Spots and Hyperpigmentation"
                    className="max-h-[500px] mx-auto rounded-sm shadow-md"
                />
            </div>
            <div 
                id="microneedling-info"
                className="flex flex-col bg-lightGreen rounded-md shadow-md p-4 md:p-8 md:m-4"
            >
                <div className="flex flex-col md:mx-4">     
                    <h1 className="font-bold mb-4">What’s involved in a Microneedling treatment?</h1>
                    <p className="my-1">
                    We use a device called ACS Pen, a handheld automated machine that holds a sterile needle head cartridge. Tiny needles pierce the skin at predetermined depths depending on the results you want to achieve. Shorter needle penetration can enhance product penetration and smooth superficial skin, while longer needle penetration can be used to create collagen response more deeply, such as when treating acne scars.
                    </p>
                    <p className="my-1">
                    The depth of the treatment will be determined by which skin concerns are being targeted. After the treatment, we will apply a beautiful refresh mask, the appropriate post-treatment products, and provide you with post-treatment instructions.
                    </p>
                    <p className="my-1">
                    Due to advanced technology offered by the ACS-Pen, topical anaesthetic is not required for this microneedling treatment. This ACS is appropriate for all skin types, you may feel a slight vibration on the skin, and however the treatment is virtually painless.
                    </p>
                </div>
                <Gallery 
                    className="grid grid-col-1 md:grid-cols-4 gap-4"
                    imageClass="rounded-sm shadow-lg max-h-[400px]"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling-beforeafter-1.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling-beforeafter-2.jpg?raw=true" alt="Microneedling Before & After Treatment" />
                    ]}    
                />
                <Button
                        data={{text: "What To Expect", anchor: "microneedling-what-to-expect"}}
                        className="buttonLight bg-white m-8 md:my-auto mx-auto md:mx-4"
                    />
            </div>
            <div id="microneedling-what-to-expect" className="flex flex-col my-8 p-4 md:p-8">
                    <h2 className="font-bold mb-2">
                    What results can I expect?  
                    </h2>
                    <p className="my-1">
                    Many clients notice an immediate glow in their skin after their first microneedling treatment. As you go through your series, you will begin to notice smoother skin and an improved skin tone, as your natural exfoliation process is optimized. Within 4-6 weeks you may begin to see visible improvements in fine lines and pore size as the skin’s epidermis thickens. Improvement in scars may continue up to two years after the treatments, as new healthy tissue is generated beneath the scars. Enhanced results may be achieved with an appropriate skin care routine, along with daily use of a sunscreen of at least SPF 30. If you’d like to learn more or schedule a consultation, contact me today!  
                    </p>
                </div>
                <div className="p-4 lg:px-8">
                <span>Take A Look At These Amazing Results!</span>
                <Gallery 
                    className="grid grid-col-1 md:grid-cols-4 gap-4"
                    imageClass="rounded-sm shadow-lg max-h-[400px]"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling1.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling2.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling3.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling4.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling5.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling6.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling7.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling8.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling9.jpg?raw=true" alt="Microneedling Before & After Treatment" />,
                    ]}    
                />
                
                </div>
                <div className="p-4 md:p-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col">
                <div className="flex flex-col m-4">
                        <h2 className="font-bold mb-4">
                        Is there downtime?
                        </h2>
                        <p className="my-1">
                    The ACS Pen provides another benefit, in addition to stimulating the body’s healing response; the micro channels allow for deeper penetration by skin care serums. For example, by combining the procedure with a serum. The needles will push the serum deeper into the skin as the puncture wounds are created, which will help the serum ingredients penetrate more deeply. Otherwise, a stem cell solution may be applied to the skin after treatment; to boost the healing process and production of new, healthy skin. The micro channels created by micro needling will make it much easier for the stem cell treatment to penetrate into the deeper layers of the skin, where collagen and elastin fibers form.  During the micro needling procedure we use serums that are derived from human stem cells and contain a high concentration of natural human growth factors and cytokines. These growth factors support cellular renewal and have potent regenerating properties to improve skin firmness, elasticity, scaring and tone. Fine lines and wrinkles diminish over time, and skin looks and feels brighter, more luminous, and healthy.
                        </p>
                        <p className="my-1">
                        It is recommended that clients wait 24 hours before applying makeup. We do supply Osmosis Skin Care minerals after treatment if necessary. Clients are to avoid direct sun exposure until the skin has healed and wear SPF.
                        </p>
                    </div>
                    <div className="flex flex-col m-4">
                        <h2 className="font-bold my-4">
                        How many Microneedling with ASC Pen treatments will you need?
                        </h2>
                        <p className="my-1">
                        Because Microneedling with an ACS Pen is not a particularly aggressive treatment, you’ll need several treatments over a three to six month period. Results are cumulative so you will need to commit to more than one treatment to get obvious results. Clients with acne scars typically need six to eight treatments. Usually, you will notice some improvement after the first or second treatment, and more significant results will occur after four to six treatments spaced 2-4 weeks apart. Collagen remodeling takes place over time. Skin will continue to improve over the next 6 to 12 months after treatments with proper skin care regimen. Results will vary with each patient.
                        </p>
                    </div>
                    <div className="flex flex-col m-4">
                        <h2 className="font-bold my-4">
                        How much does microneedling cost?
                        </h2>
                        <p className="my-1">
                            At Essence of Beauty, we offer you the ability to book either individual treatments or to package your treatments for an additional discount.
                        </p>
                        <div className="flex flex-col my-4">
                            <h4 className="font-bold mb-4 text-brown">Treatment Cost:</h4>
                            <span><strong>$295</strong>/ individual treatment</span>
                            <span><strong>$810</strong>/ 3 treatments package when pre-booked & pre-paid</span>
                        </div>
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

export default Microneedling