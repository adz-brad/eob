import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
 
export const data = {
    "title": "Home ",
    "description": "Ottawa Facials - Organic - Essence of Beauty - Facial Ottawa",
    "components": [
        {
            "type": "hero",
            "video": "https://github.com/brad-adrenalize/eob/blob/main/src/assets/video/eob-video-bg-overlay.mp4?raw=true",
            "heading": "Ottawa’s Premier Holistic Skin Rejuvenation Clinic",
            "caption": "Reminding you of the importance and enjoyment of feeling beautiful every single day.",
            "button": {
                "text": "Learn More",
                "anchorLink": "inspire"
            }
        },
        {
            "type": "splitList",
            "heading": "Inspire the Nature of Beauty!",
            "caption": "Essence of Beauty, Ottawa’s Holistic Acne, Scars, Rosacea and Anti-Aging Skincare Clinic specializes in facial rejuvenation treatments using highly effective natural and organic formulas that combine age-defying science with nature’s most repairing elements.",
            "image": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/benefits.jpg?raw=true"/>,
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
                "anchor": "contact"
            }
        },
        {
            "type": "features",
            "title": "Featured Treatments",
            "caption": "Essence of Beauty treatments are simple yet sophisticated, based on each client’s unique and personal requirements.",
            "description": "The clinic specializes in natural, organic skin care that rebuilds and regenerates the skin from the inside out using state of art, non-surgical, non-invasive, acne, acne scarring, rosacea and anti-aging facial treatments. These include Ultrasound, Micro-current, LED Lights, DMK Enzyme Treatments, Derma Ray, Dermal Infusion and Herbal Green Peel® therapies. More traditional treatments include acne, acne scars, rosacea, skin tag and red spot removal and repair of damaged facial capillaries with Vasculyse.",
            "items": [
                {
                    "name": "Facial Treatments",
                    "description": "Calling on her deep knowledge of the most effective non-invasive techniques and products, Eva creates customized facials that address your skin’s unique needs and your dreams and goals for your complexion, integrating the health of your body in the treatment equation for immediately noticeable and long-lasting results.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Facial Treatments" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/deepPoreFacial.jpg?raw=true"/>,
                    "link": "/facial-treatments" 
                },
                {
                    "name": "Needle-Free Mesotherapy",
                    "description": "Nano Infusion Mesotherapy otherwise known as nano-needling is an innovative, non-invasive transdermal serum delivery system designed to rejuvenate your skin and remedy many common issues like lack of tone, uneven texture, excessive pigmentation, scarring, and loss of elasticity.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Needle-Free Mesotherapy" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/needleFreeMesotherapy.jpeg?raw=true"/>,
                    "link": "/needle-free-mesotherapy-skin-tightening" 
                },
                {
                    "name": "Growth Factor Microneedling",
                    "description": "Growth Factor Microneedling is used with treatments to stimulate collagen production, reduce acne scarring, reduce and remodel trauma scars, improve photo damaged skin, enlarge pores, improve skin roughness, and reduce mild to moderate wrinkles.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Growth Factor Microneedling" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/microneedling-feature.jpg?raw=true"/>,
                    "link": "/growth-factor-microneedling" 
                },
                {
                    "name": "Special Peels" ,
                    "description": "At the Essence of Beauty, I offer No-Acid natural grade facial peels to target a variety of skin conditions such as pigmentation, acne and acne scarring, sun damage and fine lines and wrinkles",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Special Peels" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/vitamin-a-infusion-peel.jpg?raw=true"/>,
                    "link": "/special-peels" 
                },
                {
                    "name": "Ultrasonic Facial" ,
                    "description": "Ultrasonic frequency has been shown to kill bacteria and decongest the pores resulting in cleaner, healthier skin. When used regularly along with a quality skincare home program, your skin will be smoother, healthier and younger looking.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - Ultrasonic Facial" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ultrasonicFacial.jpg?raw=true?raw=true"/>,
                    "link": "/ultrasonic-facial" 
                },
                {
                    "name": "DMK Enzyme Therapy" ,
                    "description": "DMK Enzyme Therapy Treatment is the most powerful, effective method for hydrolyzing dead cell material from the skin tissues, detoxifying the skin of all impurities and lifting and tightening it for a firmer, glowing appearance.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - Featured Treatment - DMK Enzyme Therapy" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/dmk.jpg?raw=true"/>,
                    "link": "/dmk-enzyme-therapy" 
                },
            ],
            /*"button": {
                "text": "View More Treatments",
                "link": "/treatments"
            }*/
        },
        { 
            "type": "meetEva"
        },
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