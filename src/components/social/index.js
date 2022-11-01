import React from 'react'
import { MdShare } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'
import { window } from 'browser-monads'

const Share = () => {

    const url = window.location.href

    return(
        <ul className="relative flex flex-row justify-center items-center mt-8">
            <MdShare className="text-xl mr-2" />
            <span className="text-lg text-secondary">Share This Page</span>

                <div className="flex flex-row items-center p-2 transition-colors">
                    <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full p-2 hover:text-green"
                    >
                        <FaFacebookF className="text-xl filter drop-shadow-md" />
                    </a>
                    <a 
                        href={`https://twitter.com/share?url=${url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full p-2 hover:text-accent"
                    >
                        <FaTwitter className="text-xl filter drop-shadow-md" />
                    </a>
                    <a 
                        href={`https://www.linkedin.com/shareArticle?url=${url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full p-2 hover:text-green"
                    >
                        <FaLinkedinIn className="text-xl filter drop-shadow-md" />
                    </a>
                    <a 
                        href={`https://pinterest.com/pin/create/bookmarklet/?url=${url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full p-2 hover:text-green"
                    >
                        <FaPinterestP className="text-xl filter drop-shadow-md" />
                    </a>
                    <a 
                        href={`mailto:?subject= Essence of Beauty Ottawa &amp;body= Check out this page on Essenceofbeauty.ca: ${url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full p-2 hover:text-green"
                    >
                        <FaEnvelope className="text-xl filter drop-shadow-md" />
                    </a>
                </div>
        </ul>
    )
}

export default Share