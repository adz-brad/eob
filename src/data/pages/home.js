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
            "type": "info",
            "heading": "Inspire the Nature of Beauty!",
            "content": "Essence of Beauty, Ottawa’s Holistic Acne, Scars, Rosacea and Anti-Aging Skincare Clinic specializes in facial rejuvenation treatments using highly effective natural and organic formulas that combine age-defying science with nature’s most repairing elements.",
            "anchor": "inspire"
        },
        {
            "type": "grid",
            "maxColumns": 2,
            "split": true,
            "splitWidth": 0.5,
            "splitTitle": "The Benefits",
            "splitImage": <StaticImage alt="Essence of Beauty Ottawa - The Benefits" src="../../assets/images/benefits.jpg"/>,
            "showItemNumbers": true,
            "items": [
                "<p>Treatments that incorporate the latest, healthiest and most effective skincare science and research.</p>",
                "<p>Skincare products that are not only free of acids, harsh chemicals and abrasives, but are organic and actually regenerate your skin.</p>",
                "<p>Follow-up encouragement and support to ensure you experience the maximum benefit from every treatment.</p>",
                "<p>Constant monitoring of your progress in meeting your skincare goals.</p>"
            ]
        }
    ]
}