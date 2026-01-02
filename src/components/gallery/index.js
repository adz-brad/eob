import React, { useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import { GatsbyImage } from 'gatsby-plugin-image'

const Gallery = ({ className, images, imageClass }) => {

    const [ pagination, setPagination ] = useState(0)

    function paginate (arr, size) {
        return arr.reduce((acc, val, i) => {
          let idx = Math.floor(i / size)
          let page = acc[idx] || (acc[idx] = [])
          page.push(val)
      
          return acc
        }, [])
      }

    let pageSize = 8
    let pages = paginate(images, pageSize)

    const Image = ({ _key, image }) => {
        return(
            <div key={_key} className="image-wrapper cursor-pointer hover:shadow-xl">

                    <GatsbyImage loading="lazy" image={image.props.__imageData} alt={image.props.alt} className={`h-full w-full ${imageClass}`}/>
                
            </div>
        )
    }

    if(images){
        if(images.length > 8 && images.length !== 1){
            return(
                <SRLWrapper
                options={{
                    buttons: { 
                        showDownloadButton: false,
                        showThumbnailsButton: false,
                        showAutoplayButton: false,
                        showNextButton: true,
                        showPrevButton: true,
                    },
                    thumbnails: {
                        showThumbnails: false
                    }
                }}
            >
                    { pages.map((page, i) => {
                        if(pagination === i){
                            return(
                                <div key={i} className={className}>
                                    {page.map((image, i) => {
                                        return(
                                            <Image image={image} _key={i}/>
                                        )
                                    })}
                                </div>
                            )
                        }
                        return null
                    })}
                    <nav className="text-center mt-4" aria-label="Gallery pagination">
                     { pagination === 0 ? 
                        null
                    :                             
                        <button 
                            onClick={() => setPagination(pagination - 1)}
                            className="text-2xl p-2 hover:text-green text-brown"
                            aria-label="Previous page"
                        >
                        Previous
                        </button>
                    }
                    { pages.map((page, i) => {
                        return(

                            <button 
                                key={i}
                                onClick={() => setPagination(i)}
                                className={`text-2xl p-2 hover:text-green ${pagination === i ? 'text-green font-bold' : 'text-brown'}`}
                                aria-label={`Go to page ${i + 1}`}
                                aria-current={pagination === i ? 'page' : undefined}
                            >
                                {i+1}
                            </button>

                        )
                    })}
                    { pagination === pages.length - 1 ? 
                        null
                    :                             
                        <button 
                            onClick={() => setPagination(pagination + 1)}
                            className="text-2xl p-2 hover:text-green text-brown"
                            aria-label="Next page"
                        >
                        Next
                        </button>
                    }
                    </nav>
                    </SRLWrapper>
            )
        }
        else if(images.length === 1){
            return(
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
                <div className={className}>
                    {images.map((image, i) => {
                        return(
                            <Image image={image} _key={i}/>
                        )
                    })}
                </div>
                </SRLWrapper>
            )
        }
        else if(images.length > 1 && images.length <= 8){
            return(
                <SRLWrapper
                options={{
                    buttons: { 
                        showDownloadButton: false,
                        showThumbnailsButton: false,
                        showAutoplayButton: false,
                        showNextButton: true,
                        showPrevButton: true,
                    },
                    thumbnails: {
                        showThumbnails: false
                    }
                }}
            >
                <div className={className}>
                    {images.map((image, i) => {
                        return(
                            <Image image={image} _key={i}/>
                        )
                    })}
                </div>
                </SRLWrapper>
            )
        }
    }
}

export default Gallery