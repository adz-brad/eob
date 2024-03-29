import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const BackAcne = () => {
    return (
        <>

            <Banner
                heading="Back Acne"
                gradient="from-black/40 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Back Acne Treatment" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/backAcneHeader.jpg?raw=true" />}
            />
            <div className="p-4 lg:p-8 md:my-8">
                <div className="flex flex-col">
                    <div className="flex flex-col p-4 md:p-8" >
                        <h1 className="text-2xl md:text-4xl my-4 font-semibold">Say Goodbye To Back, Chest & Shoulder Acne</h1>
                        <h2 className="text-xl md:text-2xl mb-6 subheader">Essence of Beauty Ottawa Acne Clinic treatments are proven to help clear up body acne with amazing results.</h2>
                        <p className="mt-1 mb-2">
                            Acne that emerges on your body is caused by imbalances because of toxins from a hypertrophy of candida in the digestive tract. It is often provoked by medication, excessive consumption of sugar, and mucus-producing foods such as dairy and fried foods and eggs and many other factors.
                        </p>
                        <p className="mt-1 mb-2">
                            There are definitely ways to get body acne under control. With our advice, you stand a very good chance of quickly seeing clearer, smoother, and more even-toned skin.
                        </p>
                        <p className="mt-1 mb-2">
                            We recommend skin <Link to="/new-client-acne-consultation/" className="hover:text-green font-bold">consultations</Link> to every new client that visits or enquires. It’s the only way we can provide you with our expert advice and help you achieve your desired results.
                        </p>
                        <p className="mt-1 mb-2">
                            As a skin acne expert, I am very keen to help you achieve clear skin as well as providing you with a sense of confidence.
                        </p>
                        <span className="my-4"><strong className="text-brown">Back Acne Treatment:</strong> $178</span>
                    </div>
                    <p className="my-1">You can <Link to="holistic-acne-clinic-ottawa/">click here</Link> to learn more about the Essence of Beauty <Link to="holistic-acne-clinic-ottawa/">Holistic Acne Clinic.</Link></p>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto my-8">
                <div className="flex flex-col items-center my-4">
                    <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                    <span className="mb-8">Comparing before & treatment</span>
                </div>
                <Gallery
                    className="grid grid-col-1 gap-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/holisticAcne8.jpg?raw=true" alt="Before & After Back Acne Treatment" />
                    ]}
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold mt-8 mb-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default BackAcne

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Back Acne Treatment Ottawa - Treat Breakouts On Your Neck, Chest & More"
                pageDescription="If you experience acne on your face, chances are pimples have also popped up on your neck, chest and back. At Essence of Beauty, we create individual programs for each client to achieve desired results for treating back acne!"
                pageKeywords="Back Acne, Neck acne, chest acne, Skincare, Safe, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/back-acne-treatment-ottawa/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/backAcneHeader.jpg?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/back-acne-treatment-ottawa/" />
        </>
    )
} 