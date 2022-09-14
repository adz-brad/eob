import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import { GatsbyImage } from 'gatsby-plugin-image'

const Gallery = ({ className, images, imageClass }) => {

    const Image = ({ _key, image }) => {
        return(
            <div key={_key} className="image-wrapper cursor-pointer hover:shadow-xl">
                <SRLWrapper
                    options={{
                        buttons: { 
                            showDownloadButton: false,
                            showThumbnailsButton: false,
                            showAutoplayButton: false,
                            showNextButton: false,
                            showPrevButton: false,
                        },
                        thumbnails: {
                            showThumbnails: false
                        }
                    }}
                >
                    <GatsbyImage image={image.props.__imageData} alt={image.props.alt} className={`h-full w-full ${imageClass}`}/>
                </SRLWrapper>
            </div>
        )
    }


    return(
        <div className={className}>
            {images ?
                images.map((image, i) => {
                    return(
                        <Image image={image} _key={i}/>
                    )
                })
            : null }
        </div>
    )
}

export default Gallery