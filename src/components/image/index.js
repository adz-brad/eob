import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'

const Image = ({ className, children }) => {
    return(
        <div className={`cursor-pointer hover:shadow-xl ${className}`}>
            <SRLWrapper options={{
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
                    }}>
                {children}
            </SRLWrapper>
        </div>
    )
}

export default Image