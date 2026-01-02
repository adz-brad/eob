import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Seo from '../components/seo'

// Service data organized by category - image field references the filename
const serviceCategories = [
    {
        name: "Acne Clinic",
        id: "acne-clinic",
        services: [
            {
                title: "Holistic Acne Clinic",
                slug: "/holistic-acne-clinic-ottawa/",
                description: "Personalized acne treatment protocols including cutting edge treatments, from non-invasive facials to holistic, organic & natural regimens.",
                price: "Program-based",
                imageName: "holisticAcneClinic"
            },
            {
                title: "Virtual Acne Program",
                slug: "/virtual-acne-program/",
                description: "Convenient, highly effective step-by-step system featuring coaching and education using the right products for real results from home.",
                price: "$80 consultation",
                imageName: "virtualAcneHeader"
            },
            {
                title: "New Client Acne Consultation",
                slug: "/new-client-acne-consultation/",
                description: "45-minute evaluation of your skin, skin history, and discussion of your skincare goals and treatment options.",
                price: "$50",
                imageName: "newClientConsultHeader"
            },
            {
                title: "Acne Treatment",
                slug: "/acne-treatment-ottawa/",
                description: "Comprehensive acne treatment combining deep pore cleansing, extractions, and specialized serums for clearer skin.",
                price: "See details",
                imageName: "acneTreatmentHeader"
            },
            {
                title: "Cystic Acne Treatment",
                slug: "/cystic-acne-treatment-ottawa/",
                description: "Specialized treatment for severe cystic acne using fast-acting clinical protocols designed to calm inflammation.",
                price: "See details",
                imageName: "cysticAcneHeader"
            },
            {
                title: "Acne Scars Revision",
                slug: "/acne-scars-treatment-ottawa/",
                description: "Customized treatment options to minimize scarring and restore your complexion's radiance.",
                price: "$50 consultation",
                imageName: "acneScarsHeader"
            },
            {
                title: "Back Acne Treatment",
                slug: "/back-acne-treatment-ottawa/",
                description: "Proven treatments to clear up body acne on your back, chest, and shoulders with amazing results.",
                price: "$50 consultation",
                imageName: "backAcneHeader"
            }
        ]
    },
    {
        name: "Facials",
        id: "facials",
        services: [
            {
                title: "Facial Treatments",
                slug: "/facial-treatments-ottawa/",
                description: "Customized facials designed to treat acne, scarring, signs of aging, pigmentation, rosacea and more.",
                price: "From $148",
                imageName: "facialTreatmentHeader"
            },
            {
                title: "Rosacea & Sensitive Skin",
                slug: "/rosacea-treatment-sensitive-skin/",
                description: "Gentle treatments using 302 skincare to control rosacea and soothe sensitive skin without irritation.",
                price: "From $168",
                imageName: "rosaceaHeader"
            },
            {
                title: "Aging & Dehydrated Skin",
                slug: "/aging-and-dehydrated-skin/",
                description: "Facial rejuvenation treatments to revive tired skin, turn back the clock, and address minor imperfections.",
                price: "From $159",
                imageName: "facialAgingHeader"
            },
            {
                title: "Hyperpigmentation & Melasma",
                slug: "/hyperpigmentation-melasma-treatment-ottawa/",
                description: "Treatments to minimize spots and blemishes from hyperpigmentation and melasma for all skin types.",
                price: "$50 consultation",
                imageName: "hyperpigmentationHeader"
            }
        ]
    },
    {
        name: "Clinical Treatments",
        id: "clinical-treatments",
        services: [
            {
                title: "Radiance Hydro Infusion Facial",
                slug: "/radiance-hydro-infusion-facial/",
                description: "Cutting-edge skin rejuvenation providing instant glow and 97% better ingredient absorption than topical application.",
                price: "$189",
                imageName: "radianceInfusion1"
            },
            {
                title: "DMK Enzyme Therapy",
                slug: "/dmk-enzyme-therapy/",
                description: "Signature enzyme treatment that works on your skin's internal structure to bring it back to its genetic potential.",
                price: "From $199",
                imageName: "dmk"
            },
            {
                title: "AnteAge Stem Cell Facial",
                slug: "/anteage-stem-cell-facial/",
                description: "Award-winning stem cell-based skincare and microchanneling for anti-aging and skin restoration.",
                price: "Contact for pricing",
                imageName: "anteagestemcellHeader"
            },
            {
                title: "Microneedling",
                slug: "/microneedling-ottawa/",
                description: "Revolutionary rejuvenation procedure using fine needles to boost collagen production and treat scars.",
                price: "$350",
                imageName: "microneedlingHeader"
            },
            {
                title: "Bio Microneedling",
                slug: "/bio-microneedling/",
                description: "Natural, vegan-friendly treatment combining precise techniques with biological microparticles for new skin in 7 days.",
                price: "$235",
                imageName: "restorativeBioPeel1"
            },
            {
                title: "LED Photo Facial",
                slug: "/led-photo-facial-light-therapy/",
                description: "Pain-free light therapy to reduce inflammation, boost collagen, and even out skin tone.",
                price: "$60",
                imageName: "cellumaLedTherapy"
            },
            {
                title: "Ultrasonic Facial",
                slug: "/non-invasive-ultrasonic-facial/",
                description: "Non-invasive facial using high-speed sound waves to cleanse, exfoliate, and rejuvenate all skin types.",
                price: "$168",
                imageName: "ultrasonicFacialHeader"
            },
            {
                title: "302 Fountain of Youth",
                slug: "/302-fountain-of-youth/",
                description: "Revolutionary skincare approach using Avogen™ to naturally treat and repair skin without harsh chemicals.",
                price: "Product-based",
                imageName: "302fountainHeader"
            }
        ]
    },
    {
        name: "Special Peels",
        id: "special-peels",
        services: [
            {
                title: "AfterGlow Chemical Peel",
                slug: "/afterglow-chemical-peel-ottawa/",
                description: "Safe chemical peel designed to fight acne, signs of aging, and pigmentation with visible results.",
                price: "From $235",
                imageName: "afterglowHeader"
            },
            {
                title: "Herbal Green Peel®",
                slug: "/herbal-green-peel/",
                description: "Acid-free herbal formulation for skin renewal treating scars, aging signs, and pigmentation naturally.",
                price: "From $310",
                imageName: "greenPeelHeader"
            },
            {
                title: "Vitamin A Infusion Peel",
                slug: "/acid-free-vitamin-a-skin-peel/",
                description: "Non-acid peel with concentrated Retinaldehyde customized to your skin's needs for collagen stimulation.",
                price: "$235",
                imageName: "vitamin-a-infusion-peel"
            },
            {
                title: "Acid-Free & Chemical Peels",
                slug: "/acid-free-chemical-peels-ottawa/",
                description: "Deep skin exfoliation and hydration treatments with immediately visible results for all skin types.",
                price: "See options",
                imageName: "featuredTreatment-restorativeBio"
            }
        ]
    },
    {
        name: "Additional Services",
        id: "additional-services",
        services: [
            {
                title: "Skin Tag, Milia & Red Dot Removal",
                slug: "/skin-tags-red-dots-milia-removal-ottawa/",
                description: "Safe, non-invasive treatment to permanently remove skin tags, milia, and other growths in one session.",
                price: "Varies by quantity",
                imageName: "skintagHeader"
            },
            {
                title: "Skin Preparations for Weddings",
                slug: "/skin-preparations-for-weddings/",
                description: "Customized beauty regimen to help you look sensational and feel confident on your special day.",
                price: "Various packages",
                imageName: "skinPrepHeader"
            }
        ]
    }
]

const Treatments = ({ data }) => {
    // Create a map of image names to their GatsbyImage data
    const imageMap = {}
    data.allFile.nodes.forEach(node => {
        imageMap[node.name] = getImage(node.childImageSharp)
    })

    return (
        <>
            <Banner
                heading="Our Treatments & Services"
                gradient="from-black/40 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Treatments & Services" src="../assets/images/facialTreatmentHeader.png" />}
            />
            
            <section className="max-w-screen-xxl mx-auto p-4 md:p-8" aria-labelledby="treatments-heading">
                <div className="text-center my-8">
                    <h1 id="treatments-heading" className="text-2xl md:text-4xl font-bold mb-4">Expert Skin Care Treatments in Ottawa</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Discover our comprehensive range of holistic, organic treatments designed to address acne, aging, pigmentation, rosacea, and more. Each service is customized to your skin's unique needs.
                    </p>
                </div>

                {/* Quick Navigation */}
                <nav className="flex flex-wrap justify-center gap-2 md:gap-4 my-8" aria-label="Treatment categories">
                    {serviceCategories.map((category) => (
                        <a 
                            key={category.id}
                            href={`#${category.id}`}
                            className="px-4 py-2 bg-lightGreen hover:bg-green hover:text-white rounded-md transition-colors text-sm md:text-base"
                        >
                            {category.name}
                        </a>
                    ))}
                </nav>

                {/* Service Categories */}
                {serviceCategories.map((category) => (
                    <section key={category.id} id={category.id} className="my-12" aria-labelledby={`${category.id}-heading`}>
                        <h2 id={`${category.id}-heading`} className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-2 border-green">
                            {category.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {category.services.map((service, index) => {
                                const image = imageMap[service.imageName]
                                return (
                                    <article 
                                        key={`${category.id}-${index}`}
                                        className="flex flex-col bg-white rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                                    >
                                        <div className="h-48 overflow-hidden">
                                            {image && (
                                                <GatsbyImage 
                                                    image={image} 
                                                    alt={service.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col flex-grow p-4">
                                            <h3 className="font-bold text-lg md:text-xl mb-2 text-darkGreen">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 mb-3 flex-grow">
                                                {service.description}
                                            </p>
                                            <div className="mt-auto">
                                                <span className="block text-brown font-semibold mb-3">
                                                    {service.price}
                                                </span>
                                                <Link 
                                                    to={service.slug}
                                                    className="inline-block w-full text-center px-4 py-2 bg-darkGreen hover:bg-green text-white rounded-md transition-colors"
                                                    aria-label={`Learn more about ${service.title}`}
                                                >
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </section>
                ))}
            </section>

            <section className="flex flex-col items-center p-4 md:p-8 bg-lightGreen" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Ready to Transform Your Skin?</h2>
                <p className="text-center max-w-2xl mb-6">
                    Book a consultation to discuss your skin concerns and discover the perfect treatment plan tailored to your unique needs.
                </p>
                <Button
                    data={{ text: "Book a Consultation", anchor: "contact" }}
                    className="buttonLight bg-white"
                />
            </section>
        </>
    )
}

export const pageQuery = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(
                        width: 400
                        height: 200
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        transformOptions: { cropFocus: CENTER }
                    )
                }
            }
        }
    }
`

export default Treatments

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/treatments/"
    
    // Create ItemList schema for rich snippets
    const serviceListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Essence of Beauty Skin Care Treatments",
        "description": "Comprehensive list of holistic skin care treatments including acne treatment, facials, peels, and specialized services.",
        "numberOfItems": serviceCategories.reduce((acc, cat) => acc + cat.services.length, 0),
        "itemListElement": serviceCategories.flatMap((category, catIndex) => 
            category.services.map((service, serviceIndex) => ({
                "@type": "ListItem",
                "position": catIndex * 10 + serviceIndex + 1,
                "item": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description,
                    "url": `https://www.essenceofbeauty.ca${service.slug}`,
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://www.essenceofbeauty.ca/#organization",
                        "name": "Essence of Beauty Ottawa"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Ottawa"
                    }
                }
            }))
        )
    }

    // Service aggregate schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Skin Care Treatments",
        "description": "Expert holistic skin care treatments in Ottawa including acne treatment, facials, chemical peels, microneedling, and specialized services for all skin types.",
        "provider": {
            "@type": "Organization",
            "@id": "https://www.essenceofbeauty.ca/#organization",
            "name": "Essence of Beauty Ottawa Acne & Skin Clinic"
        },
        "areaServed": {
            "@type": "City",
            "name": "Ottawa"
        },
        "serviceType": "Skin Care Treatment",
        "url": pageUrl
    }

    return (
        <>
            <Seo
                pageTitle="Treatments & Services - Holistic Skin Care in Ottawa"
                pageDescription="Explore our comprehensive range of holistic skin care treatments in Ottawa: acne treatment, facials, chemical peels, microneedling, DMK enzyme therapy, and more. Customized for all skin types."
                pageKeywords="Treatments, Services, Acne Treatment, Facials, Chemical Peels, Microneedling, DMK Enzyme, Holistic, Beauty, Organic, Ottawa, Skin Care, Rosacea, Anti-aging, Hyperpigmentation"
                pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/facialTreatmentHeader.png"
                pageType="service"
                additionalSchema={[serviceListSchema, serviceSchema]}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
}
