import React from 'react'
import HeroVideo from '../../assets/video/eob-video-bg-overlay.mp4'
import { StaticImage } from "gatsby-plugin-image"
 
export const data = {
    "title": "Home ",
    "description": "Ottawa Facials - Organic - Essence of Beauty - Facial Ottawa",
    "components": [
        {
            "type": "hero",
            "video": HeroVideo,
            "heading": "Ottawa’s Holistic Anti-Aging Skincare, Acne, Rosacea & Scars Clinic",
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
            "image": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="../../assets/images/benefits.jpg"/>,
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
            "description": "Essence of Beauty treatments are simple yet sophisticated, based on each client’s unique and personal requirements. The clinic specializes in natural, organic skin care that rebuilds and regenerates the skin from the inside out using state of art, non-surgical, non-invasive, acne, acne scarring, rosacea and anti-aging facial treatments. These include Ultrasound, Micro-current, LED Lights, DMK Enzyme Treatments, Derma Ray, Dermal Infusion and Herbal Green Peel® therapies. More traditional treatments include acne, acne scars, rosacea, skin tag and red spot removal and repair of damaged facial capillaries with Vasculyse.",
            "items": [
                {
                    "name": "Microcurrent Facial Toning",
                    "description": "Natural facial toning with microcurrent is unique in its ability to improve the muscles of the face to create a more youthful and toned appearance through a process that can be largely considered a nonsurgical face-lift. This is a revolutionary cosmetic service that is unique in the industry with the potential to enhance your overall health and help you look younger!",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="../../assets/images/microcurrent.jpg"/>,
                    "link": "/the-magic-of-micro-current" 
                },
                {
                    "name": "DMK Enzyme Therapy" ,
                    "description": "DMK Enzyme Therapy Treatment is the most powerful, effective method for hydrolyzing dead cell material from the skin tissues, detoxifying the skin of all impurities and lifting and tightening it for a firmer, glowing appearance. It works on the internal structures and functions of the skin to keep it fit, healthy and youthful.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="../../assets/images/dmk.jpg"/>,
                    "link": "/dmk-enzyme-therapy" 
                },
                {
                    "name": "Herbal Green Peel®" ,
                    "description": "Green Peel® is a herbal formulation composed of natural active substances such as vitamins, plant hormones, enzymes, mineral salts, various dried flowers, sea weeds sand other beneficial ingredients, offering you an opportunity to experience all the benefits of skin refreshment, skin renewal, skin brightening, and skin treatments that are often associated with acids WITHOUT the questionable immediate and longer-terms disadvantages.",
                    "image": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="../../assets/images/greenPeel.png"/>,
                    "link": "/herbal-green-peel" 
                },
            ],
            "button": {
                "text": "View More Treatments",
                "link": "/treatments"
            }
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