import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import BeforeAfter from '../components/beforeAfter'
import { Link } from 'gatsby'

const BackAcne = () => {
    return(
        <>
            <Banner
                heading="Back Acne"
                caption="If dealing with facial acne isn’t enough, your body can also be prone to breakouts. Odds are, if you experience acne on your face, pimples have also popped up on your neck, chest and back. At Essence of Beauty, we create individual programs for each client to achieve desired results for treating back acne!"
                image={<StaticImage src="../assets/images/backAcneHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8 md:my-8">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col p-4 md:p-8 md:w-3/5" >
                        <h1 className="my-4">Say goodbye to body acne on your back, chest & shoulders</h1>
                        <p className="mt-1 mb-2">
                        Acne that emerges on your body is caused by imbalances because of toxins from a hypertrophy of candida in the digestive tract. It is often provoked by medication, excessive consumption of sugar, and mucus-producing foods such as dairy and fried foods and eggs and many other factors.
                        </p>
                        <p className="mt-1 mb-2">
                        There are definitely ways to get body acne under control. With our advice, you stand a very good chance of quickly seeing clearer, smoother, and more even-toned skin.
                        </p>
                        <p className="mt-1 mb-2">
                        We recommend skin <Link to="/new-client-acne-consultation" className="hover:text-green font-bold">consultations</Link> to every new client that visits or enquires. It’s the only way we can provide you with our expert advice and help you achieve your desired results.
                        </p>
                        <p className="mt-1 mb-2">
                        As a skin acne expert, I am very keen to help you achieve clear skin as well as providing you with a sense of confidence.
                        </p>
                        <span className="my-4"><strong>Back Acne Treatment:</strong> $178</span>
                    </div>
                    <div className="md:w-2/5 md:m-4">
                        <BeforeAfter
                            className="rounded-lg shadow-lg h-[400px] my-2 lg:my-0 mx-2"
                            beforeImage={<StaticImage src="../assets/images/backAcneBefore.png" alt="Back Acne Before Treatment Image" />}
                            afterImage={<StaticImage src="../assets/images/backAcneAfter.png" alt="Back Acne After Treatment Image" />}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default BackAcne