import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const data = {
    "title": "Home ",
    "description": "Ottawa Facials - Organic - Essence of Beauty - Facial Ottawa",
    "components": [

        // Hero Component Data
        {
            "type": "hero",
            "video": "https://github.com/brad-adrenalize/eob/blob/main/src/assets/video/eob-video-bg-overlay.mp4?raw=true",
            "heading": "Ottawa’s Premier Acne, Rosacea & Skin Rejuvenation Clinic",
            "caption": "Reminding you of the importance and enjoyment of feeling beautiful every single day.",
            "button": {
                "text": "Learn More",
                "accessibleText": "Learn More About Essence of Beauty Skin Rejuvenation",
                "anchorLink": "inspire"
            }
        },

        // Home Page Split Image / List Component
        {
            "type": "splitList",
            "heading": "Inspire the Nature of Beauty!",
            "caption": "Essence of Beauty is Ottawa's premier acne, scars, rosacea and anti-aging skincare clinic, specializing in facial rejuvenation treatments & peels using highly effective natural and organic formulas that combine age-defying science with nature’s most repairing elements.",
            "image": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/benefits.jpg?raw=true" />,
            "anchor": "inspire",
            "listTitle": "The Benefits",
            "listItems": [
                "Treatments that incorporate the latest, healthiest and most effective skincare science and research.",
                "Skincare products that are not only free of acids, harsh chemicals and abrasives, but are organic and actually regenerate your skin.",
                "Follow-up encouragement and support to ensure you experience the maximum benefit from every treatment.",
                "Constant monitoring of your progress in meeting your skincare goals."
            ],
            "button": {
                "text": "Schedule An Appointment",
                "accessibleText": "Schedule An Appointment at Essence of Beauty",
                "anchor": "contact"
            }
        },

        // Featured Component Data
        {
            "type": "features",
            "title": "Featured Treatments",
            "caption": "Essence of Beauty treatments are simple yet sophisticated, based on each client’s unique and personal requirements.",
            "description": "The clinic specializes in natural, organic skin care that rebuilds and regenerates the skin from the inside out using state of art, non-surgical, non-invasive, acne, acne scarring, rosacea and anti-aging facial treatments. These include Ultrasound, Micro-current, LED Lights, DMK Enzyme Treatments, Derma Ray, Dermal Infusion and Herbal Green Peel® therapies. More traditional treatments include acne, acne scars, rosacea, skin tag and red spot removal and repair of damaged facial capillaries with Vasculyse.",
            "items": [  
                {
                    "name": "Facial Treatments",
                    "description": "Calling on her deep knowledge of the most effective non-invasive techniques and products, Eva creates customized facials that address your skin’s unique needs and your dreams and goals for your complexion, integrating the health of your body in the treatment equation for immediately noticeable and long-lasting results.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Facial Treatments" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/deepPoreFacial.jpg?raw=true" />,
                    "link": "/facial-treatments-ottawa/"
                },
                {
                    "name": "Radiance Hydro Infusion Facial",
                    "description": " Our signature Radiance Hydro Infusion Facial is the latest innovation in skin rejuvenation and one of our most requested facial treatments at Essence of Beauty. This HydraFacial alternative provides an instant glow and boost in hydration due to the ingredients being absorbed 97% better than topical application alone. It also has a brightening effect for that coveted lit-from-within glow! Throughout the treatment, the skin is literally being drenched with wonderful elixirs and serums. The best part is that it’s non-invasive and there is absolutely no downtime!",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Radiance Hydro Infusion Facial Rejuvenation" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/radianceInfusion2.png?raw=true" />,
                    "link": "/radiance-hydro-infusion-facial/"
                },
                {
                    "name": "Growth Factor Microneedling",
                    "description": "Growth Factor Microneedling is used with treatments to stimulate collagen production, reduce acne scarring, reduce and remodel trauma scars, improve photo damaged skin, enlarge pores, improve skin roughness, and reduce mild to moderate wrinkles.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Growth Factor Microneedling" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling-feature.jpg?raw=true" />,
                    "link": "/microneedling-ottawa/"
                },
                {
                    "name": "Acid-Free & Chemical Facial Peels",
                    "description": "At the Essence of Beauty, I offer No-Acid natural grade facial peels to target a variety of skin conditions such as pigmentation, acne and acne scarring, sun damage and fine lines and wrinkles",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Special Peels" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/vitamin-a-infusion-peel.jpg?raw=true" />,
                    "link": "/acid-free-chemical-peels-ottawa/"
                },
                {
                    "name": "Ultrasonic Facial",
                    "description": "Ultrasonic frequency has been shown to kill bacteria and decongest the pores resulting in cleaner, healthier skin. When used regularly along with a quality skincare home program, your skin will be smoother, healthier and younger looking.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Ultrasonic Facial" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ultrasonicFacial.jpg?raw=true?raw=true" />,
                    "link": "/non-invasive-ultrasonic-facial/"
                },
                {
                    "name": "DMK Enzyme Therapy",
                    "description": "DMK Enzyme Therapy Treatment is the most powerful, effective method for hydrolyzing dead cell material from the skin tissues, detoxifying the skin of all impurities and lifting and tightening it for a firmer, glowing appearance.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - DMK Enzyme Therapy" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/dmk.jpg?raw=true" />,
                    "link": "/dmk-enzyme-therapy/"
                },
            ],
        },
        {
            "type": "meetEva"
        },

        // Homepage Testimonials Components
        {
            "type": "testimonials",
            "testimonials": [
                {
                    "text": "I started going to Essence of Beauty in hopes of helping my acne problem. I was ready to go on antibiotics to clear up my face as a last resort. Thankfully, with the facials that I received from Eva along with product recommendations, my face cleared up….I couldn’t be happier. I will continue to get facials here and plan to try out some of their other treatments. I have also recommended Eva to friends and family.",
                    "name": "Maria"
                },
                {
                    "text": "I went here today for a brazillian wax, and eyebrow wax for the first time and I was thrilled with the service and the products used. Eva was exceptionally friendly and put me at ease throughout the entire process. I think she’d also be a great person to go to if you’re a little nervous about going in for your first wax. I was feeling comfortable every step of the way. Absolutely the best place I’ve been to in Ottawa for waxing services. Check it out! ",
                    "name": "Adora P"
                },
                {
                    "text": "Essence of Beauty came highly recommended from a friend when I was looking for an esthetician in the Downtown Ottawa area. I used to get facials in Montreal and finding Essence of Beauty near home was a miracle. I have received a range of services from her and have never been disappointed. I feel completely comfortable and relaxed every time I come in for an appointment. She even managed to get my skin back on track through her services and wonderful products. ",
                    "name": "Trisha"
                },
            ]
        }
    ]
}