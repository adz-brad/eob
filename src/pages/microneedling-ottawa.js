import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const Microneedling = () => {
    return (
        <>

            <Banner
                heading="Microneedling"
                gradient="from-black/60 via-black/30 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Microneedling" src="../assets/images/microneedling.jpg" />}
            />
            <section className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8" aria-labelledby="microneedling-heading">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 id="microneedling-heading" className="text-2xl md:text-4xl font-bold mb-2">Repair Acne Scarring With Microneedling</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Microneedling is a safe, simple procedure designed to treat skin issues like sun damage & acne scarring, resulting in a glowing, fresh, even skin appearance!</h2>
                    <p className="my-1">
                    Microneedling is used with treatments to stimulate collagen production, reduce acne scarring, reduce and remodel trauma scars, improve photo damaged skin, enlarge pores, improve skin roughness, and reduce mild to moderate wrinkles. This procedure is relatively quick, and can be performed in approximately one hour when treating the entire face. Since microneedling is minimally invasive, doesn’t cause significant wounding to the skin, and isn’t light-based, most people can safely undergo microneedling therapy with minimal risk of long-term adverse effects. Typically, important factors such as age and skin colour doesn’t matter. Many clients prefer microneedling because of its minimal downtime. Although some redness may occur immediately after the procedure, any irritation should subside by the following day. The procedure is most commonly used on the face, neck, and décolletage with appealing results.

                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "microneedling-info" }}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="../assets/images/growth-factor-microneedling.jpg"
                    alt="Essence of Beauty ACS Pen Microneedling for Scars, Acne, Wrinkles, Age Spots and Hyperpigmentation"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </section>
            <section
                id="microneedling-info"
                className="flex flex-col lg:flex-row bg-lightGreen rounded-md shadow-md p-4 md:p-8 md:m-4"
                aria-labelledby="microneedling-info-heading"
            >
                <div className="flex flex-col md:mx-4">
                    <h2 id="microneedling-info-heading" className="text-2xl md:text-4xl mb-4 md:my-4">What's involved in a Microneedling treatment?</h2>
                    <p className="my-1">
                        We use a device called ACS Pen, a handheld automated machine that holds a sterile needle head cartridge. Tiny needles pierce the skin at predetermined depths depending on the results you want to achieve. Shorter needle penetration can enhance product penetration and smooth superficial skin, while longer needle penetration can be used to create collagen response more deeply, such as when treating acne scars.
                    </p>
                    <p className="my-1">
                        The depth of the treatment will be determined by which skin concerns are being targeted. After the treatment, we will apply a beautiful refresh mask, the appropriate post-treatment products, and provide you with post-treatment instructions.
                    </p>
                    <p className="my-1">
                        Due to advanced technology offered by the ACS-Pen, topical anaesthetic is not required for this microneedling treatment. This ACS is appropriate for all skin types, you may feel a slight vibration on the skin, and however the treatment is virtually painless.
                    </p>
                    <Button
                        data={{ text: "What To Expect", anchor: "microneedling-what-to-expect" }}
                        className="buttonLight bg-white m-8 md:my-auto mx-auto md:mx-4"
                    />
                </div>
                <StaticImage
                    loading="lazy"
                    src="../assets/images/microneedling.jpg"
                    alt="Essence of Beauty Ottawa Growth Factor Microneedling Treatment"
                    className="lg:w-1/3 shrink-0 shadow-md rounded-sm mx-4"
                />

            </section>

            <section className="my-8 p-4 md:p-8" aria-labelledby="what-to-expect-heading">
                <div id="microneedling-what-to-expect" className="flex flex-col my-8">
                    <h2 className="text-xl md:text-3xl mb-2">
                        What results can I expect?
                    </h2>
                    <p className="my-1">
                        Many clients notice an immediate glow in their skin after their first microneedling treatment. As you go through your series, you will begin to notice smoother skin and an improved skin tone, as your natural exfoliation process is optimized. Within 4-6 weeks you may begin to see visible improvements in fine lines and pore size as the skin’s epidermis thickens. Improvement in scars may continue up to two years after the treatments, as new healthy tissue is generated beneath the scars. Enhanced results may be achieved with an appropriate skin care routine, along with daily use of a sunscreen of at least SPF 30. If you’d like to learn more or schedule a consultation, contact me today!
                    </p>
                </div>
                <div className="flex flex-col items-center my-8">
                    <span className="font-headers font-medium text-2xl md:text-3xl my-2">Just Look At These Amazing Results!</span>
                    <span className="mb-8">Comparing Before & After Treatment</span>
                </div>
                <Gallery
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8"
                    imageClass="rounded-sm shadow-lg max-h-[300px]"
                    images={[
                        <StaticImage src="../assets/images/microneedling-beforeafter-1.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling-beforeafter-2.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling8.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling1.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling2.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling3.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling4.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling5.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling6.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                        <StaticImage src="../assets/images/microneedling7.jpg" alt="Microneedling Before & After Treatment at Essence of Beauty Ottawa" />,
                    ]}
                />
            </section>
            <section className="p-4 md:p-8" aria-labelledby="microneedling-faq-heading">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col">
                    <div className="flex flex-col m-4">
                        <h2 className="text-xl md:text-3xl mb-4">
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
                        <h2 className="text-xl md:text-3xl my-4">
                            How many Microneedling with ASC Pen treatments will you need?
                        </h2>
                        <p className="my-1">
                            Because Microneedling with an ACS Pen is not a particularly aggressive treatment, you’ll need several treatments over a three to six month period. Results are cumulative so you will need to commit to more than one treatment to get obvious results. Clients with acne scars typically need six to eight treatments. Usually, you will notice some improvement after the first or second treatment, and more significant results will occur after four to six treatments spaced 2-4 weeks apart. Collagen remodeling takes place over time. Skin will continue to improve over the next 6 to 12 months after treatments with proper skin care regimen. Results will vary with each patient.
                        </p>
                    </div>
                    <div className="flex flex-col m-4">
                        <h2 className="text-xl md:text-3xl my-4">
                            How much does microneedling cost?
                        </h2>
                        <p className="my-1">
                            At Essence of Beauty, we offer you the ability to book either individual treatments or to package your treatments for an additional discount.
                        </p>
                        <div className="flex flex-col my-4">
                            <h4 className="font-bold mb-4 text-brown">Treatment Cost:</h4>
                            <span><strong>$350</strong>/ individual treatment</span>
                            <span><strong>$975</strong>/ 3 treatments package when pre-booked & pre-paid</span>
                        </div>
                    </div>
                </Card>
            </section>
            <section className="flex flex-col items-center p-4" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default Microneedling

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/microneedling-ottawa/"
    
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Microneedling",
        "description": "Microneedling treatment to stimulate collagen production, reduce acne scarring and remodel trauma scars, improve photo damaged skin & roughness, and reduce mild to moderate wrinkles.",
        "provider": {
            "@type": "Organization",
            "@id": "https://www.essenceofbeauty.ca/#organization",
            "name": "Essence of Beauty Ottawa Acne & Skin Clinic"
        },
        "areaServed": {
            "@type": "City",
            "name": "Ottawa"
        },
        "serviceType": "Microneedling Treatment",
        "url": pageUrl
    }
    
    return (
        <>
            <Seo
                pageTitle="Microneedling Ottawa - Treat Sun Damaged Skin, Acne, Scarring"
                pageDescription="Essence of Beauty Ottawa uses microneedling to stimulate collagen production, reduce acne scarring and remodel trauma scars, improve photo damaged skin & roughness, and reduce mild to moderate wrinkles."
                pageKeywords="Growth Factor Microneedling, Pores, Damaged Skin, Acne Scarring, Micro-needling, micro needle, Microneedling, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/growth-factor-microneedling.jpg"
                pageType="service"
                additionalSchema={serviceSchema}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
} 
