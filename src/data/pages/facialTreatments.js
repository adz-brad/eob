import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const treatmentMenu = [
    {
        name: "Deep Pore Cleansing Facial",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/deepPoreFacial.jpg?raw=true" className="h-full w-full" alt="Essence of Beauty Ottawa Deep Pore Cleansing Facial"/>,
        imagePosition: 'left',
        content: <p className="my-1">A customized facial treatment designed to help maintain a healthy completion. Incorporates European methods to gently exfoliate and deep cleanse the skin. Care is taken to thoroughly exfoliate, draw out impurities, and recondition the skin to promote lasting, visible change. This facial includes cleansing, skin analysis, steam therapy followed by an extraction process that truly leaves the skin clean and decongest. This treatment calms inflammation, destroys acne-causing bacteria, mattifies the complexion and reduces future breakouts. Recommended for all skin types.</p>,
        pricing: [
            {
                description: "75 Minute Session",
                cost: "$148",
            }
        ],
        link: null,
    },
    {
        name: "Radiance Hydro Infusion Facial",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/radianceInfusion2.png?raw=true" className="h-full w-full"  alt="Essence of Beauty Ottawa Radiance Hydro Infusion Facial"/>,
        imagePosition: 'right',
        content: <>
        <p className="my-1">
        Our signature Radiance Hydro Infusion Facial is the latest innovation in skin rejuvenation and one of our most requested facial treatments at Essence of Beauty. This HydraFacial alternative provides an instant glow and boost in hydration due to the ingredients being absorbed 97% better than topical application alone. It also has a brightening effect for that coveted lit-from-within glow! Throughout the treatment, the skin is literally being drenched with wonderful elixirs and serums. The best part is that it’s non-invasive and there is absolutely no downtime!
        </p>
        </>,
        pricing: [
            {
                description: "Single Treatment",
                cost: "$178",
            }
        ],
        link: "/radiance-hydro-infusion-facial/",
    },
    {
        name: "Ultrasonic Facial",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/signatureUltrasonicFacial.png?raw=true" className="h-full w-full" alt="Essence of Beauty Ottawa Ultrasonic Non-Invasive Facial" />,
        imagePosition: 'left',
        content: <p className="my-1">This Ultrasonic Facial is Essence of Beauty’s premiere high-performance non-invasive facial. Ultrasonic uses high speed, low-frequency sound waves that radiate invisible micro vibrations deep within cells, helping stimulate the skin’s natural repair mechanisms in distinct ways. It is ultimate advancement in non-invasive, safe skin regeneration. Ultrasound not only strengthen the skin’s collagen, elastin, but it also improves lymphatic flow and promotes the flow of the qi, circulation and improves the skin metabolism. It provides the cells with an abundance of nutrients and oxygen, accelerates cells rejuvenation, and maintenance the elastic state of the facial muscles while helping to expel toxins, reduce redness and inflammation and keep the skin healthy and beautiful. This deep tissue micro-massage is suitable for all skin types, from dull and dehydrated enlarged pores, acne and uneven texture to rosacea. This customize treatment begins with a thorough cleansing of neck and face, Ultrasonic exfoliation, micro-massage with serums, facial massage and mask. <strong>This is our one of most popular facials.</strong></p>,
        pricing: [
            {
                description: "85 Minute Session",
                cost: "$158",
            }
        ],
        link: "/non-invasive-ultrasonic-facial/",
    },
    {
        name: "Customize Treatment for Sensitive / Rosacea Skin",
        image: null,
        content: <>
        <p className="my-1">
        This gentle, calming, and soothing facial treatment is helpful for those who are suffering from rosacea. It instantly soothes irritation and provides immediate comfort and relief.
        </p>
        <p className="my-1">
        This treatment helps stabilize and renormalize the look of inflamed skin. Provides visible relief and moisturizing effects to irritated rosacea skin. Helps establish an intact skin barrier, visibly free of irritation and inflammation by renormalizing sebaceous gland activity and calming the appearance of inflamed and bacteria susceptible skin through improved metabolism and cell formation. This natural approach to rosacea will truly give long-lasting benefits in addition to making you feel better instantly.  A series of three or four treatments space one or two weeks apart will give best results.
        </p>
        </>,
        pricing: [
            {
                description: "85 Minute Session",
                cost: "$158",
            }
        ],
        link: null,
    },
    {
        name: "Brightening Treatment",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/brightening.jpg?raw=true" className="h-full w-full"  alt="Essence of Beauty Ottawa Skin Brightening Treatment"/>,
        imagePosition: 'left',
        content: <p className="my-1">A treatment to visibly reduce the appearance of skin discoloration and dark spots for Hyper-Pigmented skin. This treatment combines a light peel, Tranexamic Acid , Vitamin C, Needle Free Mesotherapy and LED Therapy. We are using products containing a large amount of vitamin C. It effectively improves skin complexion, prevent pigmentation and strengthen the protection against free radicals with Arbutin provides moisture, whitening, and elasticity along with prevention and suppression of aging with green tea extract. This treatment leaves skin glowing and clear.</p>,
        pricing: [
            {
                description: "75 Minute Session",
                cost: "$179 ",
            }
        ],
        link: null,
    },
    {
        name: "Vitamin A Infusion Peel with Retinaldehyde",
        image: null,
        content: <>
            <p className="my-1">
            The Vitamin A Infusion Peel is a unique non-acid peel and is customized to your skin’s needs. This peel is safe for all skin types and utilizes a concentrated vitamin A solution in the form of Retinaldehyde that is then custom blended with potent nutrients and antioxidants making it a great peel for many skin concerns including aging skin, acne, rosacea, and dull-looking skin. Vitamin A is also a potent stimulator of collagen and elastin. It is massaged deeply into the skin by your practitioner, making it a relaxing treatment.
            </p>
            <p className="my-1">
            This Facial Infusion offers immediate and long term results with noninvasive nano needling to enhance product absorption by driving active ingredients deep into the skin for optimal skin restoration. The enhanced treatment stimulates circulation and visibly softens fine lines, reduces scarring, improves hydration levels and helps to control breakouts. Each treatment is cocktailed to your skin’s request.
            </p>
        </>,
        pricing: [
            {
                description: "Per Treatment:",
                cost: "$178",
            }
        ],
        link: '/acid-free-vitamin-a-skin-peel/',
    },
    {
        name: "DMK Enzyme Treatment",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/dmk.jpg?raw=true" className="h-full w-full"  alt="Essence of Beauty Ottawa DMK Enzyme Treatment"/>,
        imagePosition: 'right',
        content: <p className="my-1">DMK signature treatments work on your internal structure and function of the skin and bring your skin back to its genetic potential. Revising your skin back to homeostasis is achieved through a course of enzyme therapy treatments, to kick start, boost and activate your skins own processes. ENZYME THERAPY aims to awaken the skin’s own enzymatic activity to restore lost functioning in the skin allowing it to return to its natural state. DMK Enzyme Therapy works by providing deep oxygenation to skin cells. This treatment is applied as a masque which contains a blend of transfer enzymes and unique specialized ingredients that help increase circulation, provide lymphatic drainage, free water levels in the skin, enhance collagen production and improve the skin’s metabolic function. In other words, it gets your skin working as it should, to create a smooth, healthy complexion. It is suitable for a wide range of conditions such as aging skin, sun damage, acne, rosacea and pigmentation.</p>,
        pricing: [
            {
                description: "90 Minute Session",
                cost: "$188",
            }
        ],
        link: "/dmk-enzyme-therapy/",
    },
    {
        name: "Hubislab Healing & Repairing Facial with Ultrasound",
        image: null,
        content: <p className="my-1">
            This skin treatment uses holistic therapies to treat skin conditions at the source. Rooted in science Hubislab addresses every aspect of skin damage and aging, targeting pathways from the inside out. Hubislab focuses on reducing inflammation and rebalancing the skin resulting in permanent changes.  This accomplished by a range of revolutionary ingredients and technologies delivered bio-active ingredients into the skin. With the combination of treatment therapies and the use of Hubislab products, the immune system of the skin can be strengthened, circulation and protective barrier improve. The DNA,  growth factors and antioxidant levels restore at the source. This treatment will be customized with 1 select age management modalities to address specific concerns based on current skin conditions. Your end result is healthier and more lustrous skin.
        </p>,
        pricing: [
            {
                description: "85 Minute Session",
                cost: "$158",
            }
        ],
        link: null,

    },
    {
        name: "Special Peels",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/featuredTreatment-restorativeBio.jpg?raw=true" className="h-full w-full"  alt="Essence of Beauty Ottawa Acid-Free Advanced Peels"/>,
        imagePosition: 'left',
        content: <>
        <p className="my-1">
        Our special peels are deep skin exfoliation and hydration treatments that improve the skin’s appearance. We offer a unique combination of facial peels that have immediately visible results: your skin is hydrated, rejuvenated and you look and feel younger.
        </p>
        <p className="my-1">
        Peels can be applied to the face and body. They work by exfoliating the outer layers of the skin and dead skin cells, thus revealing the healthier, younger skin beneath. The peel can treat a number of skin concerns including sun damage and aging, acne scarring, pigmentation, uneven skin tone and texture, redness, and rosacea, fine lines, and wrinkles.
        </p>
        <p className="my-1">
        We recommend that you contact us for advice on the most appropriate treatment for your skin type.
        </p>
        </>,
        pricing: null,
        link: "/acid-free-chemical-peels-ottawa/",

    },
    {
        name: "Growth Factor Microneedling",
        image: null,
        content: <p className="my-1">
            Growth Factor Microneedling is a relatively new approach in the beauty industry used to treat skin concerns by encouraging the skin to produce excessive collagen. This revolutionary rejuvenation procedure is conducted using fine, short needles that create invisible injuries on the skin to boost natural self-healing processes. It is a 100% safe procedure that brings tangible results. The skin becomes hydrated and shining while deep wrinkles and scars disappear. A microneedling facial might also be used for reducing sun spots, pigmentation and scars. This next-generation beauty procedure is the perfect alternative to cosmetic surgery. So, if you’re in two minds about what beauty procedure can make your skin look younger, schedule an appointment with our certified cosmetics specialists. We will check your skin’s quality to conclude whether you’re the right candidate for this procedure. 
        </p>,
        pricing: [
            {
                description: "75 Minute Session",
                cost: "$295",
            }
        ],
        link: "/growth-factor-microneedling-ottawa/",
    },
    {
        name: "Intensive Acne Treatment (with LED lights or/and Micro-current)",
        image: <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ledLightTherapy.jpg?raw=true" className="h-full w-full"  alt="Essence of Beauty Ottawa Led Photo Facial Treatment"/>,
        imagePosition: 'right',
        content: <>
        <p className="my-1">
        A thorough and intensive acne deep cleansing, purifying treatment combined with LED lights or micro-current for anyone that has been unsuccessful in achieving desired results. These modalities are used in treating acne by increasing collateral circulation, improving intracellular hydration thereby flushing out the toxins, eliminating bacteria internally and topically and preventing future breakouts while improving the overall radiance of the skin.
        </p>
        <p className="my-1">
        This facial focuses on exfoliation and extraction of waste materials found on the skin. This effective treatment helps clean and tighten your pores, eliminates excess sebum, reduces inflammation and the formation of pimples, blackheads, and whiteheads. Your skin will be refreshed and more glowing after this treatment without the harsh additives of the other skin care lines on the market! If you are serious and consistent in treating your acne you will see noticeable results.
        </p>
        </>,
        pricing: [
            {
                description: "85 Minute Session",
                cost: "$178",
            }
        ],
        link: '/led-photo-facial-light-therapy/',
    },
    {
        name: "Nourishing Facial",
        image: null,
        content: <p className="my-1">Working to improve stressed and dehydrated skin, this replenishing treatment will provide a moisture boost to your skin. Your therapist will select a peel or oxygenation treatment and custom blend a mask specific to your needs. Plump the appearance of fine lines and wrinkles with this deeply nourishing, hydrating treatment. We will tailor a treatment utilising a combination of modalities (peels, masks, LED) to make sure your skin is looking its absolute best. Soothing massage is included throughout the treatment to ensure you leave feeling totally revitalised!</p>,
        pricing: [
            {
                description: "75 Minute Session",
                cost: "$159",
            }
        ],
        link: null,
    },
]